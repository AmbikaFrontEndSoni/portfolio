function sendFormData(event) {
    event.preventDefault();
  
    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
    const address = document.getElementById('inputAddress').value;
    const city = document.getElementById('inputCity').value;
    const state = document.getElementById('inputState').value;
    const zip = document.getElementById('inputZip').value;
    const message = document.getElementById('inputMessage').value;
  
    const mailtoLink = `mailto:ambikasoni@example.com?subject=Contact from Portfolio&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AAddress: ${address}%0D%0ACity: ${city}%0D%0AState: ${state}%0D%0AZip: ${zip}%0D%0AMessage: ${message}`;
    
    window.location.href = mailtoLink;
  }
  