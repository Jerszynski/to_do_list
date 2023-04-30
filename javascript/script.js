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
  ];

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li>${task.content}</li>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
  };

  const addNewTask = (addTaskButtonElement) => {
    tasks.push({ content: addTaskButtonElement });

    render();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const addTaskButtonElement = document
      .querySelector(".js-addTaskInput")
      .value.trim();

    if (addTaskButtonElement === "") {
      return;
    }

    addNewTask(addTaskButtonElement);
  };

  const init = () => {
    render();

    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
