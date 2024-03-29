import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import styles from './Navbar.module.css'; // Assuming you are using CSS modules

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        Tickle
      </Link>
      <div className={styles.navLinks}>
      <Link to="/" className={styles.navItem}>Home</Link>
        <Link to="/services" className={styles.navItem}>Services</Link>
        <Link to="/projects" className={styles.navItem}>Projects</Link>
        <Link to="/about" className={styles.navItem}>About Me</Link>
        <Link to="/contact" className={styles.navItem}>Contact</Link>
        <button className={styles.contactButton}>Resume</button>
      </div>
      
    </nav>
  );
};

export default Navbar;
