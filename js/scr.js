$(function () {
  let location = window.location.href;
  let url = location.split('/').pop();

  $('.menu__main li').each(function () {
      let link = $(this).find('a').attr('href');
      if (url == link) {
          $(this).addClass('current');
      }
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $("#gotop").fadeIn();
    } else {
      $("#gotop").fadeOut();    
    }
  });
});
$('#gotop').click(function(){
  $('html, body').animate({scrollTop:0}, '300');
});

$('#denmark').hover(function() {
  $("[id*='text-start'], [id*='text-map-two'], [id*='text-map-three']").css("display", "none");
  $("#text-map-one1, #text-map-one2, #text-map-one3").css("display", "block");
});  

$('#sweden').hover(function() {
  $("[id*='text-start'], [id*='text-map-one'], [id*='text-map-three'] ").css("display", "none");
  $("#text-map-two1, #text-map-two2, #text-map-two3").css("display", "block");
});

$('#norway').hover(function() {
  $("[id*='text-start'],[id*='text-map-one'], [id*='text-map-two']").css("display", "none");
  $("#text-map-three1, #text-map-three2, #text-map-three3").css("display", "block");
}); 

$('.wrapper__text').hover(function() {
  $("[id*='text-map-one'], [id*='text-map-two'],[id*='text-map-three'] ").css("display", "none");
  $("#text-start1, #text-start2, #text-start3,#text-start4 ").css("display", "block");
});

let formElement = document.forms.info;
formElement.onsubmit = validateForm;
function validateForm() {
  
    let name = formElement.elements.name;
    let phone = formElement.elements.phone;
    let email = formElement.elements.email;

    let nameValue = name.value;
    let phoneValue = parseInt(phone.value.trim());
    let emailValue = email.value;
  
    if ( nameValue.length > 15 ) {
        alert('Введите пожалуйста Имя не длиннее 15 символов!');
        name.focus();
        return false;
    }

    if ( isNaN(phoneValue) ) {
        alert('Введите пожалуйста корректный номер телефона!');
        phone.focus();
        return false;
    }

    if (emailValue.indexOf('.', 0) == -1 || emailValue.indexOf('@', 0) == -1) {
        alert('Некорректный E-Mail!');
        emailValue.focus();
        return false;
    }
    return true;
}





