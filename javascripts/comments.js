// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/


mainReady = function(){
    $(document).on("click","#commentupdateicon",function(){
        $(this).parents(".comment").find(".edit-delete-popup").css("display","inline-block").focus();
    });
    $(document).on("focusout",".edit-delete-popup",function(){
        $(this).css("display","none");
    });
    $(document).on("click",".edit-delete-popup div.edit",function(){
        $(this).parents(".edit-delete-popup").css("display","none");
        $(this).parents(".comment").find(".form").css("display","inline-block");
        $(this).parents(".comment").find(".comment-text").css("display","none");
    });
    $(document).on("mousedown" ,".edit-delete-popup div.delete form input" ,function(e){
        e.preventDefault();
    });
    $(document).on("click","div.cancel",function(){
       var commentDiv = $(this).parents(".comment");
       commentDiv.find(".form").css("display","none");
       commentDiv.find(".comment-text").css("display","inline-block");
       commentDiv.find("form textarea").val($.trim(commentDiv.find("div.comment-text").text()));
    });
    $(document).on("submit","div.comment form",function(){
        $(this).parents(".comment").find(".username-comment .form").css("display","none");
        $(this).parents(".comment").find(".username-comment .comment-text").css("display","inline-block");
    });
};

$(document).ready(mainReady);