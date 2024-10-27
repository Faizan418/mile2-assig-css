'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../Header/Header.module.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <div className={styles.containar}>
      
      <div className={styles.navbody}>
        <nav className={styles.navbar}>

          <div className={styles.logo_Fram}>
            <Image className={styles.logo} src={'/images/perfect-logo.png'} alt='logo' height={120} width={120} />
          </div>

          <ul className={`${styles.ul_Links} ${menuActive ? styles.active : ''}`}>
            <li className={styles.ul_li}><Link href="#home">HOME</Link></li>
            <li className={styles.ul_li}><Link href="/">ABOUT</Link></li>
            <li className={styles.ul_li}><Link href="/">PORTFOLIO</Link></li>
            <li className={styles.ul_li}><Link href="/">PROJECTS</Link></li>
          </ul>

          <div className={styles.extra_hidden}></div>
          <div className={styles.extra_hidden}></div>

          <div className={`${styles.navbtn} ${menuActive ? styles.active : ''}`}>
            <button className={styles.navbttn} type='button'>GET IN TOUCH</button>
          </div>

          <div className={styles.hamburger} onClick={toggleMenu}>
            &#9776;
          </div>
          
        </nav>
      </div>
{/* --------------------------------------------------------------------- */}
      {/* <div className={styles.headerbody} id='home'>
        <div className={styles.header_text}>
          <div className={styles.hea1hea2}>
            <h1 className={styles.hea1}>Hello.</h1>
            <h2 className={styles.hea2}>We are Flare. We love <br /> building great brands <br /> & digital experiences.</h2>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
