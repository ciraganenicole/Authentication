const form = document.getElementById("form");
const submit = (e) => {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (email.value !== "ciraganenicole@gmail.com" || password.value !== "2020") {
    alert("Incorrect credentials");
    return false;
  } else {
    window.location.href = "/login.html";
    form.reset();
  }
};

form.addEventListener("submit", submit);