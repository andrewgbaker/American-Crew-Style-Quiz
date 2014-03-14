# JiffyWorks Framework Site JS
# 
# Author: Pete Larson <plarson@jiffymedia.com>
# Version: 1.5.0
# Last Modified: 12.16.2012

window.debug_enabled = true
window.send_scroll_complete = false

window.defaults =
  globalJQEasing: 'easeOutCubic'
  mobileWidth: 640
  iPadWidth: 768

if TweenLite?
  defaults.globalEasing = Cubic.easeOut

$.Body = $('body')
$.Window = $(window)
# if ($.browser.mozilla? or $.browser.msie?) then $.Scroll = $('html') else $.Scroll = $.Body
$.Scroll = $.Body

$.MobileWebkit = ($.Body.hasClass('webkit-mobile') or (navigator.userAgent.match(/iPhone/i)) or (navigator.userAgent.match(/iPod/i)) or (navigator.userAgent.match(/iPad/i)))
$.MobileDevice = ((navigator.userAgent.match(/iPhone/i)) or (navigator.userAgent.match(/iPod/i)) or (navigator.userAgent.match(/Android/i)))
$.Tablet = ((navigator.userAgent.match(/iPad/i)))

$.Events = 
    KEY_ESC: 'keyEscape'
    KEY_ENTER: 'keyEnter'
    KEY_SPACE: 'keySpace'
    KEY_UP: 'keyUp'
    KEY_DOWN: 'keyDown'
    KEY_RIGHT: 'keyRight'
    KEY_LEFT: 'keyLeft'
    RESIZE: 'resizeSite'
    RESIZE_COMPLETE: 'resizeSiteComplete'
    SCROLL_COMPLETE: 'scrollComplete'
    CLICK: 'click'
    TOUCH_START: 'touchstart'
    CHANGE: 'change'
    SUBMIT: 'submit'
    FOCUS: 'focus'
    BLUR: 'blur'
    MOUSE_OVER: 'mouseover'
    MOUSE_OUT: 'mouseout'
    MOUSE_ENTER: 'mouseenter'
    MOUSE_LEAVE: 'mouseleave'
    MOUSE_DOWN: 'mousedown'
    MOUSE_UP: 'mouseup'
    SCROLL: 'scroll'
    SHOWN: 'shown'
    SHOW: 'show'
    HIDE: 'hide'
    HIDDEN: 'hidden'
    FRAMEWORK_INSTANTIATED: 'frameworkInstantiated'
    WIDTH_FORMAT_CHANGE: "width_format_change"
    INITIALIZE_DATASCRIPTS: "initialize_datascripts"
    SHOW_MESSAGE: 'show_message'
    VALIDATE_FORM: 'validate_form'
    FORM_IS_VALID: 'form_is_valid'

$.Messages = 
  FILL_IN_ALL_REQUIRED_FIELDS: "Please fill in all required fields"

$ ->
  #shortcut to setting the id of an element
  $.fn.id = (element_id) ->
    if element_id? then $(this).attr("id",element_id)
    return $(this).attr("id")

  #You can use the data-script attribute to instantiate an object
  #  If you want multiple objects on the same html element, you can separate
  #  the controller names by commas
  $.fn.Instantiate = (settings) ->
    config = settings

    this.each (index) ->
      $me = $(this)
      _instantiateController = (controller_name) ->
        if $me[controller_name]?
          $me[controller_name](controller_name,config) 
        else
          debug "Couldn't find controller: " + controller_name

        
      controller_names = $me.data("script").split(",")
      _instantiateController controller_name for controller_name in controller_names
  
  $.fn.Framework = (name,defaults) ->
    #Initialize
    config = 
        myName: name
      if defaults? then jQuery.extend(config, defaults)
    
    #Private Functions
    _scrollTimeout = null
    _init = () ->
      register($.Events.INITIALIZE_DATASCRIPTS,config.myName,_initializeDataScripts)
      #set up the google analytics class. This call needs to be reworked
      if config.analyticsEnabled then $.Body.GoogleAnalytics()
      _resize()
      # register($.Events.SCROLL,name,_scroll)
      $(window).on('resize',_resize)
      # send out the event that the framework has been instantiated
      trigger($.Events.FRAMEWORK_INSTANTIATED,defaults)
    _initializeDataScripts = (evt) ->
      #Instantiate any objects with the "data-script" attribute
      if $('[data-script]').size() > 0 then $('[data-script]').Instantiate(defaults)
    _resize = (evt) ->
      $.Window.windowWidth = $.Window.width()
      $.Window.windowHeight = $.Window.height()
      
      $.Window.trigger($.Events.RESIZE)
      clearTimeout(@resizeTimer)
      @resizeTimer = setTimeout(_resizeCallback,150);
      
    _resizeCallback = ->
      clearTimeout(@resizeTimer);
      _resizeComplete();
      
    _resizeComplete = ->
      $.Window.windowWidth = $.Window.width()
      $.Window.windowHeight = $.Window.height()
      $.Window.triggerHandler($.Events.RESIZE_COMPLETE)
    
    _scroll = (evt) ->
      # if($.MobileDevice or $.Tablet) then return
      # if(not send_scroll_complete?) then evt.preventDefault();
      # scrollDistance = Math.abs($.Window.scrollTop() - lastScrollTop)
      # scrollSpeed = (scrollDistance/$.Body.height())*50000
      # if (lastScrollTop < $.Window.scrollTop()) then scrollDirection = 1 else scrollDirection = -1
      # if(lastScrollTop is $.Window.scrollTop()) then scrollDirection = 0
      # lastScrollTop = $.Window.scrollTop()
      # clearTimeout(_scrollTimeout)
      # if send_scroll_complete?
      #   _scrollTimeout = setTimeout(_triggerScrollComplete,300)
      
    _triggerScrollComplete = ->
      clearTimeout(_scrollTimeout)
      if(send_scroll_complete) then $.Window.triggerHandler($.Events.SCROLL_COMPLETE)

    _init()

  $.fn.FormWithRequiredFields = (objectName,@settings) ->
    $parent = $(this)

    if not config? then config = {}
    config.myName = objectName
    if @settings? then jQuery.extend(config, @settings)

    this.each (index) ->
      $me = $(this)
      _required_fields = $me.find("input.required, select.required, textfield.required")
      _a_required_field_is_blank = false

      _init = () ->
        if $me.data('submitonvalid') == true
          register($.Events.SUBMIT,config.myName,_on_form_submit,$me)
        else
          register($.Events.VALIDATE_FORM,config.myName,_on_form_submit,$me)

        register($.Events.BLUR,config.myName,_on_field_blur,_required_fields)
        # register($.Events.SUBMIT,config.myName,_on_form_submit,$me)

      _on_field_blur = () ->
        if $(this).val() != ""
          $(this).removeClass("invalid")

      _check_complete = (field) ->
        the_field = $(field)
        if the_field.val() is ""
          _a_required_field_is_blank = true
          the_field.addClass("invalid")
        
      _on_form_submit = (evt) ->
        if evt then evt.preventDefault()
        
        _a_required_field_is_blank = false
        
        _check_complete field for field in _required_fields

        if _a_required_field_is_blank
          trigger($.Events.SHOW_MESSAGE,$.Messages.FILL_IN_ALL_REQUIRED_FIELDS)
        else
          if $me.data('submitonvalid')
            $me.get(0).submit()
          else
            trigger($.Events.FORM_IS_VALID,null,$me)

      _init()

# Utility Framework Functions
window.debug = (message,level = "debug") ->
	if window.debug_enabled and console and console.log?
  	switch level
  		when "warn"
  			level = 2
  			console.warn message
  		when "error"
  			level = 3
  			console.error message
  		else
  			level = 1
  			console.log message

window.puts = (message,level = "debug") ->
  window.debug(message,level)
  			
window.register = (eventName,namespace,handler,listenObj = jQuery.Window) ->
  listenObj.on(eventName+'.'+namespace,handler);

window.listen_to = (eventName,namespace,handler,listenObj = jQuery.Window) ->
  listenObj.on(eventName+'.'+namespace,handler);

window.destroy = (namespace,destroyObj = jQuery.Window) ->
  destroyObj.off('.'+namespace);
  
window.trigger = (eventName,data,triggerObj = jQuery.Window) ->
  if data? then triggerObj.triggerHandler(eventName, data) else triggerObj.triggerHandler(eventName)

window.announce = (eventName,data,triggerObj = jQuery.Window) ->
  if data? then triggerObj.triggerHandler(eventName, data) else triggerObj.triggerHandler(eventName)

window.px = (css_pixel_value) ->
  try 
    return parseFloat(css_pixel_value) + "px"
  catch error
    return css_pixel_value