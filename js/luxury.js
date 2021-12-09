/*              Start JS code of luxury.html                 */

let rangeSlider = document.getElementById("rangeBudget");
let rangeAmount = document.getElementById("rangeAmount");

//console.log(rangeAmount.innerHTML = rangeSlider.value + " INR");
rangeAmount.innerHTML = rangeSlider.value + " INR";

rangeSlider.oninput = function() {
  console.log(rangeSlider.value);
  rangeAmount.innerHTML = this.value + " INR";
}

const modal = document.querySelector(".modal");
const submit = document.getElementById("btnSubmit");
const closeButton = document.querySelector(".close-button");
const resetButton = document.getElementById("btnReset");

function toggleModal() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(document.getElementById("txtFName").value != '' && 
       document.getElementById("txtLName").value != '' &&
       (document.getElementById("txtEmail").value != '' && document.getElementById("txtEmail").value.match(mailformat))){
            modal.classList.toggle("show-modal");
            //document.getElementById("divModal").style.display = "block";
       }
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

submit.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
resetButton.addEventListener("click", reset);

function reset() {
  //alert(123);
  document.getElementById("rangeBudget").value = 12000;
  document.getElementById("rangeAmount").innerHTML = 12000 + " INR";
}

/*              End JS code of luxury.html                 */