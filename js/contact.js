(function () {
    publicKey: "Lsmh7Vgixxib0k5x7"
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");
const sendBtn = document.querySelector(".contact-btn");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    sendBtn.innerHTML = "Sending...";
    sendBtn.disabled = true;

    emailjs.sendForm(
      "jasmen-qainleh",
      "template_vrqih4e",
      this
    )
    .then(() => {
      status.textContent = "Message sent successfully!";
      status.style.color = "green";

      form.reset();
    })
.catch((error) => {
  console.log(error);
  status.textContent = error.text || "Failed to send";
});

    .finally(() => {
      sendBtn.innerHTML = "Send Message";
      sendBtn.disabled = false;
    });
  });
}