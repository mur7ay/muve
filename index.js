let _pickupAddress = document.getElementById("pickupAddress").value;
let _dropoffAddress = document.getElementById("dropoffAddress").value;

function initialize() {
  var input = document.getElementById('address1');
  var input2 = document.getElementById('address2');
  var autocomplete = new google.maps.places.Autocomplete(input);
  var autocomplete = new google.maps.places.Autocomplete(input2);
}

google.maps.event.addDomListener(window, 'load', initialize);

$(function() {
  $('#dpt').fdatepicker({
    format: 'mm-dd-yyyy hh:ii',
    disableDblClickSelection: true,
    language: 'en',
    pickTime: true
  });
});
