import styles from "./Button.module.css";
// eslint-disable-next-line react/prop-types
const Button = ({ btnClicked }) => {
  return (
    <button className={styles.addBtn} onClick={btnClicked}>
      Add Color
    </button>
  );
};
export default Button;
