{
  const tasks = [
    {
      content: "Zadanie 1",
      done: false,
    },
    {
      content: "Zadanie 2",
      done: true,
    },
    {
      content: "Zadanie 3",
      done: false,
    },
  ];

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const addNewTask = (addTaskInputElement) => {
    tasks.push({ content: addTaskInputElement });

    render();
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
      <li class="${task.done ? "task__item--done" : "task__item"}">
      <button>done</button>
      ${task.content}
      <button class="js-delete">delete</button>
        </li>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    const deleteButtonElement = document.querySelectorAll(".js-delete");

    deleteButtonElement.forEach((deleteButtonElement, index) => {
      deleteButtonElement.addEventListener("click", () => {
        removeTask(index);
      });
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const addTaskInputElement = document
      .querySelector(".js-addTaskInput")
      .value.trim();

    if (addTaskInputElement === "") {
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
