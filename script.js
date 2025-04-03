const task = document.getElementById("task");
const listcontainer = document.getElementById("list");
// const list = document.getElementById("list");

function addTask() {
    if (task.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = task.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = 'X';
        li.appendChild(span);
    }
    task.value = '';
    saveData();
}

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem('data');
}

showTask();
