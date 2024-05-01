import React from "react";

import style from "./AddButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddButton() {
  return (
    <button className={style.addBtn}>
      <FontAwesomeIcon icon={faPlus} size="2x" className="fa-fw" />
    </button>
  );
}

export default AddButton;
