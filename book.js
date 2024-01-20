function submitForm() {
    if (validateForm()) {
      
      alert("Form submitted!");

      setTimeout(function () {
        window.location.href = 'thankyou.html'; 
      }, 1000); 
    }
  }

  function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var checkin = document.getElementById('checkin').value;
    var checkout = document.getElementById('checkout').value;
    var vehicle = document.getElementById('vehicle').value;

    if (name === '' || email === '' || checkin === '' || checkout === '' || vehicle === '') {
      alert('Please fill in all the required fields.');
      return false;
    }

    return true;
 }