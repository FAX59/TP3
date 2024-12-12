import React from 'react';
import styles from '../styles/Footer.module.css';  // Importa el archivo CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© 2024 Mi Página Web. Todos los derechos reservados.</p>
      <div className={styles.socialLinks}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Twitter
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Instagram
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
