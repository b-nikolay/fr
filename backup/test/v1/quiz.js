(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    'use strict';
    
    var acc = document.querySelectorAll(".accordion-quiz");
    acc.forEach(function (el) {
        el.addEventListener('click', function (e) {
          var sibling = e.target.nextElementSibling;
          e.target.classList.toggle("active");
          if (sibling.style.maxHeight) {
            sibling.style.maxHeight = null;
          } else {
            sibling.style.maxHeight = sibling.scrollHeight + "px";
          }
        });
      });
    setTimeout(function() {
    	$('#quizModal').modal('show');
    }, 17000);
      $(document).ready(function() {

        $('.service-area .popup-trigger').on('click', function (event) {
            let attr = $(this).attr('data-var');
            if (attr == 'service1') {
                $('#serviceModal input[name="form_subject"]').val('СРО - Повышение квалификации сотрудников');
                $('#serviceModal .modal-title').text('Повышение квалификации сотрудников');
    
            } else if (attr == 'service2') {
                $('#serviceModal input[name="form_subject"]').val('СРО - Подбор специалистов под требования НРС');
                $('#serviceModal .modal-title').text('Подбор специалистов под требования НРС');
    
            } else if (attr == 'service3') {
                $('#serviceModal input[name="form_subject"]').val('СРО - Сертификация ISO');
                $('#serviceModal .modal-title').text('Сертификация ISO');
    
            } else if (attr == 'service4') {
                $('#serviceModal input[name="form_subject"]').val('СРО - Аттестация промышленной безопасности');
                $('#serviceModal .modal-title').text('Аттестация промышленной безопасности');
    
            } else if (attr == 'service5') {
                $('#serviceModal input[name="form_subject"]').val('СРО - Юридические услуги');
                $('#serviceModal .modal-title').text('Юридические услуги');
    
            } else if (attr == 'service6') {
                $('#serviceModal input[name="form_subject"]').val('СРО - Лицензии МЧС, Минкультуры и Ростехнадзора');
                $('#serviceModal .modal-title').text('Лицензии МЧС, Минкультуры и Ростехнадзора');
    
            }
            event.preventDefault();
        });

        // $(document).mouseleave(function(e){
        //     if (e.clientY < 10) {
        //         $('#LeaveForm').modal('show')
        //     }    
        // });
        // $(document).click(function(e) {
        //     if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
        //         $('#LeaveForm').modal('hide')
        //     }
        // });
        
        jQuery.showGrid1 = function() {
            setTimeout(function () {
                $('.quiz-grid').css('display', 'none');
                $('#grid-1').css('display', 'block');
            }, 300);
            $('.quiz-buttons .progress_bar__label span').text('0%');
            $(".quiz-buttons .progress_bar__field span").css('width', '0%');    
        }; 
    
        jQuery.showGrid2 = function() {
            setTimeout(function () {
                $('.quiz-grid').css('display', 'none');
                $('#grid-2').css('display', 'block');
            }, 300);
            $('.quiz-buttons .progress_bar__label span').text('25%');
            $(".quiz-buttons .progress_bar__field span").css('width', '25%');    
        }; 
    
        jQuery.showGrid3 = function() {
            setTimeout(function () {
                $('.quiz-grid').css('display', 'none');
                $('#grid-3').css('display', 'block');
            }, 300);
            $('.quiz-buttons .progress_bar__label span').text('50%');
            $(".quiz-buttons .progress_bar__field span").css('width', '50%');    
        }; 
    
        jQuery.showGrid4 = function() {
            setTimeout(function () {
                $('.quiz-grid').css('display', 'none');
                $('#grid-4').css('display', 'block');
            }, 300);
            $('.quiz-buttons .progress_bar__label span').text('75%');
            $(".quiz-buttons .progress_bar__field span").css('width', '75%');    
        }; 
    
        jQuery.showGrid5 = function() {
            setTimeout(function () {
                $('.quiz-grid').css('display', 'none');
                $('#grid-5').css('display', 'block');
            }, 300);
            $('.quiz-buttons .progress_bar__label span').text('90%');
            $(".quiz-buttons .progress_bar__field span").css('width', '90%');    
        }; 
    
    
        $("#grid-1 input").change(function() {
            if ($(this).prop("checked")) {
                $("#grid-1 .answer-variants__textVariant label").removeClass('active');
                $(this).parent().addClass('active');
                $("#grid-1 .quiz-buttons__button_next").removeAttr('disabled');
            }        
            jQuery.showGrid2();
        });
    
        $("#grid-2 input").change(function() {
            if ($(this).prop("checked")) {
                $("#grid-2 .answer-variants__textVariant label").removeClass('active');
                $(this).parent().addClass('active');
                $("#grid-2 .quiz-buttons__button_next").removeAttr('disabled');
            }
            jQuery.showGrid3();
        });
    
        $("#grid-3 input").change(function() {
            if ($(this).prop("checked")) {
                $("#grid-3 .answer-variants__textVariant label").removeClass('active');
                $(this).parent().addClass('active');
                $("#grid-3 .quiz-buttons__button_next").removeAttr('disabled');
            }
            jQuery.showGrid4();
        });
    
        $("#grid-4 input").change(function() {
            if ($(this).prop("checked")) {
                $("#grid-4 .answer-variants__textVariant label").removeClass('active');
                $(this).parent().addClass('active');
                $("#grid-4 .quiz-buttons__button_next").removeAttr('disabled');
            }
            jQuery.showGrid5();
        });
    
        $("#grid-5 input").change(function() {
            if ($(this).prop("checked")) {
                $("#grid-5 .answer-variants__textVariant label").removeClass('active');
                $(this).parent().addClass('active');
                $("#grid-5 .quiz-buttons__button_next").removeAttr('disabled');
            }
            jQuery.showGrid6();
        });
    
        $("#grid-1 .quiz-buttons__button_next").click(function() {
            jQuery.showGrid2();
            return false;
        });
        $("#grid-2 .quiz-buttons__button_next").click(function() {
            jQuery.showGrid3();
            return false;
        });
        $("#grid-3 .quiz-buttons__button_next").click(function() {
            jQuery.showGrid4();
            return false;
        });
        $("#grid-4 .quiz-buttons__button_next").click(function() {
            jQuery.showGrid5();
            return false;
        });
        
        $("#grid-2 .quiz-buttons__button_prev").click(function() {
            jQuery.showGrid1();
            return false;
        });
        $("#grid-3 .quiz-buttons__button_prev").click(function() {
            jQuery.showGrid2();
            return false;
        });
        $("#grid-4 .quiz-buttons__button_prev").click(function() {
            jQuery.showGrid3();
            return false;
        });
        $("#grid-5 .quiz-buttons__button_prev").click(function() {
            jQuery.showGrid4();
            return false;
        });
    });
  

  },{}]},{},[1])
    