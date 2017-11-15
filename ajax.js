document.addEventListener("DOMContentLoaded", function() {

$('#button-1').click(function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    dataType: 'text'
  });
})

$('#button-2').click(function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/pong',
    method: 'GET',
    dataType: 'text'
  }).done(function(data) {
    console.log(data);
    $('#step3456').append(data)
  }).fail(function() {
    $('#step3456').append(`We'll try harder next time.`)
  })
})




});
