import React, { useEffect, useState } from "react";

const Re = () => {
  const [tasks, setTask] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTask(data))
      .catch(console.error);
  }, []);
  return (
    <div>
      {tasks.map((task, taskIndex) => {
        return <p key={taskIndex}>{task.title}</p>;
      })}
    </div>
  );
};

export default Re;
