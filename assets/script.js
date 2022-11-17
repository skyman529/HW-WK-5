$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
function timecolor() {
var hour = moment().hours();
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));
        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour == hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }})};
timecolor();
saveButton.on("click", function() {
    var hour = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();
        localStorage.setItem(hour, description);
    });
    function useCurDescription() {
        $(".hour").each(function() {
            var currentHour = $(this).text();
            var curdescription = localStorage.getItem(currentHour);
            if(curdescription !== null) {
                $(this).siblings(".description").val(curdescription);
            }});
    }
    useCurDescription();
