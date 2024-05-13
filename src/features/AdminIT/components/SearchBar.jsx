import React from "react";
import style from "./SearchBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ icon, border }) {
  return (
    <div style={border ?? border}>
      {icon === undefined || icon === false ? null : (
        <div>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      )}
      <input
        type="search"
        placeholder="Search Here"
        className={style.searchBar}
      />
    </div>
  );
}

export default SearchBar;
