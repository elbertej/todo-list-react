import styles from './Header.module.css'

import rocketLogo from '../../assets/rocket-logo.svg'

export function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.headerConteiner}>
                <img src={rocketLogo} alt="rocket logo" />

                <div className={styles.titleConteiner}>
                    <strong className={styles.strongBlue}>to</strong>
                    <strong className={styles.strongPurple}>do</strong>
                </div>
            </div>
        </header>
    );
}