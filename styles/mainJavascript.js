
 function submission() {
    let name = document.forms["RegistrationForm"]["Name"];
    let email = document.forms["RegistrationForm"]["EMail"];
    let phone = document.forms["RegistrationForm"]["Telephone"];
    let address = document.forms["RegistrationForm"]["Address"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (address.value == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }

    if (email.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone.value == "") {
        window.alert(
          "Please enter your telephone number.");
        phone.focus();
        return false;
    }
    return true;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}