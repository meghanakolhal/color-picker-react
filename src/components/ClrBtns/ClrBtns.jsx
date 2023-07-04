// import { useState } from "react";
import ColorBtn from "../ColorBtn/ColorBtn";
import styles from "./ClrBtns.module.css";
// eslint-disable-next-line react/prop-types
const ClrBtns = ({ putClr, swapOnClick }) => {
//   const [change, setChange] = useState("");

  // eslint-disable-next-line react/prop-types
  const listClrs = putClr.map((clr, index) => {
    return (
      <ColorBtn
        key={index}
        style={{ background: `${clr}`, border: `${clr}` }}
        clrBtnClicked={() => swapOnClick(index)}
      />
    );
  });
  return (
    <div className={styles.clrBtns}>
      {/* <ColorBtn style={{background:"red",border:"red"}} clrBtn={clrBtnHandler} /> */}
      {listClrs}
    </div>
  );
};
export default ClrBtns;
