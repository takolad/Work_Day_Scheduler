var dateInputEl = $('#currentDay');
var timeBlockContainerEl = $('.container')
var saveBtnEl = $('.saveBtn');
var textareaFieldEl = $('.description > textarea')

$(document).ready(function (){
    var today = moment().format('dddd, MMMM Do');
    dateInputEl.text(today);

    var saveIcon = $('<img src="assets/images/save.svg" alt="Save Icon"/>');
    saveBtnEl.append(saveIcon);

});

//***************************************************//
//  Logic to alter background colors for textareas   //
//***************************************************//

// hour in 24hr format
var time = moment().format('k');

// For testing outside of work hours
// var time = 12;

if (time >= 9 && time <= 17) {
    // Checks each textarea's hour attribute and adds class based of comparison to momentjs time
    $('textarea').each(function() {
        // if hour is less than NOW - gray
        if ($(this).attr("hour") < time) {
            $(this).addClass('past');
        }
        // if hour is equal to NOW - green
        else if ($(this).attr('hour') == time) {
            $(this).addClass('present');
        }
        
        // if hour is more than NOW - red
        else if ($(this).attr('hour') > time) {
            $(this).addClass('future');
        }
    })
    
    }