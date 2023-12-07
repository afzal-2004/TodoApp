let toDoList = [];
// let  storedToDoList = localStorage.getItem('toDoList');
// if (storedToDoList) {
//   toDoList = JSON.parse(storedToDoList);
// }


displayItems();

function addTodo() {
  let input = document.querySelector("#Enter-Todo");
  let date = document.querySelector("#todo-Date");

  let toDo = input.value;
  let Duedate = date.value;

  toDoList.push({items:toDo,dueDate:Duedate});
  input.value = "";
  date.value='';
  // localStorage.setItem('todolist',JSON.stringify(toDoList));
  displayItems();
}
 
function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";

  for (let i = 0; i < toDoList.length; i++) {
    let toDoItem=toDoList[i].items;
    let dueDate=toDoList[i].dueDate;
    newHtml += `
        
        <span><h3> ${toDoItem}</h3></span> 
        <span> <h3>${dueDate}</h3></span> 

        <button    class='delete-btn'   onclick="deletItems(${i})">Delete</button>  
        
        `;
  }
  containerElement.innerHTML = newHtml;

}
function deletItems(index)
{
  toDoList.splice(index,1);
//  localStorage.setItem('toDoList', JSON.stringify(toDoList));
  displayItems();

}


