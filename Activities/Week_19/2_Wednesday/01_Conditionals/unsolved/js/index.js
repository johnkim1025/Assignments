/*
$('.tab').on("click", function(){
  if($(this).hasClass("tab1")){
    $(".tab1").addClass("active");
    $(".tab2").removeClass("active");
    $("#tabContent2").css('display','none');
    $("#tabContent1").css('display','block');
  }
  else if($(this).hasClass("tab2")){
    $("#tabContent2").css('display','block');
    $("#tabContent1").css('display','none');
    $(".tab1").removeClass("active");
    $(".tab2").addClass("active");
  }
});
*/
$(document).ready(function () {
    $('.tab').click(function () {
        $('.tab').removeClass('active');
        $(this).addClass('active'); 
        var tab1 = $('.tab1').hasClass('active')
        var tab2 = $('.tab2').hasClass('active')
        if (tab1 == true) {
            $('#tabContent1').css('display', 'block');
            $('#tabContent2').css('display', 'none');
        }
        else if (tab2 == true) {
            $('#tabContent2').css('display', 'block');
            $('#tabContent1').css('display', 'none');
        }
        else{
            $('#tabContent2').css('display', 'none');
            $('#tabContent1').css('display', 'none');
        }    
    });
});