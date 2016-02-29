function ValidateVideoEditForm()
{
    $('#video_title,#video_description,#video_youtube_url').keyup();
    if($('.new_video .errors') === null || $('.new_video .errors').length === 0)
        return true;
    return false;
}

function validateVidFun(element)
{
    var $element = $(element);
    $('.new_video .errors').remove();
    $element.css('border','1px solid #cdcdcd');
    if($('#video_title').val() === undefined || $('#video_title').val().length === 0)
    {
        $('.new_video').prepend("<ul class='errors'><li>* Title can't be blank</li> </ul>");
        $('#video_title').css('border','1px solid red');
    }
    if($('#video_description').val() === undefined || $('#video_description').val().length === 0)
    {
        $('.new_video').prepend("<ul class='errors'><li>* Description can't be blank</li> </ul>");
        $('#video_description').css('border','1px solid red');
    }
    if(! /(?:http|https|)(?::\/\/|)(?:www.|)(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/ytscreeningroom\?v=|\/feeds\/api\/videos\/|\/user\S*[^\w\-\s]|\S*[^\w\-\s]))([\w\-]{11})/i.test($('#video_youtube_url').val()))
    {
        $('.new_video').prepend("<ul class='errors'><li>* Youtube url is not in correct format</li> </ul>");
        $('#video_youtube_url').css('border','1px solid red');
    }
}

var loadVideo = {
    replaceImage: function(videoid){
        str = "<iframe id='ytplayer' type='text/html' width='250' height='140' src='https://www.youtube.com/embed/" + videoid.id + "?autoplay=1&showinfo=0&autohide=1&color=white&theme=light&origin=http://www.myshortflicks.com' frameborder='0' allowfullscreen ></iframe>";
        $("#" + videoid.id).replaceWith(str);
        $.ajax({
            url:"/counter",
            type:"post",
            data:{video_id: videoid.id}
        });
    },
    replaceImageshow: function(videoid){
        str = "<iframe id='ytplayer' type='text/html' width='560' height='315' src='https://www.youtube.com/embed/" + videoid.id + "?autoplay=1&showinfo=0&autohide=1&color=white&theme=light&origin=http://www.myshortflicks.com' frameborder='0' allowfullscreen ></iframe>";
        $("#" + videoid.id).replaceWith(str);
        $.ajax({
            url:"/counter",
            type:"post",
            data:{video_id: videoid.id}
        });
    },
    initialize: function(){
        $(document).on("click", "div.blue-strip , img.play-image", function(){
            var videoid = $(this).parent().siblings(".toReplaceImage")[0];
            loadVideo.replaceImage(videoid);
            $(this).parent().hide();
        });
        $(document).on("click", "div.blue-stripshow , img.play-imageshow", function(){
            var videoid = $(this).parent().siblings(".toReplaceImageshow")[0];
            loadVideo.replaceImageshow(videoid);
            $(this).parent().hide();
        });
        $(".videos").on("click", ".toReplaceImage", function(){
            $(this).siblings(".blue-strip-div").hide();
            loadVideo.replaceImage(this);
        });
        $(document).on("click", ".toReplaceImageshow", function(){
            $(this).siblings(".blue-strip-div").hide();
            loadVideo.replaceImageshow(this);
        });
    }
};

videosReady = function(){
    loadVideo.initialize();
    $(document).on("keyup","#video_title,#video_youtube_url,#video_description",function(){validateVidFun(this);});
};

$(document).ready(videosReady);
