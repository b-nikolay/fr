function t670_init(recid) {
    t670_imageHeight(recid);
    t670_show(recid);
    t670_hide(recid);
}

function t670_show(recid) {
    var el = $("#rec" + recid)
      , play = el.find('.t670__play');
    play.click(function() {
        if ($(this).attr('data-slider-video-type') == 'youtube') {
            var url = $(this).attr('data-slider-video-url');
            $(this).next().html("<iframe class=\"t670__iframe\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/" + url + "?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
        }
        if ($(this).attr('data-slider-video-type') == 'vimeo') {
            var url = $(this).attr('data-slider-video-url');
            $(this).next().html("<iframe class=\"t670__iframe\" width=\"100%\" height=\"100%\" src=\"https://player.vimeo.com/video/" + url + "\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>");
        }
        $(this).next().css('z-index', '3');
    });
}

function t670_hide(recid) {
    var el = $("#rec" + recid)
      , body = el.find('.t670__frame');
    el.on('updateSlider', function() {
        body.html('').css('z-index', '');
    });
}

function t670_imageHeight(recid) {
    var el = $("#rec" + recid);
    var image = el.find(".t670__separator");
    image.each(function() {
        var width = $(this).attr("data-slider-image-width");
        var height = $(this).attr("data-slider-image-height");
        var ratio = height / width;
        var padding = ratio * 100;
        $(this).css("padding-bottom", padding + "%");
    });
}

function t_sldsInit(t, e) {
    window.t_userAgentParser = {
        userAgent: window.navigator.userAgent,
        getIOSMajorVersion: function() {
            var t = "iPhone OS";
            try {
                var e = this.userAgent.search(t);
                if (-1 === e)
                    return null;
                var s = e + t.length + 1
                  , a = this.userAgent.slice(s).match(/(\d{1,3}_\d{1,3}(_\d{1,3})?)/);
                return parseInt(a[0])
            } catch (t) {
                console.log("error in userAgentParser > getIOSMajorVersion" + t.message)
            }
        },
        isIOSMobileChrome: function() {
            return !!navigator.userAgent.match("CriOS")
        }
    };
    var s = "object" == typeof t ? t : $("#rec" + t);
    if (0 === s.length)
        return !1;
    var a = s.find(".t-slds__item")
      , i = a.length
      , d = a.filter(":first")
      , r = a.filter(":last")
      , l = $(window).width()
      , n = s.find(".t-slds__items-wrapper")
      , o = n.attr("data-slider-items-in-row")
      , _ = n.attr("data-slider-with-cycle");
    if ("true" == n.attr("data-slider-stop"))
        return !1;
    var c = o;
    t_slds_setItemsInRow(t),
    t_slds_changeImageUrl(t);
    var f = window.navigator.userAgent
      , p = f.indexOf("MSIE")
      , m = ""
      , u = !1;
    0 < p && (8 != (m = parseInt(f.substring(p + 5, f.indexOf(".", p)))) && 9 != m || (u = !0)),
    1 == u && (n.removeClass("t-slds_animated-fast").removeClass("t-slds_animated-slow").addClass("t-slds_animated-none t-slds_ie").attr("data-slider-correct-height", "true"),
    n.attr("data-slider-items-in-row", 1)),
    window.$isMobile && 1 == n.hasClass("t-slds_animated-none") && n.removeClass("t-slds_animated-none").addClass("t-slds_animated-fast"),
    "true" == n.attr("data-slider-initialized") && (i -= 2),
    n.attr("data-slider-initialized", "true"),
    n.attr("data-slider-totalslides", i),
    n.attr("data-slider-pos", 1),
    n.attr("data-slider-curr-pos", 1),
    n.attr("data-slider-cycle", ""),
    n.attr("data-slider-animated", "");
    var w = n.attr("data-slider-pos");
    if (0 == s.find(".t-slds__item[data-slide-index=0]").length && (d.before(r.clone(!0).attr("data-slide-index", "0")),
    s.find(".t-slds__item[data-slide-index=0]").find(".t-zoomable").removeClass("t-zoomable")),
    0 == s.find(".t-slds__item[data-slide-index=" + (i + 1) + "]").length) {
        if (r.after(d.clone(!0).attr("data-slide-index", i + 1).removeClass("t-slds__item_active")).addClass("t-slds__item-loaded"),
        o && 0 < o && "true" == _)
            for (var h = d, v = r, g = 0; g < o - 1; g++) {
                var y = h.next().clone(!0).attr("data-slide-index", i + g + 1);
                v.next().after(y),
                v = v.next(),
                h = h.next()
            }
        s.find(".t-slds__item[data-slide-index=" + (i + 1) + "]").find(".t-zoomable").removeClass("t-zoomable")
    }
    t_slds_SliderWidth(t),
    "true" == n.attr("data-slider-correct-height") && t_slds_SliderHeight(t),
    t_slds_SliderArrowsHeight(t),
    t_slds_ActiveSlide(t, w, i, e),
    t_slds_initSliderControls(t, e),
    t_slds_ActiveCaption(t, w, i),
    0 < n.attr("data-slider-timeout") && t_slds_initAutoPlay(t, w, i, e),
    s.find(".t-slds__item-loaded").length < i + 2 && t_slds_UpdateImages(t, w),
    "yes" == n.attr("data-slider-arrows-nearpic") && t_slds_positionArrows(t),
    !0 !== u && t_slds_initSliderSwipe(t, l),
    s.find(".t-slds").css("visibility", ""),
    /*$(window).bind("resize", t_throttle(function() {
        setTimeout(function() {
            t_slds_setItemsInRow(t, c),
            t_slds_updateSlider(t),
            t_slds_positionArrows(t)
        }, 100)
    }, 200)),*/
    $(window).load(function() {
        "true" == n.attr("data-slider-correct-height") && t_slds_UpdateSliderHeight(t),
        t_slds_UpdateSliderArrowsHeight(t)
    })
}
function t_slds_setItemsInRow(t, e) {
    var s, a = ("object" == typeof t ? t : $("#rec" + t)).find(".t-slds__items-wrapper");
    a.attr("data-slider-items-in-row") && (window.innerWidth <= 960 && (s = 2),
    window.innerWidth <= 640 && (s = 1),
    960 < window.innerWidth && (s = e)),
    s && a.attr("data-slider-items-in-row", s)
}
function t_slds_initSliderControls(d, r) {
    var l = "object" == typeof d ? d : $("#rec" + d)
      , n = l.find(".t-slds__items-wrapper")
      , t = n.attr("data-slider-items-in-row")
      , e = t && 0 < t ? l.find(".t-slds__container .t-slds__item").width() : l.find(".t-slds__container").width();
    if ("true" == n.attr("data-slider-stop"))
        return !1;
    n.css({
        transform: "translateX(-" + e + "px)"
    }),
    l.find(".t-slds__arrow_wrapper").click(function() {
        var t = t_slds_getCurrentTranslate(l)
          , e = n.attr("data-slider-animated")
          , s = parseFloat(n.attr("data-slider-pos"))
          , a = parseFloat(n.attr("data-slider-totalslides"))
          , i = "";
        "" == e && (n.attr("data-slider-animated", "yes"),
        "left" === $(this).attr("data-slide-direction") ? "false" == n.attr("data-slider-with-cycle") && 1 == s ? s = 1 : s-- : "false" == n.attr("data-slider-with-cycle") && s == a ? s = a : s++,
        n.attr("data-slider-pos", s),
        s != a + 1 && 0 != s || (i = "yes"),
        n.attr("data-slider-cycle", i),
        t_slideMove(d, !1, r, t));
        l.trigger("updateSlider")
    }),
    l.find(".t-slds__bullet").click(function() {
        var t = t_slds_getCurrentTranslate(l)
          , e = parseFloat($(this).attr("data-slide-bullet-for"));
        n.attr("data-slider-pos", e),
        t_slideMove(d, !1, r, t),
        l.trigger("updateSlider")
    })
}
function t_slds_animate(i, d, r) {
    var l = performance.now();
    requestAnimationFrame(function t(e) {
        var s = (e - l) / r;
        1 < s && (s = 1);
        var a = i(s);
        d(a),
        s < 1 ? requestAnimationFrame(t) : "y" == window.lazy && t_lazyload_update()
    })
}
function t_slide_MoveAnimation(e, t, s, a) {
    if (e[0]) {
        e[0].style.transition = "height ease-in-out .5s, transform ease-in-out 0s";
        var i = -Math.abs(t * s)
          , d = -parseInt(e[0].style.transform.match(/\d+/)[0])
          , r = d - i;
        0 != r && t_slds_animate(function(t) {
            return t
        }, function(t) {
            e[0].style.transform = "translateX(" + (d - r * t) + "px)"
        }, a)
    }
}
function t_slideMove(t, e, s) {
    var a = "object" == typeof t ? t : $("#rec" + t)
      , i = a.find(".t-slds__items-wrapper")
      , d = i.attr("data-slider-items-in-row")
      , r = d && 0 < d ? a.find(".t-slds__container .t-slds__item").width() : a.find(".t-slds__container").width()
      , l = parseFloat(i.attr("data-slider-transition"))
      , n = parseFloat(i.attr("data-slider-pos"))
      , o = parseFloat(i.attr("data-slider-totalslides"))
      , _ = (i.attr("data-slider-cycle"),
    a.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none"))
      , c = 0 < i.attr("data-slider-timeout");
    if ("true" == i.attr("data-slider-stop"))
        return !1;
    "false" == i.attr("data-slider-with-cycle") && (n == o || d && 1 < d && n == o - d + 1) ? a.find(".t-slds__arrow_wrapper-right").fadeOut(300) : a.find(".t-slds__arrow_wrapper-right").fadeIn(300),
    "false" == i.attr("data-slider-with-cycle") && 1 == n ? a.find(".t-slds__arrow_wrapper-left").fadeOut(300) : a.find(".t-slds__arrow_wrapper-left").fadeIn(300),
    i.addClass("t-slds_animated"),
    13 <= window.t_userAgentParser.getIOSMajorVersion() && window.t_userAgentParser.isIOSMobileChrome() ? t_slide_MoveAnimation(i, n, r, l) : i.css({
        transform: "translateX(-" + r * n + "px)"
    }),
    setTimeout(function() {
        i.removeClass("t-slds_animated"),
        i.attr("data-slider-animated", ""),
        "yes" == i.attr("data-slider-cycle") && (n == o + 1 && (n = 1),
        0 == n && (n = o),
        13 <= window.t_userAgentParser.getIOSMajorVersion() && window.t_userAgentParser.isIOSMobileChrome() ? t_slide_MoveAnimation(i, n, r, 0) : i.css({
            transform: "translateX(-" + r * n + "px)"
        }),
        !0 !== _ && t_slds_ActiveSlide(t, n, o, s),
        i.attr("data-slider-pos", n)),
        "y" == window.lazy && t_lazyload_update(),
        !e && c && t_slds_initAutoPlay(t, n, o, s)
    }, l),
    t_slds_ActiveBullet(t, n, o, s),
    t_slds_ActiveSlide(t, n, o),
    "true" == i.attr("data-slider-correct-height") && t_slds_SliderHeight(t),
    t_slds_SliderArrowsHeight(t),
    t_slds_ActiveCaption(t, n, o),
    a.find(".t-slds__item-loaded").length < o + 2 && t_slds_UpdateImages(t, n),
    i.attr("data-slider-curr-pos", n)
}
function t_slds_updateSlider(t) {
    var e = "object" == typeof t ? t : $("#rec" + t);
    t_slds_SliderWidth(t);
    var s = e.find(".t-slds__items-wrapper")
      , a = s.attr("data-slider-items-in-row")
      , i = a && 0 < a ? e.find(".t-slds__container .t-slds__item").width() : e.find(".t-slds__container").width()
      , d = parseFloat(s.attr("data-slider-pos"));
    s.css({
        transform: "translateX(-" + i * d + "px)"
    }),
    "true" == s.attr("data-slider-correct-height") && t_slds_UpdateSliderHeight(t),
    t_slds_UpdateSliderArrowsHeight(t)
}
function t_slds_UpdateImages(t, e) {
    var s = ("object" == typeof t ? t : $("#rec" + t)).find('.t-slds__item[data-slide-index="' + e + '"]');
    s.addClass("t-slds__item-loaded"),
    s.next().addClass("t-slds__item-loaded"),
    s.prev().addClass("t-slds__item-loaded")
}
function t_slds_ActiveCaption(t, e, s) {
    var a = "object" == typeof t ? t : $("#rec" + t)
      , i = a.find(".t-slds__caption")
      , d = a.find('.t-slds__caption[data-slide-caption="' + e + '"]');
    i.removeClass("t-slds__caption-active"),
    0 == e ? d = a.find('.t-slds__caption[data-slide-caption="' + s + '"]') : e == s + 1 && (d = a.find('.t-slds__caption[data-slide-caption="1"]')),
    d.addClass("t-slds__caption-active")
}
function t_slds_scrollImages(t, e) {
    var s = "object" == typeof t ? t : $("#rec" + t)
      , a = (e < 0 ? "" : "-") + Math.abs(e).toString();
    s.find(".t-slds__items-wrapper").css("transform", "translateX(" + a + "px)")
}
function t_slds_ActiveBullet(t, e, s, a) {
    var i;
    if (a && a.thumbsbulletGallery) {
        var d = parseInt(a.storeOptions.popup_opts.columns)
          , r = +a.storeOptions.slider_slidesOpts.ratio;
        i = t_store_prodPopup_gallery_calcMaxThumbsCount(d, r, 60, 10)
    }
    var l = "object" == typeof t ? t : $("#rec" + t)
      , n = l.find(".t-slds__bullet")
      , o = l.find('.t-slds__bullet[data-slide-bullet-for="' + e + '"]');
    n.removeClass("t-slds__bullet_active"),
    a && a.thumbsbulletGallery && i <= e && e != s + 1 || i <= s && 0 == e ? o = l.find('.t-slds__bullet[data-slide-bullet-for="' + i + '"]') : 0 == e ? o = l.find('.t-slds__bullet[data-slide-bullet-for="' + s + '"]') : e == s + 1 && (o = l.find('.t-slds__bullet[data-slide-bullet-for="1"]')),
    o.addClass("t-slds__bullet_active")
}
function t_slds_ActiveSlide(t, e, s) {
    var a = "object" == typeof t ? t : $("#rec" + t)
      , i = a.find(".t-slds__item")
      , d = a.find('.t-slds__item[data-slide-index="' + e + '"]')
      , r = a.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none");
    i.removeClass("t-slds__item_active"),
    0 == e && 0 == r ? a.find('.t-slds__item[data-slide-index="' + s + '"]').addClass("t-slds__item_active") : 0 == e && 1 == r ? d = a.find('.t-slds__item[data-slide-index="' + s + '"]') : e == s + 1 && 0 == r ? a.find('.t-slds__item[data-slide-index="1"]').addClass("t-slds__item_active") : e == s + 1 && 1 == r && (d = a.find('.t-slds__item[data-slide-index="1"]')),
    d.addClass("t-slds__item_active")
}
function t_slds_SliderWidth(t) {
    var e = "object" == typeof t ? t : $("#rec" + t)
      , s = e.find(".t-slds__container").width()
      , a = e.find(".t-slds__item").length
      , i = e.find(".t-slds__items-wrapper")
      , d = i.attr("data-slider-stop")
      , r = i.attr("data-slider-items-in-row");
    if ("true" == d)
        return !1;
    e.find(".t-slds__items-wrapper").width(s * a),
    window.innerWidth <= 640 ? r = 1 : window.innerWidth <= 960 && 1 < r && (r = 2);
    var l = r && 1 < r ? s / r : s;
    e.find(".t-slds__item").width(l)
}
function t_slds_SliderHeight(t) {
    var e = "object" == typeof t ? t : $("#rec" + t);
    e.find(".t-slds__items-wrapper").height(e.find(".t-slds__item_active").height())
}
function t_slds_UpdateSliderHeight(t) {
    var e = "object" == typeof t ? t : $("#rec" + t);
    e.find(".t-slds__items-wrapper").css("height", ""),
    e.find(".t-slds__items-wrapper").height(e.find(".t-slds__item_active").height())
}
function t_slds_SliderArrowsHeight(t) {
    var e = "object" == typeof t ? t : $("#rec" + t);
    e.find(".t-slds__arrow_wrapper").height(e.find(".t-slds__item_active").height())
}
function t_slds_UpdateSliderArrowsHeight(t) {
    var e = "object" == typeof t ? t : $("#rec" + t);
    e.find(".t-slds__arrow_wrapper").css("height", ""),
    e.find(".t-slds__arrow_wrapper").height(e.find(".t-slds__item_active").height())
}
function t_slds_initAutoPlay(n, o, _, c) {
    var f = "object" == typeof n ? n : $("#rec" + n)
      , t = f.find(".t-slds")
      , p = f.find(".t-slds__items-wrapper")
      , e = parseFloat(p.attr("data-slider-timeout"))
      , m = ""
      , s = p.attr("data-slider-stop")
      , a = p.attr("data-slider-interval-id");
    if (a && clearInterval(a),
    "true" == s)
        return !1;
    window.$isMobile || t.hover(function() {
        p.attr("data-slider-hovered", "yes")
    }, function() {
        p.attr("data-slider-hovered", "")
    });
    var i = setInterval(function() {
        var t = $(window).scrollTop()
          , e = $(window).height()
          , s = f.offset().top
          , a = f.innerHeight()
          , i = p.attr("data-slider-hovered")
          , d = p.attr("data-slider-autoplay-ignore-hover")
          , r = p.attr("data-slider-touch")
          , l = t_slds_getCurrentTranslate(f);
        s < t + e / 2 && t < s + a && "yes" != i && "yes" != d && "yes" != r && ("false" == p.attr("data-slider-with-cycle") && o == _ ? o = _ : o++,
        p.attr("data-slider-pos", o),
        o != _ + 1 && 0 != o || (m = "yes"),
        t_slideMove(n, !0, c, l),
        "yes" == m && (o == _ + 1 && (o = 1),
        0 == o && (o = _),
        p.attr("data-slider-pos", o)),
        p.attr("data-slider-cycle", m))
    }, e);
    p.attr("data-slider-interval-id", i)
}
function t_slds_positionArrows(t) {
    var e = "object" == typeof t ? t : $("#rec" + t)
      , s = e.find(".t-slds__arrow_container-outside")
      , a = e.find(".t-slds__item").width()
      , i = e.find(".t-slds__arrow-left").width()
      , d = e.find(".t-slds__arrow-right").width();
    s.css({
        "max-width": i + d + a + 120 + "px"
    })
}
function t_slds_initSliderSwipe(_, t, c) {
    var e, f = "object" == typeof _ ? _ : $("#rec" + _), s = f.find(".t-slds__items-wrapper").attr("data-slider-stop"), p = !1;
    if ("true" == s)
        return !1;
    delete Hammer.defaults.cssProps.userSelect,
    hammer = new Hammer(f.find(".t-slds__items-wrapper")[0],{
        domEvents: !0,
        inputClass: Hammer.TouchInput,
        recognizers: [[Hammer.Pan, {
            direction: Hammer.DIRECTION_HORIZONTAL
        }]]
    }),
    $(window).bind("scroll", function() {
        p = !0,
        clearTimeout(e),
        e = setTimeout(function() {
            p = !1
        }, 250)
    }),
    hammer.on("pan", function(t) {
        if (p)
            return !1;
        var e = f.find(".t-slds__items-wrapper")
          , s = e.attr("data-slider-items-in-row")
          , a = s && 1 < s
          , i = a ? f.find(".t-slds__container .t-slds__item").width() : f.find(".t-slds__container").width()
          , d = parseFloat(e.attr("data-slider-pos"))
          , r = parseFloat(e.attr("data-slider-totalslides"))
          , l = ""
          , n = t.deltaX
          , o = 100 / r * t.deltaX / $(window).innerWidth();
        if ("true" == e.attr("data-slider-stop"))
            return !1;
        e.attr("data-slider-touch", "yes"),
        t_slds_scrollImages(_, i * d - n),
        t.isFinal && (1 < t.velocityX ? ("false" == e.attr("data-slider-with-cycle") && 1 == d ? d = 1 : d--,
        e.attr("data-slider-pos", d),
        0 == d && (l = "yes"),
        e.attr("data-slider-cycle", l)) : t.velocityX < -1 || o <= -20 / r ? ("false" == e.attr("data-slider-with-cycle") && (d == r || a && d == r - s + 1) ? d = a ? r - s : r : d++,
        e.attr("data-slider-pos", d),
        d == r + 1 && (l = "yes"),
        e.attr("data-slider-cycle", l)) : 20 / r <= o && ("false" == e.attr("data-slider-with-cycle") && 1 == d ? d = 1 : d--,
        e.attr("data-slider-pos", d),
        0 == d && (l = "yes"),
        e.attr("data-slider-cycle", l)),
        t_slideMove(_, !1, c),
        e.attr("data-slider-touch", ""))
    }),
    hammer.on("panend", function() {
        t_slideMove(_, !1, c)
    })
}
function t_slds_getCurrentTranslate(t) {
    var e = t.find(".t-slds__items-wrapper");
    if (e) {
        var s = e[0].style.transform.indexOf("(") + 1
          , a = e[0].style.transform.indexOf("px");
        return parseInt(e[0].style.transform.slice(s, a))
    }
}
function t_slds_changeImageUrl(t) {
    ("object" == typeof t ? t : $("#rec" + t)).find(".t-slds__img").each(function() {
        var t = $(this);
        void 0 !== t.attr("data-src") && ((t = $(this)).attr("src", t.attr("data-src")),
        t.removeAttr("data-src"))
    })
}

/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a, b, c, d) {
    "use strict";
    function e(a, b, c) {
        return setTimeout(j(a, c), b)
    }
    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c),
        !0) : !1
    }
    function g(a, b, c) {
        var e;
        if (a)
            if (a.forEach)
                a.forEach(b, c);
            else if (a.length !== d)
                for (e = 0; e < a.length; )
                    b.call(c, a[e], e, a),
                    e++;
            else
                for (e in a)
                    a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }
    function h(b, c, d) {
        var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
        return function() {
            var c = new Error("get-stack-trace")
              , d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
              , f = a.console && (a.console.warn || a.console.log);
            return f && f.call(a.console, e, d),
            b.apply(this, arguments)
        }
    }
    function i(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e),
        d.constructor = a,
        d._super = e,
        c && la(d, c)
    }
    function j(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }
    function k(a, b) {
        return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a
    }
    function l(a, b) {
        return a === d ? b : a
    }
    function m(a, b, c) {
        g(q(b), function(b) {
            a.addEventListener(b, c, !1)
        })
    }
    function n(a, b, c) {
        g(q(b), function(b) {
            a.removeEventListener(b, c, !1)
        })
    }
    function o(a, b) {
        for (; a; ) {
            if (a == b)
                return !0;
            a = a.parentNode
        }
        return !1
    }
    function p(a, b) {
        return a.indexOf(b) > -1
    }
    function q(a) {
        return a.trim().split(/\s+/g)
    }
    function r(a, b, c) {
        if (a.indexOf && !c)
            return a.indexOf(b);
        for (var d = 0; d < a.length; ) {
            if (c && a[d][c] == b || !c && a[d] === b)
                return d;
            d++
        }
        return -1
    }
    function s(a) {
        return Array.prototype.slice.call(a, 0)
    }
    function t(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length; ) {
            var g = b ? a[f][b] : a[f];
            r(e, g) < 0 && d.push(a[f]),
            e[f] = g,
            f++
        }
        return c && (d = b ? d.sort(function(a, c) {
            return a[b] > c[b]
        }) : d.sort()),
        d
    }
    function u(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length; ) {
            if (c = ma[g],
            e = c ? c + f : b,
            e in a)
                return e;
            g++
        }
        return d
    }
    function v() {
        return ua++
    }
    function w(b) {
        var c = b.ownerDocument || b;
        return c.defaultView || c.parentWindow || a
    }
    function x(a, b) {
        var c = this;
        this.manager = a,
        this.callback = b,
        this.element = a.element,
        this.target = a.options.inputTarget,
        this.domHandler = function(b) {
            k(a.options.enable, [a]) && c.handler(b)
        }
        ,
        this.init()
    }
    function y(a) {
        var b, c = a.options.inputClass;
        return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a,z)
    }
    function z(a, b, c) {
        var d = c.pointers.length
          , e = c.changedPointers.length
          , f = b & Ea && d - e === 0
          , g = b & (Ga | Ha) && d - e === 0;
        c.isFirst = !!f,
        c.isFinal = !!g,
        f && (a.session = {}),
        c.eventType = b,
        A(a, c),
        a.emit("hammer.input", c),
        a.recognize(c),
        a.session.prevInput = c
    }
    function A(a, b) {
        var c = a.session
          , d = b.pointers
          , e = d.length;
        c.firstInput || (c.firstInput = D(b)),
        e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput
          , g = c.firstMultiple
          , h = g ? g.center : f.center
          , i = b.center = E(d);
        b.timeStamp = ra(),
        b.deltaTime = b.timeStamp - f.timeStamp,
        b.angle = I(h, i),
        b.distance = H(h, i),
        B(c, b),
        b.offsetDirection = G(b.deltaX, b.deltaY);
        var j = F(b.deltaTime, b.deltaX, b.deltaY);
        b.overallVelocityX = j.x,
        b.overallVelocityY = j.y,
        b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y,
        b.scale = g ? K(g.pointers, d) : 1,
        b.rotation = g ? J(g.pointers, d) : 0,
        b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length,
        C(c, b);
        var k = a.element;
        o(b.srcEvent.target, k) && (k = b.srcEvent.target),
        b.target = k
    }
    function B(a, b) {
        var c = b.center
          , d = a.offsetDelta || {}
          , e = a.prevDelta || {}
          , f = a.prevInput || {};
        b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        },
        d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }),
        b.deltaX = e.x + (c.x - d.x),
        b.deltaY = e.y + (c.y - d.y)
    }
    function C(a, b) {
        var c, e, f, g, h = a.lastInterval || b, i = b.timeStamp - h.timeStamp;
        if (b.eventType != Ha && (i > Da || h.velocity === d)) {
            var j = b.deltaX - h.deltaX
              , k = b.deltaY - h.deltaY
              , l = F(i, j, k);
            e = l.x,
            f = l.y,
            c = qa(l.x) > qa(l.y) ? l.x : l.y,
            g = G(j, k),
            a.lastInterval = b
        } else
            c = h.velocity,
            e = h.velocityX,
            f = h.velocityY,
            g = h.direction;
        b.velocity = c,
        b.velocityX = e,
        b.velocityY = f,
        b.direction = g
    }
    function D(a) {
        for (var b = [], c = 0; c < a.pointers.length; )
            b[c] = {
                clientX: pa(a.pointers[c].clientX),
                clientY: pa(a.pointers[c].clientY)
            },
            c++;
        return {
            timeStamp: ra(),
            pointers: b,
            center: E(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        }
    }
    function E(a) {
        var b = a.length;
        if (1 === b)
            return {
                x: pa(a[0].clientX),
                y: pa(a[0].clientY)
            };
        for (var c = 0, d = 0, e = 0; b > e; )
            c += a[e].clientX,
            d += a[e].clientY,
            e++;
        return {
            x: pa(c / b),
            y: pa(d / b)
        }
    }
    function F(a, b, c) {
        return {
            x: b / a || 0,
            y: c / a || 0
        }
    }
    function G(a, b) {
        return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma
    }
    function H(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]]
          , e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }
    function I(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]]
          , e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }
    function J(a, b) {
        return I(b[1], b[0], Ra) + I(a[1], a[0], Ra)
    }
    function K(a, b) {
        return H(b[0], b[1], Ra) / H(a[0], a[1], Ra)
    }
    function L() {
        this.evEl = Ta,
        this.evWin = Ua,
        this.pressed = !1,
        x.apply(this, arguments)
    }
    function M() {
        this.evEl = Xa,
        this.evWin = Ya,
        x.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    function N() {
        this.evTarget = $a,
        this.evWin = _a,
        this.started = !1,
        x.apply(this, arguments)
    }
    function O(a, b) {
        var c = s(a.touches)
          , d = s(a.changedTouches);
        return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)),
        [c, d]
    }
    function P() {
        this.evTarget = bb,
        this.targetIds = {},
        x.apply(this, arguments)
    }
    function Q(a, b) {
        var c = s(a.touches)
          , d = this.targetIds;
        if (b & (Ea | Fa) && 1 === c.length)
            return d[c[0].identifier] = !0,
            [c, c];
        var e, f, g = s(a.changedTouches), h = [], i = this.target;
        if (f = c.filter(function(a) {
            return o(a.target, i)
        }),
        b === Ea)
            for (e = 0; e < f.length; )
                d[f[e].identifier] = !0,
                e++;
        for (e = 0; e < g.length; )
            d[g[e].identifier] && h.push(g[e]),
            b & (Ga | Ha) && delete d[g[e].identifier],
            e++;
        return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0
    }
    function R() {
        x.apply(this, arguments);
        var a = j(this.handler, this);
        this.touch = new P(this.manager,a),
        this.mouse = new L(this.manager,a),
        this.primaryTouch = null,
        this.lastTouches = []
    }
    function S(a, b) {
        a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier,
        T.call(this, b)) : a & (Ga | Ha) && T.call(this, b)
    }
    function T(a) {
        var b = a.changedPointers[0];
        if (b.identifier === this.primaryTouch) {
            var c = {
                x: b.clientX,
                y: b.clientY
            };
            this.lastTouches.push(c);
            var d = this.lastTouches
              , e = function() {
                var a = d.indexOf(c);
                a > -1 && d.splice(a, 1)
            };
            setTimeout(e, cb)
        }
    }
    function U(a) {
        for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
            var e = this.lastTouches[d]
              , f = Math.abs(b - e.x)
              , g = Math.abs(c - e.y);
            if (db >= f && db >= g)
                return !0
        }
        return !1
    }
    function V(a, b) {
        this.manager = a,
        this.set(b)
    }
    function W(a) {
        if (p(a, jb))
            return jb;
        var b = p(a, kb)
          , c = p(a, lb);
        return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb
    }
    function X() {
        if (!fb)
            return !1;
        var b = {}
          , c = a.CSS && a.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(d) {
            b[d] = c ? a.CSS.supports("touch-action", d) : !0
        }),
        b
    }
    function Y(a) {
        this.options = la({}, this.defaults, a || {}),
        this.id = v(),
        this.manager = null,
        this.options.enable = l(this.options.enable, !0),
        this.state = nb,
        this.simultaneous = {},
        this.requireFail = []
    }
    function Z(a) {
        return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : ""
    }
    function $(a) {
        return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : ""
    }
    function _(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }
    function aa() {
        Y.apply(this, arguments)
    }
    function ba() {
        aa.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function ca() {
        aa.apply(this, arguments)
    }
    function da() {
        Y.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function ea() {
        aa.apply(this, arguments)
    }
    function fa() {
        aa.apply(this, arguments)
    }
    function ga() {
        Y.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function ha(a, b) {
        return b = b || {},
        b.recognizers = l(b.recognizers, ha.defaults.preset),
        new ia(a,b)
    }
    function ia(a, b) {
        this.options = la({}, ha.defaults, b || {}),
        this.options.inputTarget = this.options.inputTarget || a,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.oldCssProps = {},
        this.element = a,
        this.input = y(this),
        this.touchAction = new V(this,this.options.touchAction),
        ja(this, !0),
        g(this.options.recognizers, function(a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]),
            a[3] && b.requireFailure(a[3])
        }, this)
    }
    function ja(a, b) {
        var c = a.element;
        if (c.style) {
            var d;
            g(a.options.cssProps, function(e, f) {
                d = u(c.style, f),
                b ? (a.oldCssProps[d] = c.style[d],
                c.style[d] = e) : c.style[d] = a.oldCssProps[d] || ""
            }),
            b || (a.oldCssProps = {})
        }
    }
    function ka(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0),
        d.gesture = c,
        c.target.dispatchEvent(d)
    }
    var la, ma = ["", "webkit", "Moz", "MS", "ms", "o"], na = b.createElement("div"), oa = "function", pa = Math.round, qa = Math.abs, ra = Date.now;
    la = "function" != typeof Object.assign ? function(a) {
        if (a === d || null === a)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var b = Object(a), c = 1; c < arguments.length; c++) {
            var e = arguments[c];
            if (e !== d && null !== e)
                for (var f in e)
                    e.hasOwnProperty(f) && (b[f] = e[f])
        }
        return b
    }
    : Object.assign;
    var sa = h(function(a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length; )
            (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]),
            f++;
        return a
    }, "extend", "Use `assign`.")
      , ta = h(function(a, b) {
        return sa(a, b, !0)
    }, "merge", "Use `assign`.")
      , ua = 1
      , va = /mobile|tablet|ip(ad|hone|od)|android/i
      , wa = "ontouchstart"in a
      , xa = u(a, "PointerEvent") !== d
      , ya = wa && va.test(navigator.userAgent)
      , za = "touch"
      , Aa = "pen"
      , Ba = "mouse"
      , Ca = "kinect"
      , Da = 25
      , Ea = 1
      , Fa = 2
      , Ga = 4
      , Ha = 8
      , Ia = 1
      , Ja = 2
      , Ka = 4
      , La = 8
      , Ma = 16
      , Na = Ja | Ka
      , Oa = La | Ma
      , Pa = Na | Oa
      , Qa = ["x", "y"]
      , Ra = ["clientX", "clientY"];
    x.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && m(this.element, this.evEl, this.domHandler),
            this.evTarget && m(this.target, this.evTarget, this.domHandler),
            this.evWin && m(w(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && n(this.element, this.evEl, this.domHandler),
            this.evTarget && n(this.target, this.evTarget, this.domHandler),
            this.evWin && n(w(this.element), this.evWin, this.domHandler)
        }
    };
    var Sa = {
        mousedown: Ea,
        mousemove: Fa,
        mouseup: Ga
    }
      , Ta = "mousedown"
      , Ua = "mousemove mouseup";
    i(L, x, {
        handler: function(a) {
            var b = Sa[a.type];
            b & Ea && 0 === a.button && (this.pressed = !0),
            b & Fa && 1 !== a.which && (b = Ga),
            this.pressed && (b & Ga && (this.pressed = !1),
            this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: Ba,
                srcEvent: a
            }))
        }
    });
    var Va = {
        pointerdown: Ea,
        pointermove: Fa,
        pointerup: Ga,
        pointercancel: Ha,
        pointerout: Ha
    }
      , Wa = {
        2: za,
        3: Aa,
        4: Ba,
        5: Ca
    }
      , Xa = "pointerdown"
      , Ya = "pointermove pointerup pointercancel";
    a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown",
    Ya = "MSPointerMove MSPointerUp MSPointerCancel"),
    i(M, x, {
        handler: function(a) {
            var b = this.store
              , c = !1
              , d = a.type.toLowerCase().replace("ms", "")
              , e = Va[d]
              , f = Wa[a.pointerType] || a.pointerType
              , g = f == za
              , h = r(b, a.pointerId, "pointerId");
            e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a),
            h = b.length - 1) : e & (Ga | Ha) && (c = !0),
            0 > h || (b[h] = a,
            this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }),
            c && b.splice(h, 1))
        }
    });
    var Za = {
        touchstart: Ea,
        touchmove: Fa,
        touchend: Ga,
        touchcancel: Ha
    }
      , $a = "touchstart"
      , _a = "touchstart touchmove touchend touchcancel";
    i(N, x, {
        handler: function(a) {
            var b = Za[a.type];
            if (b === Ea && (this.started = !0),
            this.started) {
                var c = O.call(this, a, b);
                b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1),
                this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: za,
                    srcEvent: a
                })
            }
        }
    });
    var ab = {
        touchstart: Ea,
        touchmove: Fa,
        touchend: Ga,
        touchcancel: Ha
    }
      , bb = "touchstart touchmove touchend touchcancel";
    i(P, x, {
        handler: function(a) {
            var b = ab[a.type]
              , c = Q.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: za,
                srcEvent: a
            })
        }
    });
    var cb = 2500
      , db = 25;
    i(R, x, {
        handler: function(a, b, c) {
            var d = c.pointerType == za
              , e = c.pointerType == Ba;
            if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
                if (d)
                    S.call(this, b, c);
                else if (e && U.call(this, c))
                    return;
                this.callback(a, b, c)
            }
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var eb = u(na.style, "touchAction")
      , fb = eb !== d
      , gb = "compute"
      , hb = "auto"
      , ib = "manipulation"
      , jb = "none"
      , kb = "pan-x"
      , lb = "pan-y"
      , mb = X();
    V.prototype = {
        set: function(a) {
            a == gb && (a = this.compute()),
            fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a),
            this.actions = a.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var a = [];
            return g(this.manager.recognizers, function(b) {
                k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            }),
            W(a.join(" "))
        },
        preventDefaults: function(a) {
            var b = a.srcEvent
              , c = a.offsetDirection;
            if (this.manager.session.prevented)
                return void b.preventDefault();
            var d = this.actions
              , e = p(d, jb) && !mb[jb]
              , f = p(d, lb) && !mb[lb]
              , g = p(d, kb) && !mb[kb];
            if (e) {
                var h = 1 === a.pointers.length
                  , i = a.distance < 2
                  , j = a.deltaTime < 250;
                if (h && i && j)
                    return
            }
            return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0
        },
        preventSrc: function(a) {
            this.manager.session.prevented = !0,
            a.preventDefault()
        }
    };
    var nb = 1
      , ob = 2
      , pb = 4
      , qb = 8
      , rb = qb
      , sb = 16
      , tb = 32;
    Y.prototype = {
        defaults: {},
        set: function(a) {
            return la(this.options, a),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(a) {
            if (f(a, "recognizeWith", this))
                return this;
            var b = this.simultaneous;
            return a = _(a, this),
            b[a.id] || (b[a.id] = a,
            a.recognizeWith(this)),
            this
        },
        dropRecognizeWith: function(a) {
            return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this),
            delete this.simultaneous[a.id],
            this)
        },
        requireFailure: function(a) {
            if (f(a, "requireFailure", this))
                return this;
            var b = this.requireFail;
            return a = _(a, this),
            -1 === r(b, a) && (b.push(a),
            a.requireFailure(this)),
            this
        },
        dropRequireFailure: function(a) {
            if (f(a, "dropRequireFailure", this))
                return this;
            a = _(a, this);
            var b = r(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1),
            this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(a) {
            return !!this.simultaneous[a.id]
        },
        emit: function(a) {
            function b(b) {
                c.manager.emit(b, a)
            }
            var c = this
              , d = this.state;
            qb > d && b(c.options.event + Z(d)),
            b(c.options.event),
            a.additionalEvent && b(a.additionalEvent),
            d >= qb && b(c.options.event + Z(d))
        },
        tryEmit: function(a) {
            return this.canEmit() ? this.emit(a) : void (this.state = tb)
        },
        canEmit: function() {
            for (var a = 0; a < this.requireFail.length; ) {
                if (!(this.requireFail[a].state & (tb | nb)))
                    return !1;
                a++
            }
            return !0
        },
        recognize: function(a) {
            var b = la({}, a);
            return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb),
            this.state = this.process(b),
            void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(),
            void (this.state = tb))
        },
        process: function(a) {},
        getTouchAction: function() {},
        reset: function() {}
    },
    i(aa, Y, {
        defaults: {
            pointers: 1
        },
        attrTest: function(a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        },
        process: function(a) {
            var b = this.state
              , c = a.eventType
              , d = b & (ob | pb)
              , e = this.attrTest(a);
            return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb
        }
    }),
    i(ba, aa, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Pa
        },
        getTouchAction: function() {
            var a = this.options.direction
              , b = [];
            return a & Na && b.push(lb),
            a & Oa && b.push(kb),
            b
        },
        directionTest: function(a) {
            var b = this.options
              , c = !0
              , d = a.distance
              , e = a.direction
              , f = a.deltaX
              , g = a.deltaY;
            return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka,
            c = f != this.pX,
            d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma,
            c = g != this.pY,
            d = Math.abs(a.deltaY))),
            a.direction = e,
            c && d > b.threshold && e & b.direction
        },
        attrTest: function(a) {
            return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a))
        },
        emit: function(a) {
            this.pX = a.deltaX,
            this.pY = a.deltaY;
            var b = $(a.direction);
            b && (a.additionalEvent = this.options.event + b),
            this._super.emit.call(this, a)
        }
    }),
    i(ca, aa, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [jb]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob)
        },
        emit: function(a) {
            if (1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                a.additionalEvent = this.options.event + b
            }
            this._super.emit.call(this, a)
        }
    }),
    i(da, Y, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [hb]
        },
        process: function(a) {
            var b = this.options
              , c = a.pointers.length === b.pointers
              , d = a.distance < b.threshold
              , f = a.deltaTime > b.time;
            if (this._input = a,
            !d || !c || a.eventType & (Ga | Ha) && !f)
                this.reset();
            else if (a.eventType & Ea)
                this.reset(),
                this._timer = e(function() {
                    this.state = rb,
                    this.tryEmit()
                }, b.time, this);
            else if (a.eventType & Ga)
                return rb;
            return tb
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(a) {
            this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    i(ea, aa, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [jb]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob)
        }
    }),
    i(fa, aa, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Na | Oa,
            pointers: 1
        },
        getTouchAction: function() {
            return ba.prototype.getTouchAction.call(this)
        },
        attrTest: function(a) {
            var b, c = this.options.direction;
            return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY),
            this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga
        },
        emit: function(a) {
            var b = $(a.offsetDirection);
            b && this.manager.emit(this.options.event + b, a),
            this.manager.emit(this.options.event, a)
        }
    }),
    i(ga, Y, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [ib]
        },
        process: function(a) {
            var b = this.options
              , c = a.pointers.length === b.pointers
              , d = a.distance < b.threshold
              , f = a.deltaTime < b.time;
            if (this.reset(),
            a.eventType & Ea && 0 === this.count)
                return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Ga)
                    return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0
                  , h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp,
                this.pCenter = a.center,
                h && g ? this.count += 1 : this.count = 1,
                this._input = a;
                var i = this.count % b.taps;
                if (0 === i)
                    return this.hasRequireFailures() ? (this._timer = e(function() {
                        this.state = rb,
                        this.tryEmit()
                    }, b.interval, this),
                    ob) : rb
            }
            return tb
        },
        failTimeout: function() {
            return this._timer = e(function() {
                this.state = tb
            }, this.options.interval, this),
            tb
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == rb && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    ha.VERSION = "2.0.8",
    ha.defaults = {
        domEvents: !1,
        touchAction: gb,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[ea, {
            enable: !1
        }], [ca, {
            enable: !1
        }, ["rotate"]], [fa, {
            direction: Na
        }], [ba, {
            direction: Na
        }, ["swipe"]], [ga], [ga, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [da]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var ub = 1
      , vb = 2;
    ia.prototype = {
        set: function(a) {
            return la(this.options, a),
            a.touchAction && this.touchAction.update(),
            a.inputTarget && (this.input.destroy(),
            this.input.target = a.inputTarget,
            this.input.init()),
            this
        },
        stop: function(a) {
            this.session.stopped = a ? vb : ub
        },
        recognize: function(a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers, e = b.curRecognizer;
                (!e || e && e.state & rb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length; )
                    c = d[f],
                    b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a),
                    !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c),
                    f++
            }
        },
        get: function(a) {
            if (a instanceof Y)
                return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)
                if (b[c].options.event == a)
                    return b[c];
            return null
        },
        add: function(a) {
            if (f(a, "add", this))
                return this;
            var b = this.get(a.options.event);
            return b && this.remove(b),
            this.recognizers.push(a),
            a.manager = this,
            this.touchAction.update(),
            a
        },
        remove: function(a) {
            if (f(a, "remove", this))
                return this;
            if (a = this.get(a)) {
                var b = this.recognizers
                  , c = r(b, a);
                -1 !== c && (b.splice(c, 1),
                this.touchAction.update())
            }
            return this
        },
        on: function(a, b) {
            if (a !== d && b !== d) {
                var c = this.handlers;
                return g(q(a), function(a) {
                    c[a] = c[a] || [],
                    c[a].push(b)
                }),
                this
            }
        },
        off: function(a, b) {
            if (a !== d) {
                var c = this.handlers;
                return g(q(a), function(a) {
                    b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a]
                }),
                this
            }
        },
        emit: function(a, b) {
            this.options.domEvents && ka(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a,
                b.preventDefault = function() {
                    b.srcEvent.preventDefault()
                }
                ;
                for (var d = 0; d < c.length; )
                    c[d](b),
                    d++
            }
        },
        destroy: function() {
            this.element && ja(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    la(ha, {
        INPUT_START: Ea,
        INPUT_MOVE: Fa,
        INPUT_END: Ga,
        INPUT_CANCEL: Ha,
        STATE_POSSIBLE: nb,
        STATE_BEGAN: ob,
        STATE_CHANGED: pb,
        STATE_ENDED: qb,
        STATE_RECOGNIZED: rb,
        STATE_CANCELLED: sb,
        STATE_FAILED: tb,
        DIRECTION_NONE: Ia,
        DIRECTION_LEFT: Ja,
        DIRECTION_RIGHT: Ka,
        DIRECTION_UP: La,
        DIRECTION_DOWN: Ma,
        DIRECTION_HORIZONTAL: Na,
        DIRECTION_VERTICAL: Oa,
        DIRECTION_ALL: Pa,
        Manager: ia,
        Input: x,
        TouchAction: V,
        TouchInput: P,
        MouseInput: L,
        PointerEventInput: M,
        TouchMouseInput: R,
        SingleTouchInput: N,
        Recognizer: Y,
        AttrRecognizer: aa,
        Tap: ga,
        Pan: ba,
        Swipe: fa,
        Pinch: ca,
        Rotate: ea,
        Press: da,
        on: m,
        off: n,
        each: g,
        merge: ta,
        extend: sa,
        assign: la,
        inherit: i,
        bindFn: j,
        prefixed: u
    });
    var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
    wb.Hammer = ha,
    "function" == typeof define && define.amd ? define(function() {
        return ha
    }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha
}(window, document, "Hammer");
//# sourceMappingURL=hammer.min.js.map
