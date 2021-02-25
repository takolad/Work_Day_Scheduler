var dateInputEl = $('#currentDay');
var timeBlockContainerEl = $('.container')
var saveBtnEl = $('.saveBtn');
var textareaFieldEl = $('.description > textarea')

// object to hold hour and text entered from textarea
// var timeBlockObj = [];
var timeBlockObj = [
    {
        hour: 0,
        text: "",
    }, 
    {
        hour: 1,
        text: "",
    },
    {
        hour: 2,
        text: "",
    },
    {
        hour: 3,
        text: "",
    }, 
    {
        hour: 4,
        text: "",
    },
    {
        hour: 5,
        text: "",
    },
    {
        hour: 6,
        text: "",
    }, 
    {
        hour: 7,
        text: "",
    },
    {
        hour: 8,
        text: "",
    },
];
// currently will display after refresh, but altering an entry and saving ERASES OTHERS
// localStorage
var savedTimeBlock = JSON.parse(localStorage.getItem('schedule'));
var tempTime = [];
if(typeof(savedTimeBlock) !== 'undefined' && savedTimeBlock != null) {
    tempTime = savedTimeBlock;
    for (var i = 0; i < savedTimeBlock.length; i++) {
        var textareaEl = $(textareaFieldEl.get(i));
        textareaEl.val(savedTimeBlock[i].text);
    }
};

$(document).ready(function (){
    var today = moment().format('dddd, MMMM Do');
    dateInputEl.text(today);

    var saveIcon = $('<img src="assets/images/save.svg" alt="Save Icon"/>');
    saveBtnEl.append(saveIcon);

    if (localStorage.getItem('schedule') !== null) {
        
    }

    // event handling
    saveBtnEl.on('click', function(event) {

        var targetBlock = $(event.currentTarget).attr('btnNum');
        var index = targetBlock - 9;
        var userEntry = textareaFieldEl.get(index).value;

        timeBlockObj[index].hour = targetBlock;
        timeBlockObj[index].text = userEntry;

        console.log(timeBlockObj);
        savedTimeBlock = timeBlockObj;
        localStorage.setItem('schedule', JSON.stringify(savedTimeBlock));
    });
    

});
//***************************************************//
//  Logic to alter background colors for textareas   //
//***************************************************//

// hour in 24hr format
// var time = moment().format('k');

// For testing outside of work hours
var time = 11;

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
    
    };

    // need localStorage
    // localStorage.setItem('key', 'value');

    