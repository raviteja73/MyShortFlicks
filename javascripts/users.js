// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

function validateNewPassword()
{
    $('.edit_user .errors').remove();
    if($('#user_password').val() === undefined || $('#user_password').val().length < 6)
    {
        $('.edit_user').prepend("<ul class='errors'><li>* Password should contain atleast 6 characters</li></ul>");
        return false;
    }
    if($('#user_password_confirmation').val() !== $('#user_password').val())
    {
        $('.edit_user').prepend("<ul class='errors'><li>* Passwords Should Match</li></ul>");
        return false;
    }
    return true;
}

function ValidateUserEditForm()
{
    $('#user_quote').keyup();
    $('#user_first_name').keyup();
    if($('.edit_user .errors') === null || $('.edit_user .errors').length === 0)
        return true;
    return false;
}

usersReady = function(){
    $(document).on("keyup","#user_quote,#user_first_name",function(){
            $('.edit_user .errors').remove();
            $(this).css('border','1px solid #cdcdcd');
            if($('#user_quote').val() === undefined || $('#user_quote').val().length === 0)
            {
                $('.edit_user').prepend("<ul class='errors'><li>* Quote can't be blank</li> </ul>");
                $('#user_quote').css('border','1px solid red');
            }
            if($('#user_first_name').val() === undefined || $('#user_first_name').val().length === 0)
            {
             $('.edit_user').prepend("<ul class='errors'><li>* First name can't be blank</li> </ul>");
             $('#user_first_name').css('border','1px solid red');
            }
    });
    $(document).on("keyup",'#user_password,#user_password_confirmation',function(){
        validateNewPassword();
    });
}

$(document).ready(usersReady);
