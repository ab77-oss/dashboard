import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCog, faHeart, faRocket, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';


function LeftNavbar() {
  return (
    <div className={styles.navcontainer}>
        <div className={styles.logo}>
            <h5>Benya Development</h5>
        </div>
        <div className={styles.wrapper}>
            <ul>
                <li><FontAwesomeIcon 
                    icon={faTachometerAlt} 
                    style={{width:"18px", cursor:"pointer"}} 
                    />
                    <a href="#">Tableau de bord</a>
                </li>
                <li><FontAwesomeIcon 
                    icon={faRocket} 
                    style={{width:"18px", cursor:"pointer"}} 
                    />
                    <a href="#">Explorer</a>
                </li>
                <li><FontAwesomeIcon 
                    icon={faBookOpen} 
                    style={{width:"18px", cursor:"pointer"}} 
                    />
                    <a href="#">Outils</a>
                </li>
                <li><FontAwesomeIcon 
                    icon={faHeart} 
                    style={{width:"18px", cursor:"pointer"}} 
                    />
                    <a href="#">Favouri</a>
                </li>
                <li><FontAwesomeIcon 
                    icon={faCog} 
                    style={{width:"18px", cursor:"pointer"}} 
                    />
                    <a href="#">Configuration</a>
                </li>
                <li><FontAwesomeIcon 
                    icon={faSignOutAlt} 
                    style={{width:"18px", cursor:"pointer"}} 
                    />
                    <a href="#">Logout</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default LeftNavbar