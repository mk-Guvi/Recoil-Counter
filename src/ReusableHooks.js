import React, { useEffect, useState } from "react";
import useFetch from "./recoil/useFetch";

const Re = () => {
  // const [tasks, setTask] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data) => setTask(data))
  //     .catch(console.error);
  // }, []);

  // const tasks=useFetch()
  const { tasks, isLoading, error } = useFetch();
  return (
    <div>
      {isLoading ? <p>{isLoading}</p> : null}
      {tasks.map((task, taskIndex) => {
        return <p key={taskIndex}>{task.title}</p>;
      })}
      {error?<pre>{JSON.stringify(error)}</pre>:null}
    </div>
  );
};

export default Re;
