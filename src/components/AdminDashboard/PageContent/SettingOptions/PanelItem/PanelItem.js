import { useContext } from "react"
import { AiTwotoneLock } from "react-icons/ai"
import {SelectedTab} from "../SettingOptions"

import styles from './PanelItem.module.css'

function PanelItem(props) {
    const selected = useContext(SelectedTab);
    
    const selectedStyle = {
      width: "0.5rem",
      backgroundColor: "#c82ae8",
    };

    const unSelectedStyle = {};

    const disabledStyle = {}; 


    return (
      <div className={styles.panelItem} style={{ backgroundColor: selected === props.id && "#EEE" }}
        onClick={()=>props.onClick()}>
        <div style={ !props.disabled 
            ? (selected === props.id ? selectedStyle : unSelectedStyle) 
            : disabledStyle}>
        </div>
        <div className={styles.panelText}>
          <h4 className={styles.panelTextHeading}
            style={{color: !props.disabled ? (selected === props.id ? "#c82ae8" : "grey") : "grey"}}>
            {props.text + "\t"}
            {props.disabled && ( <AiTwotoneLock className={styles.lockIcon}/> )}
          </h4>
        </div>
      </div>
    );
  }

export default PanelItem;