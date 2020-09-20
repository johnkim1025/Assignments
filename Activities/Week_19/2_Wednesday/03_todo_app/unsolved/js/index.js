// Create event listener to enter items below
$('#enter').on('click', function(){
    var Task = $('#todoItem').val();
    $('#todoList').append("<div class='task'>" + Task + "<div class='x fas fa-times'></div></div>");
});
// Create event listener to delete items below
$(document).on('click', '.x', function(){
    $(this).parent().remove();
});
$(document).on('click', '.task', function(){
    $(this).toggleClass('done');
    if($(this).hasClass('done')){
        $(this).find('div').removeClass('fa-times');
        $(this).find('div').addClass('fa-check');
    }
    else{
        $(this).find('div').addClass('fa-times');
    }
});
// Create event listener to toggle 
