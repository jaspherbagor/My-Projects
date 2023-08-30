const passwordInput = document.getElementById("password");
const toggleVisibility = document.getElementById("toggleVisibility");

    toggleVisibility.addEventListener("change", function() {
      if (this.checked) {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    });





