document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let nameErr = "";
  let emailErr = "";
  let messageErr = "";

  if (name === "") {
    nameErr = "Name is required";
  } else {
    const nameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)?$/;
    if (!nameRegex.test(name)) {
      nameErr = "Please enter a valid name";
    }
  }

  if (email === "") {
    emailErr = "Email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailErr = "Please enter a valid email address";
    }
  }

  if (message === "") {
    messageErr = "Message is required";
  }

  document.getElementById("nameError").innerText = nameErr;
  document.getElementById("emailError").innerText = emailErr;
  document.getElementById("messageError").innerText = messageErr;

  if (nameErr || emailErr || messageErr) {
    return;
  }
  
  const msg = document.getElementById("submission");
  msg.style.display = "block";
  msg.innerText = "Form submitted successfully!";

  setTimeout(() => {
    msg.style.display = "none";
  }, 5000);
});
