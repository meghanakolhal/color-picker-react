 import { useState } from "react";
import InputClr from "../InputClr/InputClr";
import Button from "../Button/Button";
import styles from "./Display.module.css";
import ClrBtns from "../ClrBtns/ClrBtns";
import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";

const Display = () => {
  const [inpClr, setInpClr] = useState("");
  const [putClr, setPutClr] = useState(["red", "brown", "yellow", "maroon"]);
  const [color, setColor] = useState("lightcyan");
  const arrOfClrs = [
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "greenlime",
    "olive",
    "yellow",
    "green",
    "navy",
    "blue",
    "teal",
    "aqua",
    "aliceblue",
    "antiquewhite",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "balnchedalmond",
    "bluevoilet",
    "brown",
    "burlywood",
    "cadetblue",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgrey",
    "darkgreen",
    "darkgray",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategrey",
    "darkslategray",
    "darkturquoise",
    "darkvoilet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "oldlace",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "whitesmoke",
    "yellowgreen",
  ];
  // console.log(putClr)
  const clrNameHandler = (str) => {
    setInpClr(str);
  };

  const btnClickHandler = () => {
    putClr.map((el) => {
      if (el == inpClr) {
        alert("clr has already been added");
        setInpClr("");
      }
    });
    if (inpClr.startsWith("#")) {
      setPutClr([...putClr, inpClr]);
      setColor(inpClr);
      setInpClr("");
    } else {
      const strname = inpClr.split(" ").join("").toLowerCase();
      arrOfClrs.map((ele) => {
        if (ele == strname) {
          // debugger;
          // console.log(strname)
          setPutClr([...putClr, strname]);
          // console.log(putClr)
          setColor(strname);
          setInpClr("");
        }
      });
    }
  };
  const swapOnClick = (finalIndex) => {
    const clickedClrs = [...putClr];
    setColor(clickedClrs.splice(finalIndex, 1));
  };

  const styleChange = { background: `${color}` };
  const enterKeyHandler=(e)=>{
    // console.log(e.key)
    if (e.key=="Enter"){
      // console.log('pressed')
      btnClickHandler();
    }
  }
  
  return (
    <>
      <AppHeader />
      <InputClr
        empMsg={inpClr}
        clrNameHandler={clrNameHandler}
        enterHandler={enterKeyHandler}
      />
      <Button btnClicked={btnClickHandler} isDisabled={inpClr.length===0} />
      <div className={styles.container}>
        <div className={styles.displayBox} style={styleChange}></div>
      </div>
      <ClrBtns putClr={putClr} swapOnClick={swapOnClick} />
      <AppFooter styles={{ color: "purple" }} />
    </>
  );
};
export default Display;
