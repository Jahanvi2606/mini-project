function addItem() {
  const input = document.getElementById("itemInput");
  const value = input.value;
  
  if (value === "") return;

  const li = document.createElement("li");
  li.innerText = value;

  // Create Delete button
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.onclick = function () {
    li.remove(); // DELETE
  };

  li.appendChild(delBtn);
  document.getElementById("itemList").appendChild(li); // CREATE
  input.value = ""; // RESET input
}


li.ondblclick = function () {
  const newValue = prompt("Edit item:", li.innerText.replace("❌", "").trim());
  if (newValue) {
    li.firstChild.textContent = newValue;
  }
};
 
 