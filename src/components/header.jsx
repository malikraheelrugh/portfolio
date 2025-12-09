import styles from './header.module.css';
import Homepage from './home';

function Header() {
    return <><div className={styles.container}>
        <Homepage ></Homepage>
    </div>
    </>

}
export default Header;