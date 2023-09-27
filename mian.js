//Handel Select
let select = document.querySelector("select");
let result = document.querySelector(".result");

select.addEventListener("change", function () {
  //Function To Empty  Elemeent
  clearElement();
  //Function To Create Elemeent
  createElement(select.value);
});

function createElement(val) {
  console.log(val);
  let div = document.createElement("div");
  div.classList = "box";
  let text = document.createTextNode(`Okay I Will Send By ${val}.`);
  div.appendChild(text);
  result.appendChild(div);
}

function clearElement() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}
