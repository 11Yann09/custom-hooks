import React from "react";

const SearchInput = ({ searcStr, searchHanlder }) => {
  return (
    <>
      <input
        id="search"
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
