import style from "./FormModule.module.css";
import Button from "./Button";
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
  return (
    <div className={style.container}>
      {title !== undefined && <h2 className={style.title}>{title}</h2>}
      <form className={style.card} id="informations_personnel">
        {inputs.map((input, index) => (
          <div className={style.row} key={index}>
            <div className={style.col}>
              <label htmlFor={input[0].label}>{input[0].label}</label>
              {input[0].type === "select" ? (
                <select
                  className={style.input}
                  disabled={inputIsActif !== undefined && !inputIsActif}
                >
                  {input[0].options.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              ) : input[0].type === "custom" ? (
                input[0].component
              ) : (
                <input
                  disabled={inputIsActif !== undefined && !inputIsActif}
                  type={input[0].type}
                  id={input[0].label}
                  className={
                    input[1] !== undefined ? style.input : style.oneColInput
                  }
                />
              )}
            </div>
            {input[1] !== undefined && (
              <div className={style.col}>
                <label htmlFor={input[1].label}>{input[1].label}</label>
                {input[1].type === "select" ? (
                  <select
                    className={style.input}
                    disabled={inputIsActif !== undefined && !inputIsActif}
                  >
                    {input[1].options.map((option) => (
                      <option value={option}>{option}</option>
                    ))}
                  </select>
                ) : input[1].type === "custom" ? (
                  input[1].component
                ) : (
                  <input
                    disabled={inputIsActif !== undefined && !inputIsActif}
                    type={input[1].type}
                    id={input[1].label}
                    className={style.input}
                  />
                )}
              </div>
            )}
          </div>
        ))}

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
              onClick={secondBtnOnClick !== undefined && secondBtnOnClick}
            />
          )}
          <Button
            content={mainBtn !== undefined ? mainBtn : "Enregistrer"}
            btnStyle={mainBtnStyle !== undefined && mainBtnStyle}
            onClick={mainBtnOnClick !== undefined && mainBtnOnClick}
          />
        </div>
      </form>
    </div>
  );
}
