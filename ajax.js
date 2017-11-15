document.addEventListener("DOMContentLoaded", function() {

$('#button-1').click(function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    dataType: 'text'
  });
})


});
