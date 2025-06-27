const form = document.getElementById("contact-form");
const email = document.querySelector(".contact-email");
const output = document.querySelector(".output");
const inputs = document.querySelectorAll(".contact-input");
const textareas = document.querySelectorAll(".contact-message");

form.addEventListener("submit", (e) =>{
    handleSubmitForm(e);
})

function handleSubmitForm(e){
    e.preventDefault();
    if(!testEmail(email)) return;

    inputs.forEach((input, _) => {
        input.value = "";
    });

    textareas.forEach((textarea) => textarea.style.height = "100px")
}

function testEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const ok = regex.exec(email.value);

    output.textContent = ok
        ? `Vielen Dank für Ihre Nachricht! Derzeit haben wir leider Betriebsferien, daher werden wir Ihnen nicht antworten können.`
        : `Ihre E-Mail ist nicht gültig, bitte geben sie eine gültige E-Mail ein!`;
    
    return ok
}

textareas.forEach(function(textarea) {
  textarea.style.height = textarea.scrollHeight + "px";
  textarea.style.overflowY = "hidden";

  textarea.addEventListener("input", function() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
});