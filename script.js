
const rsvpForm = document.getElementById("rsvpForm");
const responseMessage = document.getElementById("responseMessage");

rsvpForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const guestName = document.getElementById("guestName").value;
    const attendance = document.getElementById("attendance").value;

    responseMessage.textContent = "Sending your RSVP...";

    const formData = new FormData(rsvpForm);

    fetch("https://formsubmit.co/ajax/leighraebooysen9@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success === "true" || data.success === true) {
            responseMessage.textContent =
                `Thank you, ${guestName}! Your RSVP has been sent.`;

            rsvpForm.reset();
        } else {
            responseMessage.textContent =
                "Sorry, your RSVP could not be sent. Please try again.";
        }
    })
    .catch(() => {
        responseMessage.textContent =
            "Something went wrong. Please try again.";
    });
});

