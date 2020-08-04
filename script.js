var addItemBtn = document.querySelector(".Add-item");
var taskBox = document.getElementsByClassName("taskBox");
var taskInput = document.getElementsByClassName("taskInput");

addItemBtn.addEventListener("click",function(){
    
    taskBox.item(0).classList.remove("delete");
    taskInput.item(0).style.display = "initial";
});


//for the delete :
/*
var deleteBtn = document.getElementsByClassName("deleteBtn");
deleteBtn.addEventListener("click",function(){
    taskBox.item(0).className += "delete";
    taskInput.item(0).style.display = "none";
})
*/

//how to remove btns border ???