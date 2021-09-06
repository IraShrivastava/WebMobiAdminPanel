import { useContext } from "react";
import { VscGraph } from "react-icons/vsc";
import { IoIosPeople } from "react-icons/io";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaEnvelopeOpenText } from "react-icons/fa";

import styles from "./Icons.module.css";

import { IconContext } from "./LeftSidebar";

function Icons(props) {

    const selectedIcon = useContext(IconContext);

    const getIcon = (id) => {
        switch (id) {
            case 0:
                return <VscGraph className={!props.disabled ? styles.iconStyle : styles.disabledIconStyle} />
            case 1:
                return <IoIosPeople className={!props.disabled ? styles.iconStyle : styles.disabledIconStyle} />
            case 2:
                return <DiGoogleAnalytics className={!props.disabled ? styles.iconStyle : styles.disabledIconStyle} />
            case 3:
                return <FaEnvelopeOpenText className={!props.disabled ? styles.iconStyle : styles.disabledIconStyle} />
            default:
                return null
        }
    }

    const iconStyleMerge = `${styles.iconOuterMargin} ${selectedIcon === props.id ? styles.selectedIconStyle : styles.unselectedIconStyle}`

    return (
        <div className={iconStyleMerge} onClick={props.disabled ? props.onClick : null} >
            <div>
                <span>{getIcon(props.id)}</span>
            </div>
            <div>
                <p className={styles.iconLabelStyle} style={{ color: props.disabled ? "grey" : "#c82ae8" }}>{props.text}</p>
            </div>
        </div>
    );
}

export default Icons;
