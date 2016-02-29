function adjustFooter() {
    var height = $(document).height() - $('footer').height();
    $('footer').css('top', height);
}
function ValidateForm()
{
                        $('#signin-popup .errors').hide();
                var email = $('#signin-popup #session_email').val();
                if(email === '' || email === undefined || ! /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email) )
                {
                        $('#signin-popup').prepend('<span class="errors"> Invalid email/password combination </span>');
                        return false;
                }
        var password = $('#signin-popup #session_password').val();
                if(password === '' || password === undefined || password.length < 6)
                {
                        $('#signin-popup').prepend('<span class="errors"> Invalid email/password combination </span>');
                        return false;
                }

        return true;
}


function signUpValidate()
{
        var str = "";
        var count = 0;
        var first_name =$('#signup-popup #user_first_name').val();
        if(first_name === undefined || first_name === '')
         {
                        str = str+"Please specify your first name";
                        count = count+1;
         }
        var email = $('#signup-popup #user_authentication_email').val();
        if(email === undefined || email === '' || ! /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email))
                {
                        if(count === 0)
                        {
                                str = str + "Email is not valid";
                        }
                        count = count+1;
                }
        var password = $('#signup-popup #user_authentication_password').val();
        if(password === undefined || password === '' || password.length < 6)
                {
                        if(count === 0)
                        {
                                str =   str + " Password: Min 6 characters";
                        }
                        count = count+1;
                }
        var confirm = $('#signup-popup #user_authentication_password_confirmation').val();
        if(confirm !== password)
        {
                if(count === 0)
                {
                        str = str +"Passwords are not matching";
                }
                count = count +1;
        }

        $('#signup-popup .errors').html(str);
        if(count > 0)
                $("#signup-popup input[name='commit']").attr('disabled',true);
        else
                $("#signup-popup input[name='commit']").attr('disabled',false);

}


mainReady = function(){
        $("#signup-popup input[name='commit']").attr('disabled',true);
        $('#signup-popup #user_first_name').on('keyup',signUpValidate);
        $('#signup-popup #user_authentication_email').on('keyup',signUpValidate);
        $('#signup-popup #user_authentication_password').on('keyup',signUpValidate);
        $('#signup-popup #user_authentication_password_confirmation').on('keyup',signUpValidate);
        setInterval(adjustFooter,1);

};

$(document).ready(mainReady);





mainFun = {
    noticeClose: function(){
        $("#web-notice").hide();
    },
    initialize: function(){
        $("#web-notice #close").click(mainFun.noticeClose);
        $(".datepicker").datepicker({ dateFormat: "yy-mm-dd",
        onSelect: function(){
            var $elem = $(this);
            $('.new_competition .errors').remove();
            $('.edit_competition .errors').remove();
            $elem.css('border','1px solid #cdcdcd');
            ValidateCompEditForm();
        }});
    }
}

// ajaxStopFun = function(){
//     $(".dummy-popup").click(signinup.signinPopup);
//     loadVideo.initialize();
// }

$(document).ready(mainFun.initialize);
$(window).load(function(){
    $("#web-notice").fadeOut(10000);
    if($(document).height() > $("html").css("height")){
        $("html").css("height",$(document).height());
        $("body").css("height",$(document).height());
    }
});
// $(document).ajaxStop(ajaxStopFun);
