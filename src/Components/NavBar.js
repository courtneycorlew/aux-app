import React from 'react';
import { Link } from "react-router-dom";
import styles from './navbar.module.scss'
const NavBar = () => (
   <div className={styles.container}>
        <Link to="/">Home</Link>
        <Link to="/about/">About</Link>
    </div>
);

export default NavBar;