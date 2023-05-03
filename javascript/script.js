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

  const addNewTask = (addTaskInputElement) => {
    tasks.push({ content: addTaskInputElement });

    resetAndFocusInput();
    render();
  };

  const resetAndFocusInput = () => {
    document.querySelector(".js-addTaskInput").value = "";
    document.querySelector(".js-addTaskInput").focus();
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
        <button class="tasks__doneButton js-done">${
          task.done ? "✔" : ""
        }</button>
        <span class="tasks__content  ${
          task.done ? "tasks__content--done" : ""
        }">${task.content}</span>
        <button class="tasks__deleteButton js-delete">✖</button>
      </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindsEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const addTaskInputElement = document
      .querySelector(".js-addTaskInput")
      .value.trim();

    if (addTaskInputElement === "" || addTaskInputElement === " ") {
      document.querySelector(".js-addTaskInput").focus();
      return;
    }

    addNewTask(addTaskInputElement);
  };

  const init = () => {
    render();

    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
