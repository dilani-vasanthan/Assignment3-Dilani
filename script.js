// nav functions
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }


// faq section

let answers = document.querySelectorAll(".accordion"); 
answers.forEach((event) => { 
  event.addEventListener("click", () => { 
    if (event.classList.contains("active")) { 
      event.classList.remove("active"); 
    } else { 
      event.classList.add("active"); 
    } 
  }); 
});

// js team

// IMAGE GALLERY


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// contact form
function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
      document.getElementById("resultMessage").innerHTML = "Please enter Name, Email, and Message.";
      return;
  }

  if (name.length > 15) {
      document.getElementById("resultMessage").innerHTML = "Enter a valid name (less than 15 characters).";
      return;
  }

  var emailRegex = /^[a-zA-Z0-9!#\$%&'\*\+\-\/=\?\^_`{\|}~]+(\.[a-zA-Z0-9!#\$%&'\*\+\-\/=\?\^_`{\|}~]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
  if (!emailRegex.test(email)) {
      document.getElementById("resultMessage").innerHTML = "Enter a valid email address.";
      return;
  }

  var phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
      document.getElementById("resultMessage").innerHTML = "Enter a valid 10-digit phone number.";
      return;
  }

  if (message.length < 2 || message.length > 120) {
      document.getElementById("resultMessage").innerHTML = "Message must be between 2 and 120 characters.";
      return;
  }

  document.getElementById("resultMessage").innerHTML = "Successfully Submitted";
}
// zoom funtion
let zoomed = false;

function zoomInOut(image) {
    zoomed = !zoomed;

    if (zoomed) {
        image.style.transform = 'scale(2.5)';
    } else {
        image.style.transform = 'scale(1.0)';
    }
}
// form
function subscribe() {
  const emailInput = document.getElementById('emailInput').value;

  // Simulate loading a new page (replace with actual page URL)
  window.location.href = 'https://example.com/new-page';

  // Uncomment the line below to simulate a 404 error
  window.location.href = 'https://example.com/non-existent-page';
}

