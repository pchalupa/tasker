import React from 'react';
import styles from '../../styles/header/bar.module.scss';

function Bar(props) {
	render(
		<div className={styles.container}>
			<div className={styles.navigation}>Zpět</div>
			<div className={styles.title}>Titulek</div>
			<div className={styles.profile}>Profil</div>
		</div>
	);
}

export default Bar;
