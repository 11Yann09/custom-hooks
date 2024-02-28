import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
// import useUpdateTitle from "../hooks/useUpdateTitle";
import TableUsers from "./TableUsers";

const MyContacts = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setIsLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const filterUsers = () => {
    const foundUsers = users.filter((users) => {
      return Object.values(users)
        .join("")
        .toLowerCase()
        .includes(search.toLowerCase());
    });

    setResultSearch(foundUsers);
  };

  useEffect(() => {
    if (search !== "") {
      // Filter
      filterUsers();
    } else {
      setResultSearch([]);
    }
  }, [search]);

  // Custom Hook
  // useUpdateTitle(search);

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

      {resultSearch.length === 0 && search !== "" ? (
        msgDisplay("Pas de résultat !", "red")
      ) : search === "" ? (
        msgDisplay("Veuillez effectuer une recherche !", "green")
      ) : (
        //search === "" ? null
        <TableUsers dataArray={resultSearch} />
      )}
    </>
  );
};

export default MyContacts;
