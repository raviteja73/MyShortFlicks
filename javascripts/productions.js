//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

function validateAdminEmail()
{
    $('.info-content .errors').hide();
    var email = $('#admin_role_user_id').val();
    if(! /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email) )
    {
        $('.info-content .errors').show();
        return false;
    }
    return true;
}

function ValidateProdEditForm()
{
    $('#production_name').keyup();
    $('#production_description').keyup();
    $('#production_mobile').keyup();
    if($('.new_production .errors,.edit_production .errors') === null || $('.new_production .errors,.edit_production .errors').length === 0)
        return true;
    return false;
}

$(document).ready(function(){

    var array = new Array();
    array[0] = '#production_name';
    array[1] = '#production_description';
    array[2] = '#production_mobile';
    var errorArray = new Array();
    errorArray[0] = 'Name';
    errorArray[1] = 'Description';
    errorArray[2] = 'Mobile';
    $.each(array,function(i)
    {
        $(document).on('keyup',array[i],function(){
            $('.new_production .errors').remove();
            $('.edit_production .errors').remove();
            $(this).css('border','1px solid #cdcdcd');
            for(var j=0;j<3;j++)
            {
                if($(array[j]).val() === undefined || $(array[j]).val().length === 0)
                {
                    var error = "* "+errorArray[j]+" can't be blank";
                    $(array[j]).css('border','1px solid red');
                    $('.new_production,.edit_production').prepend("<ul class='errors'><li>"+error+"</li> </ul>");
                }
                else if(j == 2)
                {
                    if($(array[j]).val()[0] !== 7 && $(array[j]).val()[0] !== 8 && $(array[j]).val()[0] !== 9 && $(array[j]).val().length !== 10)
                    {
                        var error ="* Mobile Number should start with 7,8 or 9 and should contain 10 digits";
                        $(array[j]).css('border','1px solid red');
                        $('.new_production,.edit_production').prepend("<ul class='errors'><li>"+error+"</li> </ul>");
                    }
                }
            }
        });
    });
$(document).on('click','.add-admin-btn',function(){
        var value = $('#admin_role_user_id').val();
        if(!/\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.test(value))
        {

        }
});
$("#contact_add").on("click",'.remove_contact_fields',function(event){
console.log("sd");
 $(this).prev('input[type=hidden]').val('1');
    $(this).closest('fieldset').hide();
    event.preventDefault();
});

$(".add_fields").on("click",function(event){

var selected = $("#contact_choice_opts :selected").val();
var replacedstr='';

//pass this value while rendering
//hack 
//var replacedstr=$(this).attr('data-fields').replace(/var1/g,$("#contact_choice_opts :selected").val());
//$( this ).attr( "data-fields", function( ) {
//  return replacedstr;
//});
//console.log(2+$("#contact_choice_opts :selected").val()+replacedstr);


 time = new Date().getTime();
    regexp = new RegExp($(this).data('id'), 'g');
    $(this).before($(this).data('fields').replace(regexp, time));



var strr=$(".add_fields").prev().html();
if(selected=="Mobile")
{

replacedstr=strr.replace(/Email/g,"Mobile");

}
if(selected=="Email")
{

replacedstr=strr.replace(/Mobile/g,"Email");

}

$(".add_fields").prev().html(replacedstr);


    event.preventDefault();
});

















});





/*

var contactdb=new Object();
var count=0;
var contactinfoobj=new Object();
var roleinfoobj=new Object();
(function () {
 contactinfoobj[0]='';
contactinfoobj[1]='';
})();



function addContact() {

if(document.getElementById('contact_add').style.display=='none' || document.getElementById('contact_add').style.display=='')
{
document.getElementById('contact_add').style.display='inline';
}
else
{
document.getElementById('contact_add').style.display='none';
}
}










function validate(index,arg){
var flag=false;


//return true;

console.log(index+"||"+arg);

if(index==0){


if( arg.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)==null)
{
flag=false;
console.log("mailfail");
}
else
{
flag=true;
}
return flag;
}
if(index==1){
if(arg.match(/^[789]\d{9}$/)==null)
{
flag=false;
console.log("mobfail");

}
else
{
flag=true;
}
return flag;
}
return flag;
		
}




function delData(e) {

var index=e.parentNode.id.substr(e.parentNode.id.length-1);
//clear from ds
contactdb[index]='';
//remove div
$( "#contact_edit-"+index ).remove();
}






function addData() {



contactinfoobj[$("#contact_choice_opts").val()]=$("#contact_user").val();


if(validate(0,contactinfoobj[0]) && validate(1,contactinfoobj[1]))
{
//clean error msgs
$( "#contact_error" ).empty();

var txtFieldvals=$("#contact_user").val();

//cloning
contactdb[count]=new Object;
jQuery.extend(contactdb[count],contactinfoobj);


//add new element to the contact_list, readonly
$( "#contact_list" ).append(function() {
var con='<div id="contact_edit-'+count+'" style="display: inline; "><select id="contact_choice_opts" name="contact_choice[opts]"><option value="0">mil</option><option value="1">mob</option></select><input id="contact_user-'+count+'" name="contact_user" type="text" readonly><input onclick="delData(this)" type="button" value="Remove"></div>'
  return con;
});

//clear local ds
 contactinfoobj[0]='';
contactinfoobj[1]='';

//showing initial text field val
$('#contact_user-'+count).val(contactdb[count][0]);

$("#contact_add,#contact_user").val('');

count++;
}
else // error messages
{
if(validate(0,contactinfoobj[0]))
{
$( "#contact_error" ).html(function() {
  return "<p>Mobile no validation failed</p>";
});
}
else
{
$( "#contact_error" ).html(function() {
  return "<p>Email validation failed</p>";
});
}
}

}






$(document).ready(function(){

var prevrole=1;

$(".roles").on('change','select',function(data){


if(validate(0,$("#team_desig_email").val()))
{
$("#role_error").empty();
roleinfoobj[prevrole]=$("#team_desig_email").val();
prevrole=$(this).val();
$("#team_desig_email").val(roleinfoobj[$(this).val()]);
}
else
{
//will force user to enter correct email
//$(this).val(prevrole);
$("#team_desig_email").val('');
$( "#role_error" ).html(function() {
  return "<p>Email Validation failed</p>";
});
}



});










//dynamic div event handler

$('#contact_add').on('change', 'select', function (data) {

var index=this.parentNode.id.substr(this.parentNode.id.length-1);
console.log(index + "{}}{}"+$(this).val());

$("#contact_list,#contact_user-"+index).val(contactdb[index][$(this).val()]);

});



 var sel = $("select,#contact_choice_opts");


  sel.change(function(data){
     var jqThis = $(this);



if(jqThis.val()==1)
{
 contactinfoobj[0]=$("#contact_user").val();

$("#contact_user").val(contactinfoobj[1]);

}
if(jqThis.val()==0)
{
 contactinfoobj[1]=$("#contact_user").val();

$("#contact_user").val(contactinfoobj[0]);
}


  });
});

*/


function validate(index,arg){
var flag=false;


//return true;

console.log(index+"||"+arg);

if(index==0){


if( arg.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)==null)
{
flag=false;
console.log("mailfail");
}
else
{
flag=true;
}
return flag;
}
if(index==1){
if(arg.match(/^[789]\d{9}$/)==null)
{
flag=false;
console.log("mobfail");

}
else
{
flag=true;
}
return flag;
}
return flag;
		
}


var roleinfoobj=new Object();

$(document).ready(function(){

var prevrole=1;

$(".roles").on('change','select',function(data){

if(validate(0,$("#team_desig_email").val()))
{
$("#role_error").empty();
roleinfoobj[prevrole]=$("#team_desig_email").val();
prevrole=$(this).val();
$("#team_desig_email").val(roleinfoobj[$(this).val()]);
}
else
{
//will force user to enter correct email
//$(this).val(prevrole);
$("#team_desig_email").val('');
$( "#role_error" ).html(function() {
  return "<p>Email Validation failed</p>";
});
}



});
});
