// Generated by CoffeeScript 1.6.3
(function() {
  var _docReady;

  window.debug_enabled = true;

  window.send_scroll_complete = false;

  window.defaults = {
    globalJQEasing: 'easeOutCubic',
    mobileWidth: 640,
    iPadWidth: 768
  };

  if (typeof TweenLite !== "undefined" && TweenLite !== null) {
    defaults.globalEasing = Cubic.easeOut;
  }

  $.Body = $('body');

  $.Window = $(window);

  $.Scroll = $.Body;

  $.MobileWebkit = $.Body.hasClass('webkit-mobile') || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i));

  $.MobileDevice = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/Android/i));

  $.Tablet = navigator.userAgent.match(/iPad/i);

  $.Events = {
    KEY_ESC: 'keyEscape',
    KEY_ENTER: 'keyEnter',
    KEY_SPACE: 'keySpace',
    KEY_UP: 'keyUp',
    KEY_DOWN: 'keyDown',
    KEY_RIGHT: 'keyRight',
    KEY_LEFT: 'keyLeft',
    RESIZE: 'resizeSite',
    RESIZE_COMPLETE: 'resizeSiteComplete',
    SCROLL_COMPLETE: 'scrollComplete',
    CLICK: 'click',
    CHANGE: 'change',
    SUBMIT: 'submit',
    FOCUS: 'focus',
    BLUR: 'blur',
    MOUSE_OVER: 'mouseover',
    MOUSE_OUT: 'mouseout',
    MOUSE_ENTER: 'mouseenter',
    MOUSE_LEAVE: 'mouseleave',
    MOUSE_DOWN: 'mousedown',
    MOUSE_UP: 'mouseup',
    SCROLL: 'scroll',
    SHOWN: 'shown',
    SHOW: 'show',
    HIDE: 'hide',
    HIDDEN: 'hidden',
    FRAMEWORK_INSTANTIATED: 'frameworkInstantiated',
    WIDTH_FORMAT_CHANGE: "width_format_change",
    INITIALIZE_DATASCRIPTS: "initialize_datascripts",
    SHOW_MESSAGE: 'show_message',
    VALIDATE_FORM: 'validate_form',
    FORM_IS_VALID: 'form_is_valid'
  };

  $.Messages = {
    FILL_IN_ALL_REQUIRED_FIELDS: "Please fill in all required fields"
  };

  $(function() {
    $.fn.id = function(element_id) {
      if (element_id != null) {
        $(this).attr("id", element_id);
      }
      return $(this).attr("id");
    };
    $.fn.Instantiate = function(settings) {
      var config;
      config = settings;
      return this.each(function(index) {
        var $me, controller_name, controller_names, _i, _instantiateController, _len, _results;
        $me = $(this);
        _instantiateController = function(controller_name) {
          if ($me[controller_name] != null) {
            return $me[controller_name](controller_name, config);
          } else {
            return debug("Couldn't find controller: " + controller_name);
          }
        };
        controller_names = $me.data("script").split(",");
        _results = [];
        for (_i = 0, _len = controller_names.length; _i < _len; _i++) {
          controller_name = controller_names[_i];
          _results.push(_instantiateController(controller_name));
        }
        return _results;
      });
    };
    $.fn.Framework = function(name, defaults) {
      var config, _init, _initializeDataScripts, _resize, _resizeCallback, _resizeComplete, _scroll, _scrollTimeout, _triggerScrollComplete;
      config = {
        myName: name
      };
      if (defaults != null) {
        jQuery.extend(config, defaults);
      }
      _scrollTimeout = null;
      _init = function() {
        register($.Events.INITIALIZE_DATASCRIPTS, config.myName, _initializeDataScripts);
        if (config.analyticsEnabled) {
          $.Body.GoogleAnalytics();
        }
        _resize();
        $(window).on('resize', _resize);
        return trigger($.Events.FRAMEWORK_INSTANTIATED, defaults);
      };
      _initializeDataScripts = function(evt) {
        if ($('[data-script]').size() > 0) {
          return $('[data-script]').Instantiate(defaults);
        }
      };
      _resize = function(evt) {
        $.Window.windowWidth = $.Window.width();
        $.Window.windowHeight = $.Window.height();
        $.Window.trigger($.Events.RESIZE);
        clearTimeout(this.resizeTimer);
        return this.resizeTimer = setTimeout(_resizeCallback, 150);
      };
      _resizeCallback = function() {
        clearTimeout(this.resizeTimer);
        return _resizeComplete();
      };
      _resizeComplete = function() {
        $.Window.windowWidth = $.Window.width();
        $.Window.windowHeight = $.Window.height();
        return $.Window.triggerHandler($.Events.RESIZE_COMPLETE);
      };
      _scroll = function(evt) {};
      _triggerScrollComplete = function() {
        clearTimeout(_scrollTimeout);
        if (send_scroll_complete) {
          return $.Window.triggerHandler($.Events.SCROLL_COMPLETE);
        }
      };
      return _init();
    };
    return $.fn.FormWithRequiredFields = function(objectName, settings) {
      var $parent, config;
      this.settings = settings;
      $parent = $(this);
      if (typeof config === "undefined" || config === null) {
        config = {};
      }
      config.myName = objectName;
      if (this.settings != null) {
        jQuery.extend(config, this.settings);
      }
      return this.each(function(index) {
        var $me, _a_required_field_is_blank, _check_complete, _init, _on_field_blur, _on_form_submit, _required_fields;
        $me = $(this);
        _required_fields = $me.find("input.required, select.required, textfield.required");
        _a_required_field_is_blank = false;
        _init = function() {
          if ($me.data('submitonvalid') === true) {
            register($.Events.SUBMIT, config.myName, _on_form_submit, $me);
          } else {
            register($.Events.VALIDATE_FORM, config.myName, _on_form_submit, $me);
          }
          return register($.Events.BLUR, config.myName, _on_field_blur, _required_fields);
        };
        _on_field_blur = function() {
          if ($(this).val() !== "") {
            return $(this).removeClass("invalid");
          }
        };
        _check_complete = function(field) {
          var the_field;
          the_field = $(field);
          if (the_field.val() === "") {
            _a_required_field_is_blank = true;
            return the_field.addClass("invalid");
          }
        };
        _on_form_submit = function(evt) {
          var field, _i, _len;
          if (evt) {
            evt.preventDefault();
          }
          _a_required_field_is_blank = false;
          for (_i = 0, _len = _required_fields.length; _i < _len; _i++) {
            field = _required_fields[_i];
            _check_complete(field);
          }
          if (_a_required_field_is_blank) {
            return trigger($.Events.SHOW_MESSAGE, $.Messages.FILL_IN_ALL_REQUIRED_FIELDS);
          } else {
            if ($me.data('submitonvalid')) {
              return $me.get(0).submit();
            } else {
              return trigger($.Events.FORM_IS_VALID, null, $me);
            }
          }
        };
        return _init();
      });
    };
  });

  window.debug = function(message, level) {
    if (level == null) {
      level = "debug";
    }
    if (window.debug_enabled && console && (console.log != null)) {
      switch (level) {
        case "warn":
          level = 2;
          return console.warn(message);
        case "error":
          level = 3;
          return console.error(message);
        default:
          level = 1;
          return console.log(message);
      }
    }
  };

  window.puts = function(message, level) {
    if (level == null) {
      level = "debug";
    }
    return window.debug(message, level);
  };

  window.register = function(eventName, namespace, handler, listenObj) {
    if (listenObj == null) {
      listenObj = jQuery.Window;
    }
    return listenObj.on(eventName + '.' + namespace, handler);
  };

  window.listen_to = function(eventName, namespace, handler, listenObj) {
    if (listenObj == null) {
      listenObj = jQuery.Window;
    }
    return listenObj.on(eventName + '.' + namespace, handler);
  };

  window.destroy = function(namespace, destroyObj) {
    if (destroyObj == null) {
      destroyObj = jQuery.Window;
    }
    return destroyObj.off('.' + namespace);
  };

  window.trigger = function(eventName, data, triggerObj) {
    if (triggerObj == null) {
      triggerObj = jQuery.Window;
    }
    if (data != null) {
      return triggerObj.triggerHandler(eventName, data);
    } else {
      return triggerObj.triggerHandler(eventName);
    }
  };

  window.announce = function(eventName, data, triggerObj) {
    if (triggerObj == null) {
      triggerObj = jQuery.Window;
    }
    if (data != null) {
      return triggerObj.triggerHandler(eventName, data);
    } else {
      return triggerObj.triggerHandler(eventName);
    }
  };

  window.px = function(css_pixel_value) {
    var error;
    try {
      return parseFloat(css_pixel_value) + "px";
    } catch (_error) {
      error = _error;
      return css_pixel_value;
    }
  };

  /* --------------------------------------------
       Begin site.js.coffee
  --------------------------------------------
  */


  window.debug_enabled = true;

  $.CustomEvents = {
    SITE_INITIALIZED: "site_initialized",
    SLIDE_CHANGE: "SLIDE_CHANGE",
    MOUSE_WHEEL: "mousewheel",
    HEADER_TOGGLE: "HEADER_TOGGLE",
    TOUCH_MOVE: "touchmove",
    ANSWER_CLICK: "ANSWER_CLICK",
    QUESTION_NAV_CLICKED: "QUESTION_NAV_CLICKED"
  };

  $.PageName = '';

  $.MobileSize = false;

  $.iPadSize = false;

  window.custom_defaults = {
    default_fade_duration: .2,
    close_choices_timeout: 300,
    question_scroll_duration: .65,
    tileFadeInDuration: .6,
    full_page_opts: {
      verticalCentered: true,
      resize: false,
      anchors: ['looks'],
      scrollingSpeed: 700,
      easing: 'easeInQuart',
      menu: false,
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: ['looks'],
      slidesNavigation: true,
      slidesNavPosition: 'bottom',
      css3: true
    }
  };

  $(function() {
    $.fn.Site = function(objectName, settings) {
      var $parent, config;
      this.settings = settings;
      $parent = $(this);
      if (typeof config === "undefined" || config === null) {
        config = {};
      }
      config.myName = objectName;
      if (this.settings != null) {
        jQuery.extend(config, this.settings);
      }
      return this.each(function(index) {
        var $me, _init, _initialize_plugins, _on_scroll, _on_swipe, _resize;
        $me = $(this);
        _initialize_plugins = function() {
          if ($.fn.fullpage) {
            $.fn.fullpage(config.full_page_opts);
          }
          return $.Window.swipe({
            swipe: _on_swipe,
            threshold: 0,
            fingers: 'all'
          });
        };
        _on_scroll = function(evt) {
          var scroll_distance;
          scroll_distance = evt.deltaFactor * evt.deltaY;
          if (scroll_distance > 99) {
            return announce($.Events.HEADER_TOGGLE);
          }
        };
        _on_swipe = function(evt, direction, distance, duration, fingerCount) {
          debug("direction" + direction);
          debug("distance" + distance);
          debug("duration" + duration);
          announce($.Events.HEADER_TOGGLE);
          return $.Window.swipe("destroy");
        };
        _init = function() {
          listen_to($.Events.RESIZE, config.myName, _resize);
          listen_to($.Events.MOUSE_WHEEL, config.myName, _on_scroll);
          listen_to($.Events.TOUCH_MOVE, config.myName, _on_swipe);
          _resize();
          announce($.Events.INITIALIZE_DATASCRIPTS);
          announce($.Events.SITE_INITIALIZED);
          _initialize_plugins();
          return $(".results").ResultsPage('ResultsPage', config);
        };
        _resize = function() {
          if ($.Window.windowWidth < 480) {
            if ($("#interior-feature p").length > 0) {
              $("#interior-feature p").html($("#interior-feature p").html().replace(/<br>/, " ").replace(/<br\/>/, " "));
            }
            if ($(".features p").length > 0) {
              return $(".features p").html($(".features p").html().replace(/<br>/g, " ").replace(/<br\/>/g, " "));
            }
          }
        };
        return _init();
      });
    };
    $.fn.ResultsPage = function(objectName, settings) {
      var $parent, config;
      this.settings = settings;
      $parent = $(this);
      if (typeof config === "undefined" || config === null) {
        config = {};
      }
      config.myName = objectName;
      if (this.settings != null) {
        jQuery.extend(config, this.settings);
      }
      return this.each(function(index) {
        var $me, _init, _on_expand_click, _on_mouse_wheel, _on_touch_move, _set_for_mobile;
        $me = $(this);
        _on_mouse_wheel = function(event, delta) {
          var timeout_function;
          if ($('#section1').hasClass('look_down')) {
            $('#section1').toggleClass('look_down');
            $('header').toggleClass('header_up');
            timeout_function = function() {
              $('.expand div').toggleClass('open');
              return $('.looks_logo').toggleClass('hidden');
            };
            return setTimeout(timeout_function, 500);
          }
        };
        _on_touch_move = function() {
          if ($('#section1').hasClass('look_down')) {
            $('#section1').toggleClass('look_down');
            $('header').toggleClass('header_up');
          }
          return $('html').unbind('touchmove');
        };
        _on_expand_click = function(evt) {
          var timeout_function;
          timeout_function = function() {
            $('.expand div').toggleClass('open');
            return $('.looks_logo').toggleClass('hidden');
          };
          return setTimeout(timeout_function, 500);
        };
        _set_for_mobile = function() {
          debug("setting for mobile");
          $('body').css("overflow-y", "visible");
          return $(".section").attr("style", "");
        };
        _init = function() {
          $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', _on_mouse_wheel);
          $('html').on('touchmove', _on_touch_move);
          $('.expand').on("click", _on_expand_click);
          if ($.Window.windowWidth < 767) {
            return _set_for_mobile();
          }
        };
        return _init();
      });
    };
    $.fn.QuestionNav = function(objectName, settings) {
      var $parent, config;
      this.settings = settings;
      $parent = $(this);
      if (typeof config === "undefined" || config === null) {
        config = {};
      }
      config.myName = objectName;
      if (this.settings != null) {
        jQuery.extend(config, this.settings);
      }
      return this.each(function(index) {
        var $me, _anchors, _index, _init, _on_anchor_click, _question_was_answered, _set_anchors;
        $me = $(this);
        _index = index;
        _anchors = $me.find("a");
        _set_anchors = function(question_number) {
          var _this = this;
          debug("_set_anchor:" + question_number);
          $me.find(".active").removeClass("active");
          _anchors.each(function(index, anchor) {
            if (question_number > index) {
              $(anchor).removeClass("empty");
            }
            if (question_number < index) {
              return $(anchor).addClass("empty");
            }
          });
          return _anchors.eq(question_number).addClass("active").removeClass("empty");
        };
        _question_was_answered = function(evt, data) {
          var answer_number, question_number;
          question_number = data.question_index + 1;
          answer_number = data.which;
          return _set_anchors(question_number);
        };
        _on_anchor_click = function(evt) {
          var answer_obj;
          evt.preventDefault();
          if (!$(this).hasClass("empty")) {
            answer_obj = {
              which: 0,
              question_index: $(this).data("anchornum")
            };
            announce($.Events.QUESTION_NAV_CLICKED, answer_obj);
            debug("setting anchors");
            return _set_anchors($(this).data("anchornum") + 1);
          }
        };
        _init = function() {
          var _this = this;
          listen_to($.Events.ANSWER_CLICK, config.myName, _question_was_answered);
          listen_to($.Events.CLICK, config.myName, _on_anchor_click, $("nav a"));
          _anchors.eq(0).addClass("active").removeClass("empty");
          return _anchors.each(function(index, anchor) {
            return $(anchor).attr("data-anchornum", index - 1);
          });
        };
        return _init();
      });
    };
    $.fn.QuizTracker = function(objectName, settings) {
      var $parent, config;
      this.settings = settings;
      $parent = $(this);
      if (typeof config === "undefined" || config === null) {
        config = {};
      }
      config.myName = objectName;
      if (this.settings != null) {
        jQuery.extend(config, this.settings);
      }
      return this.each(function(index) {
        var $me, _determine_type_and_look, _init, _points_matrix, _question_was_answered, _quiz_answer_matrix, _quiz_answers, _send_quiz_answers, _set_category_points;
        $me = $(this);
        _points_matrix = new Array;
        _quiz_answer_matrix = new Array;
        _quiz_answers = {
          clothes: 0,
          music: 0,
          friday_plans: 0,
          drinking: 0,
          girl: 0,
          hair: 0
        };
        _send_quiz_answers = function() {
          return _determine_type_and_look();
        };
        _question_was_answered = function(evt, data) {
          var answer_number, question_group, question_id, question_number, quiz_answer, quiz_completed, quiz_question;
          question_number = data.question_index;
          answer_number = data.which;
          quiz_completed = true;
          question_group = $(".question-group").eq(question_number);
          question_id = question_group.attr("id");
          _quiz_answers[question_id] = answer_number;
          $("#value-" + question_id).val(answer_number);
          for (quiz_question in _quiz_answers) {
            quiz_answer = _quiz_answers[quiz_question];
            if (quiz_answer === 0) {
              quiz_completed = false;
            }
          }
          if (quiz_completed) {
            return _send_quiz_answers();
          }
        };
        _set_category_points = function(category) {
          var answer;
          answer = _quiz_answer_matrix[category][_quiz_answers[category]];
          return _points_matrix[answer] = parseInt(parseInt(_points_matrix[answer]) + 1);
        };
        _determine_type_and_look = function() {
          var answer, highest_category, look_slide, max_points, randInt, tied_categories, type;
          _points_matrix['revolutionary'] = 0;
          _points_matrix['player'] = 0;
          _points_matrix['gentleman'] = 0;
          _points_matrix['maverick'] = 0;
          _points_matrix['mansman'] = 0;
          _quiz_answer_matrix.clothes = new Array;
          _quiz_answer_matrix.music = new Array;
          _quiz_answer_matrix.friday_plans = new Array;
          _quiz_answer_matrix.drinking = new Array;
          _quiz_answer_matrix.girl = new Array;
          _quiz_answer_matrix.clothes[0] = "";
          _quiz_answer_matrix.clothes[1] = "revolutionary";
          _quiz_answer_matrix.clothes[2] = "player";
          _quiz_answer_matrix.clothes[3] = "gentleman";
          _quiz_answer_matrix.clothes[4] = "maverick";
          _quiz_answer_matrix.clothes[5] = "mansman";
          _quiz_answer_matrix.music[0] = "";
          _quiz_answer_matrix.music[1] = "gentleman";
          _quiz_answer_matrix.music[2] = "maverick";
          _quiz_answer_matrix.music[3] = "mansman";
          _quiz_answer_matrix.music[4] = "revolutionary";
          _quiz_answer_matrix.music[5] = "player";
          _quiz_answer_matrix.friday_plans[0] = "";
          _quiz_answer_matrix.friday_plans[1] = "maverick";
          _quiz_answer_matrix.friday_plans[2] = "gentleman";
          _quiz_answer_matrix.friday_plans[3] = "revolutionary";
          _quiz_answer_matrix.friday_plans[4] = "mansman";
          _quiz_answer_matrix.friday_plans[5] = "player";
          _quiz_answer_matrix.drinking[0] = "";
          _quiz_answer_matrix.drinking[1] = "maverick";
          _quiz_answer_matrix.drinking[2] = "gentleman";
          _quiz_answer_matrix.drinking[3] = "player";
          _quiz_answer_matrix.drinking[4] = "revolutionary";
          _quiz_answer_matrix.drinking[5] = "mansman";
          _quiz_answer_matrix.girl[0] = "";
          _quiz_answer_matrix.girl[1] = "gentleman";
          _quiz_answer_matrix.girl[2] = "mansman";
          _quiz_answer_matrix.girl[3] = "revolutionary";
          _quiz_answer_matrix.girl[4] = "maverick";
          _quiz_answer_matrix.girl[5] = "player";
          _set_category_points('clothes');
          _set_category_points('music');
          _set_category_points('friday_plans');
          _set_category_points('drinking');
          _set_category_points('girl');
          debug(_points_matrix);
          max_points = 0;
          highest_category = '';
          tied_categories = new Array;
          for (type in _points_matrix) {
            answer = _points_matrix[type];
            if (answer > max_points) {
              highest_category = type;
              tied_categories = new Array;
              max_points = answer;
            }
            if (answer === max_points) {
              tied_categories.push(type);
              highest_category = 'wildcard';
            }
          }
          if (_quiz_answers.hair < 3) {
            look_slide = 'two';
          } else {
            randInt = Math.floor(Math.random() * 2.);
            if (randInt === 0) {
              look_slide = 'one';
            } else {
              look_slide = 'three';
            }
          }
          $me.attr("action", highest_category + "/#" + "looks/" + look_slide);
          return $me.get(0).submit();
        };
        _init = function() {
          return listen_to($.Events.ANSWER_CLICK, config.myName, _question_was_answered);
        };
        return _init();
      });
    };
    $.fn.QuestionPage = function(objectName, settings) {
      var $parent, config;
      this.settings = settings;
      $parent = $(this);
      if (typeof config === "undefined" || config === null) {
        config = {};
      }
      config.myName = objectName;
      if (this.settings != null) {
        jQuery.extend(config, this.settings);
      }
      return this.each(function(index) {
        var $me, _animate_in_tiles, _enable_tile_backs, _hide_loader, _init, _on_address_change, _on_answer_click, _scroll_to_question;
        $me = $(this);
        _scroll_to_question = function(which) {
          var _next_question_top;
          _next_question_top = $(".question-group").eq(which).offset().top;
          return TweenLite.to(window, config.question_scroll_duration, {
            ease: Quint.easeInOut,
            scrollTo: {
              y: _next_question_top,
              ease: Quint.easeInOut
            }
          });
        };
        _on_address_change = function(evt) {
          var question_number;
          if (evt.value.indexOf("question-") > -1) {
            question_number = evt.value.replace("/question-", "");
            return _scroll_to_question(question_number);
          }
        };
        _on_answer_click = function(evt, data) {
          var answer_clicked, next_question_number, question_index_clicked;
          answer_clicked = data.which;
          question_index_clicked = data.question_index;
          if (question_index_clicked < $(".question-group").length) {
            next_question_number = parseInt(question_index_clicked) + 1;
            if (next_question_number < 6) {
              return _scroll_to_question(next_question_number);
            }
          }
        };
        _enable_tile_backs = function() {
          return $("#your-closet section .back").css("display", "table");
        };
        _animate_in_tiles = function() {
          var intro_animation, timeline,
            _this = this;
          debug("animating in tiles");
          intro_animation = new TimelineLite();
          timeline = new TimelineLite();
          timeline.pause();
          $("#your-closet section").each(function(index, tile) {
            var delay_string;
            TweenLite.to(tile, 0, {
              autoAlpha: 0
            });
            puts(tile);
            delay_string = "=-" + config.tileFadeInDuration * .66;
            puts(delay_string);
            return timeline.append(TweenLite.to(tile, 1, {
              autoAlpha: 1
            }), delay_string);
          });
          return timeline.resume();
        };
        _hide_loader = function() {
          return $('.load_wrap').addClass('hideloader');
        };
        _init = function() {
          debug("init question page");
          $.Body.animate({
            scrollTop: 0
          });
          listen_to($.Events.ANSWER_CLICK, config.myName, _on_answer_click);
          listen_to($.Events.QUESTION_NAV_CLICKED, config.myName, _on_answer_click);
          $(".question-group").Question("Question", config);
          $me.find("nav").QuestionNav('QuestionNav', config);
          puts("images load checking");
          return imagesLoaded('#clothes', _hide_loader);
        };
        return _init();
      });
    };
    $.fn.Question = function(objectName, settings) {
      var $parent, config;
      this.settings = settings;
      $parent = $(this);
      if (typeof config === "undefined" || config === null) {
        config = {};
      }
      config.myName = objectName;
      if (this.settings != null) {
        jQuery.extend(config, this.settings);
      }
      return this.each(function(index) {
        var $me, _index, _init;
        $me = $(this);
        _index = index;
        _init = function() {
          config.question_id = $me.attr("id");
          config.question_index = _index;
          return $me.find(".answer-tile").AnswerTile('AnswerTile', config);
        };
        return _init();
      });
    };
    $.fn.AnswerTile = function(objectName, settings) {
      var $parent, config;
      this.settings = settings;
      $parent = $(this);
      if (typeof config === "undefined" || config === null) {
        config = {};
      }
      config.myName = objectName;
      if (this.settings != null) {
        jQuery.extend(config, this.settings);
      }
      return this.each(function(index) {
        var $me, _index, _init, _on_click;
        $me = $(this);
        _index = index + 1;
        _init = function() {
          return listen_to($.Events.CLICK, config.myName, _on_click, $me);
        };
        _on_click = function(evt) {
          var answer_obj;
          evt.preventDefault();
          answer_obj = {
            which: _index,
            question_id: config.question_id,
            question_index: config.question_index
          };
          return announce($.Events.ANSWER_CLICK, answer_obj);
        };
        return _init();
      });
    };
    $.fn.LooksLogo = function(objectName, settings) {
      var $parent, config;
      this.settings = settings;
      $parent = $(this);
      if (typeof config === "undefined" || config === null) {
        config = {};
      }
      config.myName = objectName;
      if (this.settings != null) {
        jQuery.extend(config, this.settings);
      }
      return this.each(function(index) {
        var $me, _init;
        $me = $(this);
        _init = function() {};
        return _init();
      });
    };
    $.fn.Header = function(objectName, settings) {
      var $parent, config;
      this.settings = settings;
      $parent = $(this);
      if (typeof config === "undefined" || config === null) {
        config = {};
      }
      config.myName = objectName;
      if (this.settings != null) {
        jQuery.extend(config, this.settings);
      }
      return this.each(function(index) {
        var $me, _init, _on_mouse_wheel;
        $me = $(this);
        _on_mouse_wheel = function(event, delta) {
          var _trigger_expand;
          _trigger_expand = function() {
            $('.expand div').toggleClass('open');
            return $('.looks_logo').toggleClass('hidden');
          };
          if ($('#section1').hasClass('look_down')) {
            $('#section1').toggleClass('look_down');
            $me.toggleClass('header_up');
            setTimeout(_trigger_expand, 500);
          }
          return false;
        };
        _init = function() {
          return listen_to($.Events.MOUSE_WHEEL, config.myName, _on_mouse_wheel);
        };
        return _init();
      });
    };
    $.fn.Modal = function(objectName, settings) {
      var $parent, config;
      this.settings = settings;
      $parent = $(this);
      if (typeof config === "undefined" || config === null) {
        config = {};
      }
      config.myName = objectName;
      if (this.settings != null) {
        jQuery.extend(config, this.settings);
      }
      return this.each(function(index) {
        var $me, _init, _onClick;
        $me = $(this);
        _init = function() {
          return listen_to($.Events.CLICK, config.myName, _onClick, $me);
        };
        _onClick = function(evt) {
          var modal_opts;
          evt.preventDefault();
          modal_opts = {
            opacity: 0
          };
          return $me.modal(modal_opts);
        };
        return _init();
      });
    };
    return $.fn.Slide = function(objectName, settings) {
      var $parent, config;
      this.settings = settings;
      $parent = $(this);
      if (typeof config === "undefined" || config === null) {
        config = {};
      }
      config.myName = objectName;
      if (this.settings != null) {
        jQuery.extend(config, this.settings);
      }
      return this.each(function(index) {
        var $me, _init, _on_slide_change;
        $me = $(this);
        _on_slide_change = function(evt) {
          return debug("the slide has changed");
        };
        _init = function() {
          return listen_to($.Events.SLIDE_CHANGE, config.myName, _on_slide_change);
        };
        return _init();
      });
    };
  });

  _docReady = function(evt) {
    var framework, site;
    if ($.CustomEvents != null) {
      jQuery.extend($.Events, $.CustomEvents);
    }
    if ($.CustomMessages != null) {
      jQuery.extend($.Messages, $.CustomMessages);
    }
    if (window.custom_defaults != null) {
      jQuery.extend(window.defaults, window.custom_defaults);
    }
    framework = $('body').Framework("AmericanCrew", defaults);
    return site = $('body').Site("AmericanCrew", defaults);
  };

  $(document).ready(_docReady);

}).call(this);
