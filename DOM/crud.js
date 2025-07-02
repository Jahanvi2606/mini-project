function addItem() {
  const input = document.getElementById("itemInput");
  const value = input.value.trim();
  if (value === "") return;

  const li = document.createElement("li");

  // Create a span to hold the text separately from the delete button
  const textSpan = document.createElement("span");
  textSpan.innerText = value;

  // Allow double-click to edit
  textSpan.ondblclick = function () {
    const newValue = prompt("Edit item:", textSpan.innerText);
    if (newValue) {
      textSpan.innerText = newValue;
    }
  };

  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(textSpan);
  li.appendChild(delBtn);
  document.getElementById("itemList").appendChild(li);

  input.value = ""; // clear input
}
