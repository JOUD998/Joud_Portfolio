

(function () {
    emailjs.init('');  // Replace with your actual User ID
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Prepare the email parameters
    var params = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Send the email using EmailJS
    emailjs.send('', '', params)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            document.querySelector('.sent-message').innerHTML = 'Your message has been sent. Thank you!';

        }, function (error) {
            console.log('FAILED...', error);
            document.querySelector('.error-message').innerHTML = 'Failed to send message. Please try again later.';
            alert('Failed to send message.');
        });
});
