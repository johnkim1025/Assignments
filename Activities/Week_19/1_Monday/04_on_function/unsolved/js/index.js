// .on event listener documentation - https://api.jquery.com/on/#on-events-selector-data-handler

// Step 1: Hide a div
$("#button1").on("click", function(){
    $(".hideMe").slideToggle();
});

// Step 2: Change a color
$('#button2').on("click", function(){
    $('.cssChange').css("background-color","red");
});
$('#button4').on("click", function(){
    $('.cssChange').css("background-color","blue");
});
// Step 3: Append content
$('#button3').on("click", function(){
    $('.appendMe').append("<div class='child'>I got appended! Nice!</div>");
});
