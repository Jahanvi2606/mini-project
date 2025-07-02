# 🧠 JavaScript DOM Quiz + CRUD App

This is a simple, beginner-friendly project to practice **DOM manipulation**, **CRUD operations**, and **event handling** in vanilla JavaScript. It's a fun way to learn how the browser sees your HTML and how JavaScript interacts with it.

---

## 🚀 Features

- ✅ Add items to a list (Create)
- 📖 Display items (Read)
- ✏️ Edit items by double-clicking (Update)
- ❌ Remove items with a delete button (Delete)
- 🎯 Event handling using both inline and `addEventListener`
- 💡 Covers key DOM methods like `createElement`, `appendChild`, `remove`, `innerText`, and more

---

## 🛠️ Tech Used

- HTML
- CSS (basic styling)
- JavaScript (Vanilla JS)

- 
---

## 📚 JavaScript Functions Used

| Function/Property              | Purpose                                                                 |
|-------------------------------|-------------------------------------------------------------------------|
| `document.getElementById()`   | Selects an element by ID                                               |
| `document.createElement()`    | Creates a new DOM element (`li`, `button`, `span`, etc.)               |
| `element.appendChild()`       | Adds a child node (like button or text) to a parent element            |
| `element.remove()`            | Removes an element from the DOM                                        |
| `element.innerText`           | Gets/sets the visible text inside an element                           |
| `element.setAttribute()`      | Sets a specific attribute like `class`, `id`, or `type`                |
| `element.addEventListener()`  | Attaches an event listener like `click` or `dblclick`                  |
| `input.value`                 | Gets the value typed into an input field                               |
| `prompt()`                    | Displays a popup to take user input (used for editing list items)      |
| `trim()`                      | Removes extra spaces from the input string                             |

---

## 💡 How to Use

1. Clone or download this repo
2. Open `index.html` in your browser
3. Type an item and click **Add**
4. Double-click an item to **edit**, or click ❌ to **delete** it

---

## 🖼️ Preview

<img src="screenshot.png" alt="CRUD App Preview" width="500" />

---

## ✨ Example Use Case

```js
const li = document.createElement("li");               // Create a list item
const span = document.createElement("span");           // Create a span for text
span.innerText = "Learn DOM";                          // Set text
span.ondblclick = () => prompt("Edit item");           // Update on double-click
const delBtn = document.createElement("button");       // Create delete button
delBtn.innerText = "❌";
delBtn.onclick = () => li.remove();                    // Delete on click
li.appendChild(span);
li.appendChild(delBtn);
document.getElementById("itemList").appendChild(li);   // Add to DOM




