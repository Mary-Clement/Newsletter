document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");
  const successMessage = document.getElementById("success-message");
  const dismissButton = document.getElementById("dismiss-button");
  const mainContainer = document.querySelector(".main-container");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    successMessage.classList.remove("hidden");
    mainContainer.classList.add("blurred");
  });

  dismissButton.addEventListener("click", function () {
   
    successMessage.classList.add("hidden");
    mainContainer.classList.remove("blurred");
  });
});
