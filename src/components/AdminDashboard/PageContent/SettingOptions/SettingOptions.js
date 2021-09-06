import { useState, createContext } from "react";
import PanelItem from "./PanelItem/PanelItem"
import styles from  "./SettingOptions.module.css";

export const SelectedTab = createContext();

function SettingOptions(props) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(2);

  function PanelHeader(props) {
    return (
      <div className={styles.header}>
        <h3 className={styles.heading}>{props.heading}</h3>
      </div>
    );
  }

  return (
    <div className={styles.optionsCol}>
      <SelectedTab.Provider value={selectedTabIndex}>
        <PanelHeader heading={props.heading} />
        <PanelItem text="General" id={0} onClick={()=>setSelectedTabIndex(0)}/>
        <PanelItem text="Privacy" id={1} onClick={()=>setSelectedTabIndex(1)}/>
        <PanelItem text="Features" id={2} onClick={()=>setSelectedTabIndex(2)}/>
        <PanelItem text="Customization" id={3} onClick={()=>setSelectedTabIndex(3)}/>
        <PanelItem text="Integration" id={4} onClick={()=>setSelectedTabIndex(4)}/>
        <PanelItem text="Session Settings" id={5} disabled onClick={()=>setSelectedTabIndex(5)}/>
        <PanelItem text="My plans" id={6} onClick={()=>setSelectedTabIndex(6)}/>
      </SelectedTab.Provider>
    </div>
  );
}

export default SettingOptions;
