import React from "react";
import styles from "../../styles/Home.module.css";
import Img from "../../images/watermark.png";
import Image from "next/image";

function Header() {
	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Bonjour, <span>Abdelouahed!</span>
					</h2>
          <br></br>
					<p style={{color:"gray"}}>Tableau de bord.</p>
				</div>
				<div className={styles.profile}>
					<Image src={Img} alt="profile" className={styles.image} width="40px" height="40px" />
				</div>
			</div>
		</div>
	);
}

export default Header;