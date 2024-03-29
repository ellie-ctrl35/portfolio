import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import styles from './Navbar.module.css'; // Assuming you are using CSS modules

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        Su.
      </Link>
      <div className={styles.navLinks}>
        <Link to="/services" className={styles.navItem}>Services</Link>
        <Link to="/projects" className={styles.navItem}>Projects</Link>
        <Link to="/about" className={styles.navItem}>About Me</Link>
        <Link to="/contact" className={styles.navItem}>Contact</Link>
      </div>
      <button className={styles.contactButton}>Resume</button>
    </nav>
  );
};

export default Navbar;
