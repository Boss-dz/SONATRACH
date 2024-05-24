import style from "./FormModule.module.css";
import Button from "./Button";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FormModule({
  title,
  inputs,
  mainBtn,
  mainBtnStyle,
  mainBtnOnClick,
  secondBtn,
  secondBtnStyle,
  secondBtnOnClick,
  inputIsActif,
}) {
  const [usersRoles, setUsersRoles] = useState([]);
  const [formData, setFormData] = useState({
    password: "",
    nom: "",
    prenom: "",
    fonction: "",
    structureID: "1",
    email: "",
    role_default: "",
  });
  const [structures, setStructures] = useState({});
  useEffect(() => {
    const fetchStructures = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/structure");
        // const structureArray = Array.from(
        //   new Set(response.data.map((structure) => structure.nom_structure))
        // );
        setStructures(response.data);
      } catch (error) {
        console.error("Error fetching formations:", error);
      }
    };
    fetchStructures();
  }, []);

  useEffect(() => {
    setFormData((prev) => {
      return { ...prev, fonction: inputs[1][0].options[0] };
    });
  }, [inputs[1][0].options[0]]);
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleStructureChange = (e) => {
    //seach for the structureID of e.target.value
    const structureID = structures.find(
      (structure) => structure.nom_structure === e.target.value
    ).structureID;
    setFormData((prevData) => ({ ...prevData, structureID }));
  };

  const handleRolesChange = (e) => {
    const { value, checked } = e.target;

    setUsersRoles((prevData) => {
      const roles = checked
        ? [...prevData, value]
        : prevData.filter((role) => role !== value);
      console.log(roles);
      return roles;
    });
    setFormData((prev) => {
      return { ...prev, role_default: usersRoles[0] };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/newUser", {
        formData,
        usersRoles,
      });
      alert("User added successfully");
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Error adding user");
    }
  };

  return (
    <div className={style.container}>
      {title && <h2 className={style.title}>{title}</h2>}
      <form
        className={style.card}
        id="informations_personnel"
        onSubmit={handleSubmit}
      >
        {inputs.map((input, index) => (
          <div className={style.row} key={index}>
            {input.map((field) => (
              <div className={style.col} key={field.name}>
                <label htmlFor={field.label}>{field.label}</label>
                {field.type === "select" && field.name === "fonction" ? (
                  <>
                    <input
                      list="fonction-options"
                      className={style.input}
                      name={field.name}
                      // value={formData[field.name]}
                      onChange={handleChange}
                      disabled={inputIsActif !== undefined && !inputIsActif}
                    />
                    <datalist id="fonction-options">
                      {field.options.map(
                        (option, index) =>
                          option !== "" && (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          )
                      )}
                    </datalist>
                  </>
                ) : field.type === "select" ? (
                  <select
                    className={style.input}
                    name={field.name}
                    value={formData[field.name]}
                    defaultValue={field.options[0]}
                    onChange={
                      field.optionsType !== undefined &&
                      field.optionsType === "structures"
                        ? handleStructureChange
                        : handleChange
                    }
                    disabled={inputIsActif !== undefined && !inputIsActif}
                  >
                    {field.options.map(
                      (option, index) =>
                        option !== "" && (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        )
                    )}
                  </select>
                ) : field.type === "custom" ? (
                  React.cloneElement(field.component, {
                    onChange:
                      field.optionsType !== undefined &&
                      field.optionsType === "roles"
                        ? handleRolesChange
                        : null,
                  })
                ) : (
                  <input
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    type={field.type}
                    id={field.label}
                    className={style.input}
                    disabled={inputIsActif !== undefined && !inputIsActif}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "10px",
          }}
        >
          <Button
            content={mainBtn || "Enregistrer"}
            btnStyle={mainBtnStyle !== undefined && mainBtnStyle}
            onClick={mainBtnOnClick || null}
          />
          {secondBtn && (
            <Button
              content={secondBtn}
              btnStyle={secondBtnStyle !== undefined && secondBtnStyle}
              onClick={secondBtnOnClick || null}
            />
          )}
        </div>
      </form>
    </div>
  );
}
