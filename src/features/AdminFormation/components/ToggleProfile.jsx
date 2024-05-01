import style from "./ToggleProfile.module.css";
import { useState, useEffect } from "react";

export default function ToggleProfile() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.container}>
      <h3 className={style.active}>
        <a
          href="#section1"
          className={activeSection === "section1" ? "active" : ""}
        >
          Profile
        </a>
      </h3>
      <h3>
        <a
          href="#section2"
          className={activeSection === "section2" ? "active" : ""}
        >
          Application
        </a>
      </h3>
    </div>
  );
}
