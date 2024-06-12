function displayDate(){
    let date = new Date()
 date = date.toString().split(" ")
document.querySelector( "#date" ).innerHTML = date[1] + " " +  date[2] + " " + date[3]
}

window.onload = function(){
    displayDate()
}
let ListContainer = document.getElementById('List')
let inputBox = document.getElementById('box')

function addTask(){
    if(inputBox.value ===''){
        alert('Add Your Task')
    }
    else {
        let task = document.createElement('li')
        task.textContent = inputBox.value
        ListContainer.appendChild(task)

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span)
    }
    inputBox.value =''
    saveDate()
}
ListContainer.addEventListener('click',(el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked')
        saveDate()
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()
        saveDate()
    }
})
function saveDate(){
    localStorage.setItem("tasks",ListContainer.innerHTML)
}
function showData(){
    ListContainer.innerHTML=localStorage.getItem('tasks')

}
showData()