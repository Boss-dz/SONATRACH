import style from "./ParametreModule.module.css";
import Button from "./Button";

import { useEffect, useState } from "react";
export default function ParametreModule({
  toggleId,
  title,
  inputName1,
  value1,
  inputName2,
  value2,
  inputName3,
  value3,
  inputName4,
  value4,
  mainBtn,
  mainBtnStyle,
  secondBtn,
  secondBtnStyle,
  onSubmit,
}) {
  const [input1, setInput1] = useState(value1 || "");
  const [input2, setInput2] = useState(value2 || "");
  const [input3, setInput3] = useState(value3 || "");
  const [input4, setInput4] = useState(value4 || "");

  useEffect(() => {
    setInput1(value1);
    setInput2(value2);
    setInput3(value3);
    setInput4(value4);
  }, [value1, value2, value3, value4]);

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <div className={style.container} id={toggleId}>
      <h2 className={style.title}>{title}</h2>
      <form
        className={style.card}
        id="informations_personnel"
        onSubmit={onSubmit}
      >
        <div className={style.row}>
          <div className={style.col}>
            <label htmlFor={inputName1}>{inputName1}</label>
            <input
              type="text"
              id={inputName1}
              className={style.input}
              value={input1 || ""}
              onChange={handleInputChange(setInput1)}
            />
          </div>
          {inputName2 !== undefined && (
            <div className={style.col}>
              <label htmlFor={inputName2}>{inputName2}</label>
              <input
                type="text"
                id={inputName2}
                className={style.input}
                value={input2 || ""}
                onChange={handleInputChange(setInput2)}
              />
            </div>
          )}
        </div>
        {inputName3 !== undefined && (
          <div className={style.row}>
            <div className={style.col}>
              <label htmlFor={inputName3}>{inputName3}</label>
              <input
                type="text"
                id={inputName3}
                className={style.input}
                value={input3 || ""}
                onChange={handleInputChange(setInput3)}
              />
            </div>
            {inputName4 !== undefined && (
              <div className={style.col}>
                <label htmlFor={inputName4}>{inputName4}</label>
                <input
                  type="text"
                  id={inputName4}
                  className={style.input}
                  value={input4 || ""}
                  onChange={handleInputChange(setInput4)}
                />
              </div>
            )}
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          {secondBtn !== undefined && (
            <Button
              content={secondBtn}
              btnStyle={secondBtnStyle !== undefined && secondBtnStyle}
            />
          )}
          <Button
            content={mainBtn !== undefined ? mainBtn : "Enregistrer"}
            btnStyle={mainBtnStyle !== undefined && mainBtnStyle}
          />
        </div>
      </form>
    </div>
  );
}
