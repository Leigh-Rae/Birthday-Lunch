const rsvpForm = document.getElementById("rsvpForm");
const responseMessage = document.getElementById("responseMessage");

rsvpForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const guestName = document.getElementById("guestName").value;

    responseMessage.textContent = "Sending your RSVP...";

    const formData = new FormData(rsvpForm);

    // FIX: Added 'ajax/' back into the URL
    fetch("https://formsubmit.co/ajax/fostermonique01@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success === "true" || data.success === true) {
            responseMessage.textContent = `Thank you, ${guestName}! Your RSVP has been sent.`;
            rsvpForm.reset();
        } else {
            responseMessage.textContent = "Sorry, your RSVP could not be sent. Please try again.";
        }
    })
    .catch(() => {
        responseMessage.textContent = "Something went wrong. Please try again.";
    });
});