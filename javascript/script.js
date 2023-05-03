{
  const tasks = [];

  const toggleDoneTask = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const addNewTask = (newTaskContent) => {
    tasks.push({ content: newTaskContent });

    render();
  };

  const bindsEvents = () => {
    const deleteButtonElement = document.querySelectorAll(".js-delete");

    deleteButtonElement.forEach((deleteButtonElement, index) => {
      deleteButtonElement.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtonElement = document.querySelectorAll(".js-done");

    toggleDoneButtonElement.forEach((toggleDoneButtonElement, index) => {
      toggleDoneButtonElement.addEventListener("click", () => {
        toggleDoneTask(index);
      });
    });
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="tasks__item">
          <button class="tasks__doneButton js-done">
            ${task.done ? "✔" : ""}
          </button>
          <span class="tasks__content  ${
            task.done ? "tasks__content--done" : ""
          }">
            ${task.content}
          </span>
          <button class="tasks__deleteButton js-delete">✖</button>
        </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindsEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-addTaskInput");
    const newTaskContent = newTaskElement.value.trim();

    const errorMessageElement = document.querySelector(".js-errorMessage");
    if (newTaskContent.includes("<") && newTaskContent.includes(">")) {
      errorMessageElement.innerHTML = 'Invalid characters: "< , >" ';
      return;
    }

    if (newTaskContent !== "") {
      addNewTask(newTaskContent);
      newTaskElement.value = "";
      errorMessageElement.innerHTML = "";
      return;
    }

    newTaskElement.focus();
  };

  const init = () => {
    render();

    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
