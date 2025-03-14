 const task = document.getElementById(task)
 const listcontainer = document.getElementById(list-container)
//  const list = document.getElementById(list)

function addTask(){
    if(task.value === ''){
        alert("You must write somthing!") 
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = task.value;
        listcontainer.appendChild(li)
         
    }
}