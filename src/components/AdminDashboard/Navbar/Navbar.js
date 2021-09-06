import { BiMenuAltLeft, BiLaptop } from "react-icons/bi";
import { FaMobileAlt } from 'react-icons/fa';
import styles from './Navbar.module.css'

function Navbar() {

    return (
        <div className={styles.navbarBody}>
            <h2>
                <BiMenuAltLeft className={styles.navbarIconStyle} />
                Admin Dashboard
            </h2>
            <div className={styles.preview}>
                Preview on: <FaMobileAlt /> <BiLaptop />
            </div>
            
        </div>
    )
}

export default Navbar
