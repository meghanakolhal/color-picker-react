import styles from "./InputClr.module.css";
// eslint-disable-next-line react/prop-types
const InputClr = ({ clrNameHandler, empMsg }) => {
  const clrName = (e) => {
    // console.log(e.target.value.split(' ').join(''));
    clrNameHandler(e.target.value);
  };
  // let name =  "     Meghana       Kolhal       ";
  // console.log(name.split(' ').join('').toLowerCase())
  return (
    <>
      <input
        type="text"
        value={empMsg}
        className={styles.inp}
        onChange={clrName}
      />
    </>
  );
};
export default InputClr;
