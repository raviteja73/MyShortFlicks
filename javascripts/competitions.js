/**
 * Created by mohana.c on 09/02/14.
 */

var array = new Array();
array[0] = '#competition_name';
array[1] = '#competition_rules';
array[2] = '#competition_description';
array[3] = '#competition_prizes';
array[4] = '#competition_start_date';
array[5] = '#competition_end_date';
array[6] = '#competition_results_date';

function ValidateCompEditForm()
{
    for(var i=0;i<7;i++)
    {
        $(array[i]).keyup();
    }
    if($('.new_competition .errors,.edit_production .errors') === null || $('.new_competition .errors,.edit_production .errors').length === 0)
        return true;
    return false;
}

competitionReady = function()
{
    var errorArray = new Array();
    errorArray[0] = 'Name';
    errorArray[1] = 'Rules';
    errorArray[2] = 'Description';
    errorArray[3] = 'Prizes';
    errorArray[4] = 'Start date';
    errorArray[5] = 'End date';
    errorArray[6] = 'Results date';
    $(document).on('keyup','#competition_name,#competition_rules,#competition_description,#competition_prizes',function(){
        $('.new_competition .errors').remove();
        $('.edit_competition .errors').remove();
        $(this).css('border','1px solid #cdcdcd');
                for(var i=0;i<7;i++)
                {
                    if($(array[i]).val() === undefined || $(array[i]).val().length === 0)
                    {
                        var error = "* "+errorArray[i]+" can't be blank";
                        $(array[i]).css('border','1px solid red');
                        $('.new_competition,.edit_competition').prepend("<ul class='errors'><li>"+error+"</li> </ul>");
                    }
                }
    });
}



$(document).ready(competitionReady);
