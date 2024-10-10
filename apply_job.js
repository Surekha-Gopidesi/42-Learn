function validateForm() {
    let phoneNumber = document.getElementById('phoneNumber').value;
    let email = document.getElementById('email').value;
  
  
    let phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert('Invalid phone number. Use XXX-XXX-XXXX format.');
      return false;
    }
  
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address.');
      return false;
    }
  
    return true;
  }