function generateWhatsAppLink() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const encodedMessage = encodeURIComponent(` Name${name},Massage ${message} , Email${email} ,Massage${message}`);
    const whatsappLink = `https://wa.me/7464812303?text=${encodedMessage}`;
    window.location.href = whatsappLink;
  }