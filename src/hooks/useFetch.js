import { useState, useEffect, useDebugValue } from "react";

const useFetch = (fetchUrl) => {
  // State
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Array
  // cibler un user dans le fetch de data via la méthode useDebugValue
  // useDebugValue(["User 6", data[5]]);
  // useDebugValue(JSON.stringify(data));
  // Si je suis en mode dev et que React-dev-tools est ouvert pour inspecter le custom hook!
  useDebugValue(data, (val) => {
    alert("useDebugValue lancé");
    return JSON.stringify(val);
  });

  // Fetch async / await
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          throw Error("Pas de datas");
        }

        const fetchedData = await response.json();
        setData(fetchedData);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [fetchUrl]);

  // Fetch
  // useEffect(() => {
  //   fetch(fetchUrl)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => console.log(error.message));
  // }, [fetchUrl]);
  // Return
  return { data, isLoading };
};

export default useFetch;
