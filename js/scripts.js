let taskForm = document.querySelector("form")
taskInput = document.getElementById("taskInput")
dateInput = document.getElementById("dateInput")
timeInput = document.getElementById("timeInput")
let task = JSON.parse(localStorage.getItem("tasks")) || []
console.log(task);

taskForm.addEventListener("submit", function(e){
    e.preventDefault()
    task.push({
        data: taskInput.value,
        date: dateInput.value,
        time: timeInput.value
    })
    updateStorage()
    displayTask()
})
let notesContainer = document.querySelector(".notesContainer")

function displayTask(){
    notesContainer.innerHTML = ""
    task.forEach(function(item){
    let taskDiv = document.createElement("div")
    taskDiv.classList.add("task-div")
    let taskDataDiv = document.createElement("div")
    let taskDataElement = document.createElement("p")
    let taskDateElement = document.createElement("p")
    let taskTime = document.createElement("p")
    let deleteTask = document.createElement("i")
    taskDataDiv.classList.add("task-data-div")
    taskDateElement.classList.add("date-element")
    taskTime.classList.add("time-element")
    deleteTask.classList.add("fa-brands")
    deleteTask.classList.add("fa-x-twitter")
    taskDataElement.classList.add("task-data")


    taskDataElement.innerText = item.data
    taskDateElement.innerText = item.date
    taskTime.innerText = item.time
    deleteTask.addEventListener("click", function(){
        CompletedTask(item.data)
    })

    taskDataDiv.appendChild(taskDataElement)
    taskDiv.appendChild(taskDataDiv)
    taskDiv.appendChild(taskDateElement)
    taskDiv.appendChild(taskTime)
    taskDiv.appendChild(deleteTask)
    notesContainer.appendChild(taskDiv)

    })
}
displayTask()

function updateStorage(){
    localStorage.setItem("tasks",JSON.stringify(task))
}

function CompletedTask (data){
    let taskInedx = task.findIndex(function(item){
        return item.data === data
    })
    task.splice(taskInedx,1)
    updateStorage()
    displayTask()

}

