import React from 'react';
import styles from './nav.module.scss';

const Nav = () => {
    return (
        <nav className={styles.navItem}>
            <div className={styles.navLeft}>
                <span>React UI Component Library</span>
            </div>
            <div>
                <button>this will be a dropdown</button>
            </div>
        </nav>
    );
};

export default Nav;
