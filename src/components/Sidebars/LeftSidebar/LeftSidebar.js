import { useState, createContext } from "react";
import Icons from "./Icons";
import styles from "./LeftSidebar.module.css";

export const IconContext = createContext();

function LeftSidebar() {
  
    const [selectedIcon, setSelectdIcon] = useState(0);

  return (
    <IconContext.Provider value={selectedIcon}>
      <div className={styles.container}>
        <img 
          src="https://previews.123rf.com/images/molaruso/molaruso1609/molaruso160900028/62523504-purple-glitch-background-distortion-effect-abstract-texture-random-color-diagonal-lines-for-design-c.jpg" 
          alt="logo"
          className={styles.logoImage} />
        <Icons disabled={selectedIcon !== 0} id={0} text="Events" onClick={()=>{setSelectdIcon(0)}} />
        <Icons disabled={selectedIcon !== 1} id={1} text="Teams" onClick={()=>{setSelectdIcon(1)}}/>
        <Icons disabled={selectedIcon !== 2} id={2} text="Analytics" onClick={()=>{setSelectdIcon(2)}}/>
        <Icons disabled={selectedIcon !== 3} id={3} text="Results" onClick={()=>{setSelectdIcon(3)}}/>
      </div>
    </IconContext.Provider>
  );
}

export default LeftSidebar;
