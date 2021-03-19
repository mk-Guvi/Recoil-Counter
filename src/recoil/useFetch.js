import { useState, useEffect } from "react";
const useFetch = () => {
  const [tasks, setTask] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholdesr.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTask(data))
      .catch((e) => {
        console.error(e);
        setError(e);
      })
      .finally(setIsLoading(false));
  }, []);

  //
  return { tasks, isLoading, error }; //storing in object as we need multiple data
};

export default useFetch;
