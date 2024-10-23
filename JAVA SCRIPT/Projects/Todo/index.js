let todo_array = JSON.parse(localStorage.getItem("todo_list")) || [];

// To get element
// let add_button = document.getElementById("add_button");
let add_button = document.querySelector("#add_button");

add_button.addEventListener("click", addTodo);

function addTodo() {
  let todo_input_value = document.querySelector("#todo_input").value;
  let todo_date_value = document.querySelector("#todo_date").value;
  let new_items = new AddItems(todo_input_value, todo_date_value);
  todo_array.push(new_items);
  localStorage.setItem("todo_list", JSON.stringify(todo_array));
  display();
  document.querySelector("#todo_input").value = "";
  document.querySelector("#todo_date").value = "";
}

function AddItems(todo_input_value, todo_date_value) {
  this.item = todo_input_value;
  this.date = todo_date_value;
}

function display() {
  let todo_list = document.querySelector("#todo_list");
  todo_list.innerHTML = null;
  todo_array.forEach(({ item, date }, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "items");
    let span1 = document.createElement("span");
    span1.textContent = item;
    let span2 = document.createElement("span");
    span2.textContent = date;
    let remove_button = document.createElement("button");
    remove_button.setAttribute("class", "remove_button");
    remove_button.textContent = "Remove";
    remove_button.addEventListener("click", () => {
      remove(index);
    });
    div.append(span1, span2, remove_button);
    todo_list.append(div);
  });
}

function remove(index) {
  todo_array.splice(index, 1);
  localStorage.setItem("todo_list", JSON.stringify(todo_array));
  display();
}