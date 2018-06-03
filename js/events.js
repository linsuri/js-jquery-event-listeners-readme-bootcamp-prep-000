//define functions here

function getIt() {
  alert('Hey!');
}

function frameIt() {
  $('img').addClass("tasty");
  $('img').css('border', "solid 2px red");
}

function pressIt(key) {
  if (key.which == 71) {
    alert('You have pressed G.');
  }
}

function submitIt() {
  alert('Your form is going to be submitted now.')
}

$(document).ready(function(){

// call functions here

$('p').on('click', getIt);
$('img').on('load', frameIt);
$('input').on('keydown', pressIt);
$('form').on('submit', submitIt);

});
