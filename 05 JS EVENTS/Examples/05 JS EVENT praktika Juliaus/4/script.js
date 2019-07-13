let ul = document.querySelector("ul");

let addButton = document.querySelector(".addButton");

console.log(addButton);

addButton.addEventListener("click", e => {
  let inputField = document.querySelector("input");
  let text = document.createTextNode(inputField.value);

  let checkBox = document.createElement("input");
  checkBox.classList.add("todoChk");
  checkBox.type = "checkbox";

  let label = document.createElement("label");
  label.appendChild(text);

  //label.appendChild(checkBox);
  //var text = document.createTextNode(inputField.value);
  //label.appendChild(text);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("todoDelBtn");
  deleteButton.textContent = "x";

  let li = document.createElement("li");
  li.classList.add("todoElement");
  li.appendChild(checkBox);
  li.appendChild(label);
  li.appendChild(deleteButton);
  ul.prepend(li);

  deleteButton.addEventListener("click", e => {
    ul.removeChild(li);
  });

  checkBox.addEventListener("click", (e) =>{
    if(e.target.checked === true){
      label.style.textDecoration = "line-through";
      label.style.color = "grey";
    }else{
      label.style.textDecoration = "none";
      label.style.color = "black";
    }
  });

});
