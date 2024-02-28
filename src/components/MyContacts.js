import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
// import useUpdateTitle from "../hooks/useUpdateTitle";
import TableUsers from "./TableUsers";
import useFetch from "../hooks/useFetch";

const MyContacts = () => {
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  // Custom hook
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const filterUsers = () => {
    const foundUsers = data.filter((user) => {
      return Object.values(user)
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
