document.addEventListener("DOMContentLoaded", function() {
  var count = document.createElement('p')

$('#button-1').click(function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    dataType: 'text'
  });
})

$('#button-2').click(function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    dataType: 'text'
  }).done(function(data) {
    console.log('Success');
    $('#step3456').append(data);
  }).fail(function() {
    console.log('Failed');
    $('#step3456').append(`We'll try harder next time.`);
  }).always(function() {
    console.log('Finished');
    $('#step3456').append(" Hey the request finished!");
  });
});

$('#button-3').click(function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/count',
    method: 'GET',
    dataType: 'text'
  }).done(function(data) {
    count.innerHTML = "";
    $(count).append(data);
    $('#step7').append(count);
  })
})

});
