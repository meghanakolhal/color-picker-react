import styles from "./ColorBtn.module.css";
// eslint-disable-next-line react/prop-types
const ColorBtn = ({ style, clrBtnClicked }) => {
  return (
    <button
      className={styles.clrBtn}
      style={style}
      onClick={clrBtnClicked}
    ></button>
  );
};
export default ColorBtn;
