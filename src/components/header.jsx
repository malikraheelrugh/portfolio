import styles from './header.module.css';
import Navbar from '../navbar';
import Homepage from './home';

function Header() {
    return <><div className={styles.container}>

        <Navbar></Navbar>
        <Homepage></Homepage>
    </div>
    </>

}
export default Header;