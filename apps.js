let container = document.getElementById("container");
let inputfield = document.getElementById("inputfield");
let button = document.getElementById("button");

button.addEventListener("click", function () {
  var p = document.createElement("p");

  if (inputfield.value == "" || inputfield.value == " ") {
    alert("Input Cannot be empty");
  } else {
    container.appendChild(p);
    p.className = "active";
    p.innerHTML = inputfield.value;
  }

  inputfield.value = " ";
  p.addEventListener("click", function () {
    p.style.textDecoration = "line-through";
    p.style.backgroundColor = "#E8BD0D";
    p.style.color = "black";
  });
  p.addEventListener("dblclick", function () {
    container.removeChild(p);
  });
});
