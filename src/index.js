
// document.addEventListener("DOMContentLoaded", () => {
//   const taskList = new TaskList();
// });

const formEl = document.querySelector('#create-task-form')
const inputEl = document.querySelector('#new-task-description')
const tasksEl = document.querySelector('#tasks')
const submitButtonEl = document.querySelector('#submit-toggle')

let state = {
  editing: null,
  user : {
    name: '',
    email: ''
  }
}


formEl.addEventListener('submit', handleFormSubmit)



function handleFormSubmit(event) {
  event.preventDefault()

if (state.editing === null) {
  //new task
  const taskName = inputEl.value

  const newTask = document.createElement('li')
  const editTaskButton = document.createElement('button')

  newTask.innerHTML = `<span>${taskName}</span>`
  editTaskButton.innerText = 'Edit'
  editTaskButton.addEventListener('click', handleEdit)

  newTask.appendChild(editTaskButton)
  tasksEl.appendChild(newTask)
} else {
  // edit
  state.editing.firstChild.innerText = inputEl.value

  submitButtonEl.value = "Create New Task"

  state.editing = null
}

inputEl.value = ''

}

function handleEdit(event) {
  const relatedTaskLi = event.target.parentNode

  inputEl.value = relatedTaskLi.firstChild.innerText
  submitButtonEl.value = "Update"

  state.editing = relatedTaskLi

}
