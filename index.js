let _pickupAddress = document.getElementById("address1");
let _dropoffAddress = document.getElementById("address2");
let _userName = document.getElementById('name');
let _userPhone = document.getElementById('phone');
let _pickDateAndTime = document.getElementById('dpt');

let addy1, addy2, _name, _phone, _pickupTime;


function initialize() {
  var input = document.getElementById('address1');
  var input2 = document.getElementById('address2');
  var autocomplete = new google.maps.places.Autocomplete(input);
  var autocomplete = new google.maps.places.Autocomplete(input2);
}

google.maps.event.addDomListener(window, 'load', initialize);

document.getElementById('submitBtn').onclick = function() {
  addy1 = _pickupAddress.value;
  addy2 = _dropoffAddress.value;
  _name = _userName.value;
  _phone = _userPhone.value;
  _pickupTime = _pickDateAndTime.value;

  if (addy1 === "") {
    alert("The pickup address is required");
  } else if (addy2 === "") {
    alert("The drop off address is required");
  } else if (_name === "") {
    alert("Your name number is required");
  } else if (_phone === "") {
    alert("Your phone number is required");
  } else if (_pickupTime === "") {
    alert("A pickup time and date is required");
  } else {
    alert("Thanks for your request! We'll contact you shortly when we're on the way.");
  }
}

// Formatting the phone number as the individual types
document.getElementById('phone').addEventListener('keyup', function(evt) {
  var phoneNumber = document.getElementById('phone');
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  phoneNumber.value = phoneFormat(phoneNumber.value);
});

// Manually formatting the phone number on page load
document.getElementById('phone').value = phoneFormat(document.getElementById('phone').value);

// function to determine if the pressed key is an integer
function numberPressed(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 36 || charCode > 40)) {
    return false;
  }
  return true;
}

// Formatting as a phone number
function phoneFormat(input) {
  // Strip all characters from the input except digits
  input = input.replace(/\D/g, '');

  // Trim the remaining input to ten characters, to preserve phone number format
  input = input.substring(0, 10);

  // Based upon the length of the string, we add formatting as necessary
  var size = input.length;
  if (size == 0) {
    input = input;
  } else if (size < 4) {
    input = '(' + input;
  } else if (size < 7) {
    input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6);
  } else {
    input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6) + ' - ' + input.substring(6, 10);
  }
  return input;
}
