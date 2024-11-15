document.getElementById("add-btn").addEventListener("click", addItem);      


function addItem() {
        let input = document.getElementById("todo-input");
        let itemText = input.value.trim();
    
        if (itemText === "") {
            alert("Please enter an item for the list !");
            return;
        }

     let li = document.createElement("li");
        li.textContent = itemText;



li.addEventListener("click", function () {
    li.classList.toggle("done");
});


let deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.classList.add("delete-btn");

deleteButton.addEventListener("click", function () {
    const confirmed = confirm("Are you sure you want to delete this ?");
    if (confirmed) {
        li.remove();
    }
});

li.appendChild(deleteButton);
    document.getElementById("todo-list").appendChild(li);

    // Clear the input field
    input.value = "";
}