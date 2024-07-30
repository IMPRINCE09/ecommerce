// import React, { useEffect, useState } from "react";
// function Img_card() {
//   const [data, setdata] = useState(null);
//   const getallData = async () => {
//     try {
//       const fetchdata = await fetch("https://jsonplaceholder.org/posts");
//       const resp = await fetchdata.json();
//       setdata(resp);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getallData();
//   });
//   return (
//     <div>
//       <h2> data available</h2>
//       {data?.map((item) => {
//         return (
//           <div key={item.id}>
//             <h2>{item.id}</h2>
//             <h3>{item.title}</h3>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Img_card;

import React, { useState, useEffect } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savetodos = localStorage.getItem("todos");
    return savetodos ? JSON.parse(savetodos) : [];
  });

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const deleteTodo = tasks.filter((todo, todoIndex) => todoIndex !== index);
    setTasks(deleteTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <div>
        {tasks.map((task, index) => {
          return (
            <div className="flex" key={index}>
              <div className="">
                <h2>{task} </h2>
              </div>

              <button className="ml-5" onClick={() => handleDelete(index)}>
                <i class="fa-solid fa-eraser"></i>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Todo;
