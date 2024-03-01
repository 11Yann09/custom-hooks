const TableUsers = ({ dataArray, notification }) => {
  return (
    <table id="table">
      <thead>
        <tr>
          <th>Nom </th>
          <th>Nom Utilisateur</th>
          <th>Email</th>
          <th>Adresse</th>
        </tr>
      </thead>
      <tbody>
        {notification && (
          <tr>
            <td colSpan={4} style={{ color: "red" }}>
              Veuillez Patienter ...
            </td>
          </tr>
        )}
        {dataArray.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.address.street} {user.address.suite} {user.address.city}
                {user.address.zipcode}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

//Table useFetch
// const TableUsers = ({ dataArray }) => {
//   return (
//     <table id="table">
//       <thead>
//         <tr>
//           <th>Nom </th>
//           <th>Nom Utilisateur</th>
//           <th>Email</th>
//           <th>Adresse</th>
//         </tr>
//       </thead>
//       <tbody>
//         {dataArray.map(({ id, name, username, email, address }) => {
//           return (
//             <tr key={id}>
//               <td>{name}</td>
//               <td>{username}</td>
//               <td>{email}</td>
//               <td>
//                 {address.street} {address.suite} {address.city}
//                 {address.zipcode}
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

export default TableUsers;
