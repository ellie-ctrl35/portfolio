import React from 'react';
import { Link,NavLink } from 'react-router-dom'; // If using React Router for navigation
import styles from './Navbar.module.css'; // Assuming you are using CSS modules

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        Tickle.
      </Link>
      <div className={styles.navLinks}>
  <NavLink to="/" exact className={styles.navItem} activeClassName={styles.active}>Home</NavLink>
  <NavLink to="/services" className={styles.navItem} activeClassName={styles.active}>Services</NavLink>
  <NavLink to="/projects" className={styles.navItem} activeClassName={styles.active}>Projects</NavLink>
  <NavLink to="/about" className={styles.navItem} activeClassName={styles.active}>About Me</NavLink>
  <NavLink to="/contact" className={styles.navItem} activeClassName={styles.active}>Contact</NavLink>
  <button className={styles.contactButton}>Resume</button>
</div>
      
    </nav>
  );
};

export default Navbar;
