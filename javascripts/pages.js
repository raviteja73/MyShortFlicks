// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/


var carousel = {

    anim: 1,
    animateInterval: 3000,
    animateSpeed: 200,

    onHover: function(){
        $("#carousel-images, #carousel-thumbnails").hover(function(e){
            clearInterval(carousel.anim);
        }, function(e){
            carousel.anim = setInterval(function(){carousel.navigateRight(1)}, carousel.animateInterval);
        });
    },

    thumbnailIndication: function(){
        id=$("#carousel-images li:first").attr('id');
        $("#carousel-thumbnails li").css({'border-bottom-color': 'rgb(255,255,255)',
                                          'border-top-color': 'rgb(255,255,255)'
                                         });
        $("#carousel-thumbnails").find("#"+id).css({'border-bottom-color': 'rgb(112,177,219)',
                                                    'border-top-color': 'rgb(112,177,219)'
                                                   });
    },

    navigateRight: function(diff){
        $("#carousel-images").animate({marginLeft: (-960*diff)}, carousel.animateSpeed, function(){
            for(i = 0; i < diff; i++){
                $('#carousel-images li:first').appendTo('#carousel-images');
                $(this).css({marginLeft: 0});
            }
            carousel.thumbnailIndication();
        });
    },

    navigateLeft: function(diff){
        for(i = 0; i < diff; i++){
            $("#carousel-images li:last").prependTo('#carousel-images');
        }
        $("#carousel-images").css({marginLeft: (-960*diff)});
        $("#carousel-images").animate({marginLeft: 0}, carousel.animateSpeed, function(){
            carousel.thumbnailIndication();
        });
    },

    thumbnailClick: function(this_ref){
        thumbnail_id = $(this_ref).attr('id');
        current_image_id = $("#carousel-images li:first").attr('id');
        diff = thumbnail_id - current_image_id;
        if (diff > 0){
            carousel.navigateRight(diff);
        }
        else{
            diff = -diff;
            carousel.navigateLeft(diff);
        }
    },

    autoAnimate: function(){
        carousel.anim = setInterval(function(){carousel.navigateRight(1)}, carousel.animateInterval);
    },

    initialize: function(){
        $('#carousel-thumbnails li').click(function(){
            carousel.thumbnailClick(this);});
        carousel.autoAnimate();
        carousel.onHover();
    }
};

signinup = {
    signinPopup: function(){
        $("#signin-popup-overlay").show();
        $("#signin-popup").show();
        $("#signup-popup").hide();
    },
    close: function(){
        $("#signin-popup-overlay").hide();
        $("#signin-popup").hide();
        $("#signup-popup").hide();
        $('.submit-video-popup').hide();
    },
    signupPopup: function(){
        $("#signin-popup-overlay").show();
        $("#signin-popup").hide();
        $("#signup-popup").show();
    },
    //       toggleDropdown: function(){

    //         setTimeout(function(){$("#header-right-btn-dropdown").toggle()},250);
    // $("#header-right-btn-dropdown").stop(true, true).slideToggle();
    //slide toggle will slide up slowly
    //   },
    initialize: function(){
        $("#header-signin-btn").click(signinup.signinPopup);
        $("#join-now-two").click(signinup.signupPopup);
        $("#login-one").click(signinup.signinPopup);
        $(".popup-close").click(signinup.close);
        $("#signin-popup-overlay").click(signinup.close);
        /* $("#header-right-btn-wrapper").hover(
           signinup.toggleDropdown,
           signinup.toggleDropdown
           );*/
        if ($("span").hasClass("signin_errors")){
            signinup.signinPopup();
            // Do something here if an element with this class exists
        }
        if ($("span").hasClass("popup_signup_error")){
            signinup.signupPopup();
        }
        // if ($("signup_errors").val()!=null){
        //     signinup.signupPopup();
        //     // Do something here if an element with this class exists
        // }
        $(document).on("click", ".dummy-popup", signinup.signinPopup);
        $("#header-right-btn-wrapper").on('mouseover',function(){ $("#header-right-btn-dropdown").css("display","block");}).on('mouseleave',function(){ $("#header-right-btn-dropdown").css("display","none");});
        $('#header-right-btn-dropdown').on('mouseover',function(){ $(this).css("display","block");}).on('mouseleave',function(){ $(this).css("display","none");});
    }
};

pagesReady = function(){
    carousel.initialize();
    signinup.initialize();
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            signinup.close();
        }   // esc
    });
};
$(window).ready(pagesReady);
// $(document).on('page:load', pagesReady);
