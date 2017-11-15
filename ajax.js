document.addEventListener("DOMContentLoaded", function() {
  var paragraph = document.createElement('p')
  var ulCar = document.createElement('ul')

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
    paragraph.innerHTML = "";
    paragraph.append(data)
    $('#step3456').append(paragraph);
  }).fail(function() {
    console.log('Failed');
    paragraph.append(`We'll try harder next time.`);
  }).always(function() {
    console.log('Finished');
    paragraph.append(" Hey the request finished!");
  });
});

$('#button-3').click(function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/count',
    method: 'GET',
    dataType: 'text'
  }).done(function(data) {
    paragraph.innerHTML = "";
    paragraph.append(data);
    $('#step7').append(paragraph);
  })
})

$('#button-4').click(function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/time',
    method: 'GET',
    data: {timezone: 'Europe/Madrid'},
    dataType: 'text'
  }).done(function(data) {
    paragraph.innerHTML = "";
    paragraph.append(data);
    $('#step8').append(paragraph);
  })
})

$('#button-5').click(function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/a_car',
    method: 'GET',
    dataType: 'html'
  }).done(function(data) {
    ulCar.innerHTML = data;
    $('#step9').append(ulCar);
  })
})

});
