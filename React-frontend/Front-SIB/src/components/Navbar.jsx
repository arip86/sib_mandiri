import styles from '../assets/css/Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navLink}>
                <li><Link to='/'><a href="" className={styles.navItem}>Home</a></Link></li>
                <li><Link to='/About'><a href="" className={styles.navItem}>About</a></Link></li>
                <li><a href="/Produk" className={styles.navItem}>Produk</a></li>
                <li><a href="/Contact" className={styles.navItem}>Contact</a></li>
            </ul>
        </nav>
    )
}
export default Navbar