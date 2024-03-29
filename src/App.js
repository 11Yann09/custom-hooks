import "./App.css";
import Articles from "./components/Articles";
import NewsLetter from "./components/NewsLetter";
import NameFields from "./components/NameFields";

const App = () => {
  return (
    <div className="App">
      <NewsLetter />
      <form>
        <NameFields />
      </form>
      <Articles />
      <Articles />
      <Articles />
      <NewsLetter />
    </div>
  );
};

export default App;

// import "./App.css";
// import { useState, useEffect, useTransition } from "react";
// import SearchInput from "./components/SearchInput";
// import TableUsers from "./components/TableUsers";
// import { fakeUsersGenerator } from "./data/users";
// // import BtnHello from "./components/BtnHello";

// const users = fakeUsersGenerator();

// const App = () => {
//   const [search, setSearch] = useState("");
//   const [resultSearch, setResultSearch] = useState([]);

//   const [isPending, startTransition] = useTransition();

//   // Custom hook
//   // const { data, isLoading } = useFetch(
//   //   "https://jsonplaceholder.typicode.com/users"
//   // );

//   const filterUsers = () => {
//     const foundUsers = users.filter((user) => {
//       return Object.values(user)
//         .join("")
//         .toLowerCase()
//         .includes(search.toLowerCase());
//     });
//     setResultSearch(foundUsers);
//   };

//   useEffect(() => {
//     if (search !== "") {
//       // Filter
//       startTransition(() => {
//         filterUsers();
//       });
//     } else {
//       setResultSearch([]);
//     }
//     // eslint-disable-next-line
//   }, [search]);

//   // Custom Hook
//   // useUpdateTitle(search);
//   const handleChange = (e) => {
//     setSearch(e.target.value);
//   };

//   // const msgDisplay = (msg, color) => {
//   //   return <p style={{ textAlign: "center", color: color }}>{msg}</p>;
//   // };

//   return (
//     <div className="App">
//       <h1>Mes Contacts</h1>
//       <p>Total: {users.length} membres</p>
//       {/* {isLoading ? (
//         msgDisplay("Veuillez patienter", "red")
//       ) : ( */}
//       <SearchInput searchStr={search} searchHanlder={handleChange} />
//       {/* )} */}
//       {
//         // resultSearch.length === 0 && search !== "" ? (
//         //   msgDisplay("Pas de résultat !", "red")
//         // ) :
//         // search === "" ? (
//         //   msgDisplay("Veuillez effectuer une recherche !", "green")
//         // ) : (
//         search === "" ? null : (
//           <TableUsers dataArray={resultSearch} notification={isPending} />
//         )
//         // )
//       }
//     </div>
//   );
// };

// export default App;
