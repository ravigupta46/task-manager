document.addEventListener("DOMContentLoaded", () => {
    const taskInput1 = document.getElementById("taskInput1");
    const addTaskButton1 = document.getElementById("addTaskButton1");
    const taskList1 = document.getElementById("taskList1");
  
    // Function to add a new task
    const addTask1 = () => {
      const taskText1 = taskInput.value.trim();
      if (taskText1 === "") return alert("Please enter a task!");
  
      const taskItem1 = document.createElement("li");
      taskItem1.className = "task-item1";
  
      const taskContent = document.createElement("span");
      taskContent.textContent = taskText1;
  
      const deleteButton1 = document.createElement("button");
      deleteButton1.textContent = "Delete";
      deleteButton1.onclick = () => taskList1.removeChild(taskItem1);
      taskItem1.appendChild(taskContent);
      taskItem1.appendChild(deleteButton1);
  
      taskList1.appendChild(taskItem1);
      taskInput1.value = ""; // Clear input
    };
  
    // Event listeners
    addTaskButton1.addEventListener("click", addTask1);
    taskInput1.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addTask1();
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const taskInput2 = document.getElementById("taskInput1");
    const addTaskButton2 = document.getElementById("addTaskButton1");
    const taskList2 = document.getElementById("taskList1");
  
    // Function to add a new task
    const addTask2 = () => {
      const taskText2 = taskInput.value.trim();
      if (taskText2 === "") return alert("Please enter a task!");
  
      const taskItem2 = document.createElement("li");
      taskItem2.className = "task-item1";
  
      const taskContent = document.createElement("span");
      taskContent.textContent = taskText2;
  
      const deleteButton2 = document.createElement("button");
      deleteButton2.textContent = "Delete";
      deleteButton2.onclick = () => taskList2.removeChild(taskItem2);
      taskItem2.appendChild(taskContent);
      taskItem2.appendChild(deleteButton1);
  
      taskList2.appendChild(taskItem2);
      taskInput2.value = ""; // Clear input
    };
  
    // Event listeners
    addTaskButton2.addEventListener("click", addTask2);
    taskInput2.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addTask2();
    });
  });
  