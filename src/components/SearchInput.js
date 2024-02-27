import React from "react";

const SearchInput = ({ searcStr, searchHanlder }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Chercher ..."
        value={searcStr}
        onChange={searchHanlder}
      />
      <hr />
    </>
  );
};

export default SearchInput;
