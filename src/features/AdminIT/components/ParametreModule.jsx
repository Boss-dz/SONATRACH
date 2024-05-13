import style from "./ParametreModule.module.css";
import Button from "./Button";
export default function ParametreModule({
  toggleId,
  title,
  inputName1,
  inputName2,
  inputName3,
  inputName4,
  mainBtn,
  mainBtnStyle,
  secondBtn,
  secondBtnStyle,
}) {
  return (
    <div className={style.container} id={toggleId}>
      <h2 className={style.title}>{title}</h2>
      <form className={style.card} id="informations_personnel">
        <div className={style.row}>
          <div className={style.col}>
            <label htmlFor={inputName1}>{inputName1}</label>
            <input type="text" id={inputName1} className={style.input} />
          </div>
          {inputName2 !== undefined && (
            <div className={style.col}>
              <label htmlFor={inputName2}>{inputName2}</label>
              <input type="text" id={inputName2} />
            </div>
          )}
        </div>
        {inputName3 !== undefined && (
          <div className={style.row}>
            <div className={style.col}>
              <label htmlFor={inputName3}>{inputName3}</label>
              <input type="text" id={inputName3} />
            </div>
            {inputName4 !== undefined && (
              <div className={style.col}>
                <label htmlFor={inputName4}>{inputName4}</label>
                <input type="text" id={inputName4} />
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
