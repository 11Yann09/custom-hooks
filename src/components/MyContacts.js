import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import useUpdateTitle from "../hooks/useUpdateTitle";
import TableUsers from "./TableUsers";

const MyContacts = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setIsLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

  // Custom Hook
  useUpdateTitle(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const msgDisplay = (msg, color) => {
    return <p style={{ textAlign: "center", color: color }}>{msg}</p>;
  };

  return (
    <>
      {isLoading ? (
        msgDisplay("Veuillez patienter", "red")
      ) : (
        <SearchInput searchStr={search} searchHanlder={handleChange} />
      )}

      {<TableUsers dataArray={users} />}
    </>
  );
};

export default MyContacts;
