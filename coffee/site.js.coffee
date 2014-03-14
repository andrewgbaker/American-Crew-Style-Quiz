window.debug_enabled = true

$.CustomEvents =
	SITE_INITIALIZED: "site_initialized"
	SLIDE_CHANGE: "SLIDE_CHANGE"
	MOUSE_WHEEL: "mousewheel"
	HEADER_TOGGLE: "HEADER_TOGGLE"
	TOUCH_MOVE: "touchmove"
	ANSWER_CLICK: "ANSWER_CLICK"
	QUESTION_NAV_CLICKED: "QUESTION_NAV_CLICKED"

$.PageName = ''
$.MobileSize = false
$.iPadSize = false

window.custom_defaults =
	default_fade_duration: .2
	close_choices_timeout: 300
	question_scroll_duration: .65
	tileFadeInDuration: .6
	full_page_opts:
		verticalCentered: true
		resize: false
		anchors:['looks']
		scrollingSpeed: 700
		easing: 'easeInQuart'
		menu: false
		navigation: false
		navigationPosition: 'right'
		navigationTooltips: ['looks']
		slidesNavigation: true
		slidesNavPosition: 'bottom'
		css3: true

$ ->
	$.fn.Site = (objectName,@settings) ->
		$parent = $(this)

		if not config? then config = {}
		config.myName = objectName
		if @settings? then jQuery.extend(config, @settings)

		this.each (index) ->
			$me = $(this)

			_initialize_plugins = () ->				
				# if $.Body.hasClass("")
				$.Window.swipe( {
					swipe:_on_swipe,
					threshold:0,
					fingers:'all'
				});
				# $.fn.fullpage({
				# 	verticalCentered: true,
				# 	resize : false,
				# 	anchors:['firstSlide', 'secondSlide'],
				# 	scrollingSpeed: 700,
				# 	easing: 'easeInQuart',
				# 	menu: false,
				# 	navigation: false,
				# 	navigationPosition: 'right',
				# 	navigationTooltips: ['firstSlide', 'secondSlide'],
				# 	slidesNavigation: true,
				# 	slidesNavPosition: 'bottom',
				# 	css3: true
				# });

			_on_scroll = (evt) ->
				scroll_distance  = evt.deltaFactor * evt.deltaY
				if scroll_distance > 99
					announce $.Events.HEADER_TOGGLE

			_on_swipe = (evt,direction,distance,duration,fingerCount) ->
				# debug "direction"+direction
				# debug "distance"+distance
				# debug "duration"+duration
				# if direction == 
				announce $.Events.HEADER_TOGGLE
				# Unbind the event so that the header 
				# only toggles once for touch devices
				$.Window.swipe("destroy")
			
			_init = () ->
				listen_to $.Events.RESIZE, config.myName, _resize
				listen_to $.Events.MOUSE_WHEEL, config.myName, _on_scroll
				listen_to $.Events.TOUCH_MOVE, config.myName, _on_swipe
				_resize()
				announce $.Events.INITIALIZE_DATASCRIPTS
				announce $.Events.SITE_INITIALIZED
				_initialize_plugins()

				$(".results").ResultsPage('ResultsPage',config)

			_resize = () ->
				if $.Window.windowWidth < 480
					if $("#interior-feature p").length > 0
						$("#interior-feature p").html($("#interior-feature p").html().replace(/<br>/," ").replace(/<br\/>/," "))
					if $(".features p").length > 0
						$(".features p").html($(".features p").html().replace(/<br>/g," ").replace(/<br\/>/g," "))
						
			_init()

	$.fn.ResultsPage = (objectName,@settings) ->
		$parent = $(this)
	
		if not config? then config = {}
		config.myName = objectName
		if @settings? then jQuery.extend(config, @settings)
	
		this.each (index) ->
			$me = $(this)

			_expand_contract_header = () ->
				timeout_function = () ->
					debug "on expand click timeout"
					debug $('.expand div')
					$('.expand div').toggleClass('open')
					$('.looks_logo').toggleClass('hidden')

				$('#section1').toggleClass('look_down')
				$('header').toggleClass('header_up')
				setTimeout(timeout_function, 500)

			_on_mouse_wheel = (event,delta) ->
				if($('#section1').hasClass('look_down'))
					_expand_contract_header()

			_on_touch_move = () ->
				_expand_contract_header()

				$('html').unbind('touchmove');

			_on_expand_click = (evt) ->
				_expand_contract_header()

			_set_for_mobile = () ->
				debug "setting for mobile"
				$('body').css("overflow-y","visible")
				$(".section").attr("style","")

			_hide_loader = () ->
				$('.load_wrap').addClass('hideloader')
				if $.Window.windowWidth < 767
					_set_for_mobile()
	
			_init = () ->
				if $.fn.fullpage
					$.fn.fullpage(config.full_page_opts);
				$(window).bind 'mousewheel DOMMouseScroll MozMousePixelScroll', _on_mouse_wheel
				$('html').on 'touchmove', _on_touch_move
				$('.expand').on 'click', _on_expand_click

				imagesLoaded( '.results', _hide_loader)
	
			_init()

	$.fn.QuestionNav = (objectName,@settings) ->
		$parent = $(this)
	
		if not config? then config = {}
		config.myName = objectName
		if @settings? then jQuery.extend(config, @settings)
	
		this.each (index) ->
			$me = $(this)
			_index = index
			_anchors = $me.find("a")

			_set_anchors = (question_number) ->
				$me.find(".active").removeClass("active")
				_anchors.each (index,anchor) =>
					if question_number > index
						$(anchor).removeClass("empty")
					if question_number < index
						$(anchor).addClass("empty")

				_anchors.eq(question_number).addClass("active").removeClass("empty")

			_question_was_answered = (evt,data) ->
				question_number = data.question_index + 1
				answer_number = data.which
				# _anchors.each =>
				# $me.find(".active").removeClass("active")
				_set_anchors question_number
				# _anchors.each (index,anchor) =>
				# 	if question_number > index
				# 		$(anchor).removeClass("empty")
				# 	if question_number < index
				# 		$(anchor).addClass("empty")

				# _anchors.eq(question_number).addClass("active")
		

			_on_anchor_click = (evt) ->
				evt.preventDefault()
				unless $(this).hasClass("empty")
					answer_obj =
						which: 0
						question_index: $(this).data("anchornum")
						# question_index: 1
						
					announce $.Events.QUESTION_NAV_CLICKED, answer_obj

					debug "setting anchors"
					_set_anchors $(this).data("anchornum")+1
	
			_init = () ->
				listen_to $.Events.ANSWER_CLICK, config.myName, _question_was_answered
				listen_to $.Events.CLICK, config.myName, _on_anchor_click, $("nav a")
				_anchors.eq(0).addClass("active").removeClass("empty")
				_anchors.each (index,anchor) =>
					$(anchor).attr("data-anchornum",index-1)
	
			_init()

	$.fn.QuizTracker = (objectName,@settings) ->
		$parent = $(this)
	
		if not config? then config = {}
		config.myName = objectName
		if @settings? then jQuery.extend(config, @settings)
	
		this.each (index) ->
			$me = $(this)
			_points_matrix = new Array
			_quiz_answer_matrix = new Array
			_quiz_answers =
				clothes: 0
				music: 0
				friday_plans: 0
				drinking: 0
				girl: 0
				hair: 0
			# _form = $me.find("form")
			# 
			_send_quiz_answers = () ->
				_determine_type_and_look()

			_question_was_answered = (evt,data) ->
				question_number = data.question_index
				answer_number = data.which
				quiz_completed = true
				question_group = $(".question-group").eq(question_number)
				question_id = question_group.attr("id")
				_quiz_answers[question_id] = answer_number
				$("#value-"+question_id).val(answer_number)

				for quiz_question,quiz_answer of _quiz_answers
					if quiz_answer is 0
						quiz_completed = false

				if quiz_completed
					_send_quiz_answers()

			_set_category_points = (category) ->
				answer = _quiz_answer_matrix[category][_quiz_answers[category]]
				_points_matrix[answer] = parseInt(parseInt(_points_matrix[answer]) + 1)

			_determine_type_and_look = () ->
				_points_matrix['revolutionary'] = 0
				_points_matrix['player'] = 0
				_points_matrix['gentleman'] = 0
				_points_matrix['maverick'] = 0
				_points_matrix['mansman'] = 0

				_quiz_answer_matrix.clothes = new Array
				_quiz_answer_matrix.music = new Array
				_quiz_answer_matrix.friday_plans = new Array
				_quiz_answer_matrix.drinking = new Array
				_quiz_answer_matrix.girl = new Array

				# Clothes Points
				_quiz_answer_matrix.clothes[0] = ""
				_quiz_answer_matrix.clothes[1] = "revolutionary"
				_quiz_answer_matrix.clothes[2] = "player"
				_quiz_answer_matrix.clothes[3] = "gentleman"
				_quiz_answer_matrix.clothes[4] = "maverick"
				_quiz_answer_matrix.clothes[5] = "mansman"

				# Music Points
				_quiz_answer_matrix.music[0] = ""
				_quiz_answer_matrix.music[1] = "gentleman"
				_quiz_answer_matrix.music[2] = "maverick"
				_quiz_answer_matrix.music[3] = "mansman"
				_quiz_answer_matrix.music[4] = "revolutionary"
				_quiz_answer_matrix.music[5] = "player"

				# Friday Plans Points
				_quiz_answer_matrix.friday_plans[0] = ""
				_quiz_answer_matrix.friday_plans[1] = "maverick"
				_quiz_answer_matrix.friday_plans[2] = "gentleman"
				_quiz_answer_matrix.friday_plans[3] = "revolutionary"
				_quiz_answer_matrix.friday_plans[4] = "mansman"
				_quiz_answer_matrix.friday_plans[5] = "player"

				# Drinking Points
				_quiz_answer_matrix.drinking[0] = ""
				_quiz_answer_matrix.drinking[1] = "maverick"
				_quiz_answer_matrix.drinking[2] = "gentleman"
				_quiz_answer_matrix.drinking[3] = "player"
				_quiz_answer_matrix.drinking[4] = "revolutionary"
				_quiz_answer_matrix.drinking[5] = "mansman"

				# Girl Points
				_quiz_answer_matrix.girl[0] = ""
				_quiz_answer_matrix.girl[1] = "gentleman"
				_quiz_answer_matrix.girl[2] = "mansman"
				_quiz_answer_matrix.girl[3] = "revolutionary"
				_quiz_answer_matrix.girl[4] = "maverick"
				_quiz_answer_matrix.girl[5] = "player"

				_set_category_points 'clothes'
				_set_category_points 'music'
				_set_category_points 'friday_plans'
				_set_category_points 'drinking'
				_set_category_points 'girl'
				# _set_category_points 'hair'
				
				debug _points_matrix

				max_points = 0
				highest_category = ''
				tied_categories = new Array
				for type,answer of _points_matrix
					if answer > max_points	
						highest_category = type
						tied_categories = new Array
						max_points = answer

					if answer == max_points
						tied_categories.push type
						highest_category = 'wildcard'

				if _quiz_answers.hair < 3
					look_slide = 'two'
				else
					randInt = (Math.floor(Math.random() * (2)))
					
					if randInt == 0
						look_slide = 'one'
					else
						look_slide = 'three'

				# points_matrix
				$me.attr("action",highest_category+"/#"+"looks/"+look_slide)
				$me.get(0).submit()

	
			_init = () ->
				listen_to $.Events.ANSWER_CLICK, config.myName, _question_was_answered
				
	
			_init()

	$.fn.QuestionPage = (objectName,@settings) ->
		$parent = $(this)
	
		if not config? then config = {}
		config.myName = objectName
		if @settings? then jQuery.extend(config, @settings)
	
		this.each (index) ->
			$me = $(this)

			_scroll_to_question = (which) ->
				_next_question_top = $(".question-group").eq(which).offset().top
				TweenLite.to(window,config.question_scroll_duration,{ease:Quint.easeInOut,scrollTo:{y:_next_question_top,ease:Quint.easeInOut}})

			_on_address_change = (evt) ->
				if evt.value.indexOf("question-") > -1
					question_number = evt.value.replace("/question-","")
					_scroll_to_question question_number

			_on_answer_click = (evt,data) ->
				answer_clicked = data.which
				question_index_clicked = data.question_index
				if question_index_clicked < $(".question-group").length
					# debug "scrolling"
					# _next_question_top = $(".question-group").eq(question_index_clicked+1).offset().top
					# TweenLite.to(window,config.question_scroll_duration,{ease:Quint.easeInOut,scrollTo:{y:_next_question_top,ease:Quint.easeInOut}})
					next_question_number = parseInt(question_index_clicked)+1
					if next_question_number < 6
						_scroll_to_question next_question_number
					# $.address.value("question-"+next_question_number)

			_enable_tile_backs = () ->
				$("#your-closet section .back").css("display","table")

			_animate_in_tiles = () ->
				debug "animating in tiles"
				intro_animation = new TimelineLite()
				timeline = new TimelineLite()
				timeline.pause()
				$("#your-closet section").each (index,tile) =>
					TweenLite.to(tile, 0, {autoAlpha:0})
					puts tile
					delay_string = "=-"+config.tileFadeInDuration*.66
					puts delay_string
					timeline.append(TweenLite.to(tile, 1, {autoAlpha:1}), delay_string)
				timeline.resume()
			
			_hide_loader = () ->
				$('.load_wrap').addClass('hideloader');

			_init = () -> 
				# $.address.change _on_address_change
				debug "init question page"
				$.Body.animate({scrollTop:0})
				listen_to $.Events.ANSWER_CLICK, config.myName, _on_answer_click
				listen_to $.Events.QUESTION_NAV_CLICKED, config.myName, _on_answer_click
				$(".question-group").Question("Question",config)
				# _animate_in_tiles
				# setTimeout _animate_in_tiles, 3000
				# _animate_in_tiles
				$me.find("nav").QuestionNav('QuestionNav',config)
				puts "images load checking"
				imagesLoaded( '#clothes', _hide_loader)

			_init()

	$.fn.Question = (objectName,@settings) ->
		$parent = $(this)
	
		if not config? then config = {}
		config.myName = objectName
		if @settings? then jQuery.extend(config, @settings)
	
		this.each (index) ->
			$me = $(this)
			_index = index
	
			_init = () ->
				config.question_id = $me.attr("id")
				config.question_index = _index
				$me.find(".answer-tile").AnswerTile('AnswerTile',config)
	
			_init()

	$.fn.AnswerTile = (objectName,@settings) ->
		$parent = $(this)
	
		if not config? then config = {}
		config.myName = objectName
		if @settings? then jQuery.extend(config, @settings)
	
		this.each (index) ->
			$me = $(this)
			_index = index + 1;
	
			_init = () ->
				listen_to $.Events.CLICK, config.myName, _on_click, $me.find(".back")
				# listen_to $.Events.TOUCH_START, config.myName, _on_click, $me.find(".back")

			_on_click = (evt) ->
				evt.preventDefault();

				answer_obj = 
					which: _index
					question_id: config.question_id
					question_index: config.question_index
				announce $.Events.ANSWER_CLICK, answer_obj
				
	
			_init()

	$.fn.LooksLogo = (objectName,@settings) ->
		$parent = $(this)
	
		if not config? then config = {}
		config.myName = objectName
		if @settings? then jQuery.extend(config, @settings)
	
		this.each (index) ->
			$me = $(this)


	
			_init = () ->
				
	
			_init()

	$.fn.Header = (objectName,@settings) ->
		$parent = $(this)
	
		if not config? then config = {}
		config.myName = objectName
		if @settings? then jQuery.extend(config, @settings)
	
		this.each (index) ->
			$me = $(this)

			_on_mouse_wheel = (event, delta) ->
				_trigger_expand = () ->
					$('.expand div').toggleClass('open');
					$('.looks_logo').toggleClass('hidden');

				if $('#section1').hasClass('look_down')
					$('#section1').toggleClass('look_down')
					$me.toggleClass('header_up')

					setTimeout _trigger_expand, 500

				return false;
	
			_init = () ->
				listen_to($.Events.MOUSE_WHEEL,config.myName,_on_mouse_wheel)
	
			_init()

	$.fn.Modal = (objectName,@settings) ->
		$parent = $(this)
	
		if not config? then config = {}
		config.myName = objectName
		if @settings? then jQuery.extend(config, @settings)
	
		this.each (index) ->
			$me = $(this)
	
			_init = () ->
				listen_to $.Events.CLICK, config.myName, _onClick, $me
			
			_onClick = (evt) ->
				evt.preventDefault()
				modal_opts = 
					opacity: 0
				$me.modal(modal_opts)
	
			_init()

	$.fn.Slide = (objectName,@settings) ->
		$parent = $(this)
	
		if not config? then config = {}
		config.myName = objectName
		if @settings? then jQuery.extend(config, @settings)
	
		this.each (index) ->
			$me = $(this)

			_on_slide_change = (evt) ->
				debug "the slide has changed"
	
			_init = () ->
				listen_to $.Events.SLIDE_CHANGE, config.myName, _on_slide_change
	
			_init()

_docReady = (evt) ->
	if $.CustomEvents? then jQuery.extend($.Events, $.CustomEvents)
	if $.CustomMessages? then jQuery.extend($.Messages, $.CustomMessages)
	if window.custom_defaults? then jQuery.extend(window.defaults, window.custom_defaults)

	framework = $('body').Framework("AmericanCrew",defaults) 
	site = $('body').Site("AmericanCrew",defaults)

$(document).ready(_docReady)