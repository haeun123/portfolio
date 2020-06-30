// SOURCE:
// https://www.w3schools.com/howto/howto_js_dropdown_sidenav.asp


//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function yesno(thecheckbox, thelabel, thenav) {
  var checkboxvar = document.getElementById("toggle");
  var labelvar = document.getElementById("label-toggle");
  var navvar = document.getElementById("nav");
  if (checkboxvar.checked == false){
    labelvar.innerHTML = "&#9776;";
    navvar.style.backgroundColor = 'transparent';
  }
  else {
    labelvar.innerHTML = "&#10005;";
    navvar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
  }
}
function highlight(x) {
  x.style.borderTop = "8px solid";
  /* need to figure out how to override inheritance of a:hover in css? */
}

function normalImg(x) {
  x.style.borderTop = "none";
}
