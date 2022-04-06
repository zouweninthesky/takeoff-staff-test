import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks/redux";
import { searchChanged } from "../../../features/contacts/contacts-slice";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { search: searchState } = useAppSelector((state) => state.contacts);
  const [search, setSearch] = useState(searchState);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    dispatch(searchChanged(e.target.value));
  };

  return (
    <div className="input">
      <label htmlFor="search">Поиск</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
};

export default SearchBar;
