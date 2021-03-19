import { useState, useEffect } from "react";
const useFetch = (url, config = {}) => {
  const [tasks, setTask] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch(url, config)
      .then((res) => res.json())
      .then((data) => {
        Array.isArray(data) ? setTask(data) : null;//this ensures that the data recieved is array or not
      })
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
