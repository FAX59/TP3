import React from 'react';
import styles from '../styles/Header.module.css';  // Importa el archivo CSS Module

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mi Página Web</h1>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><a href="/" className={styles.link}>Inicio</a></li>
          <li><a href="/about" className={styles.link}>Acerca de</a></li>
          <li><a href="/contact" className={styles.link}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
