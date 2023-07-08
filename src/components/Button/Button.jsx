import styles from "./Button.module.css";
// eslint-disable-next-line react/prop-types
const Button = ({ btnClicked, isDisabled }) => {
  return (
    <button
      className={styles.addBtn}
      onClick={btnClicked}
      disabled={isDisabled}
    >
      Add Color
    </button>
  );
};
export default Button;
