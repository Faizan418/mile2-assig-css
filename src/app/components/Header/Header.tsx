"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../Header/Header.module.css";

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
            <Image
              className={styles.logo}
              src={"/images/perfect-logo.png"}
              alt="logo"
              height={130}
              width={130}
            />
          </div>

          <ul
            className={`${styles.ul_Links} ${menuActive ? styles.active : ""}`}
          >
            <Link href="#home">
              <li className={styles.ul_li}>HOME</li>
            </Link>
            <Link href="/">
              <li className={styles.ul_li}>ABOUT</li>
            </Link>
            <Link href="https://mile2-project-css.vercel.app/">
              <li className={styles.ul_li}>PORTFOLIO</li>
            </Link>
            <Link href="https://project-list-kappa.vercel.app/">
              <li className={styles.ul_li}>PROJECTS</li>
            </Link>
          </ul>

          <div className={styles.extra_hidden}></div>
          <div className={styles.extra_hidden}></div>

          <div
            className={`${styles.navbtn} ${menuActive ? styles.active : ""}`}
          >
            <button className={styles.navbttn} type="button">
              GET IN TOUCH
            </button>
          </div>

          <div className={styles.hamburger} onClick={toggleMenu}>
            &#9776;
          </div>
        </nav>
      </div>
      {/* --------------------------------------------------------------------- */}
      <div className={styles.headerbody} id="home">
        <div className={styles.header_text}>
          <div className={styles.hea1hea2}>
            <h1 className={styles.hea1}>Hello.</h1>
            <h2 className={styles.hea2}>
              We are Flare. We love <br /> building great brands <br /> &
              digital experiences.
            </h2>

            <div className={styles.social_icons}>
              <div className={styles.s_icons}>
              <Link href={"https://web.facebook.com/faizan.soomro.963"} target="_blank">
                <Image
                  className={styles.icons_svg}
                  src={"/images/facebook.svg"}
                  alt="icon"
                  height={22}
                  width={22}
                />
              </Link>
              </div>
              <div className={styles.s_icons}>
              <Link href={"https://www.instagram.com/fazii.963/"} target="_blank">
                <Image
                  className={styles.icons_svg}
                  src={"/images/instagram.svg"}
                  alt="icon"
                  height={22}
                  width={22}
                />
              </Link>
              </div>
              <div className={styles.s_icons}>
              <Link href={"https://www.linkedin.com/in/muhammad-faizan-2541132b8"} target="_blank">
                <Image
                  className={styles.icons_svg}
                  src={"/images/linkedin.svg"}
                  alt="icon"
                  height={22}
                  width={22}
                />
              </Link>
              </div>
              <div className={styles.s_icons}>
              <Link href={"https://x.com/muhammadf4060"} target="_blank">
                <Image
                  className={styles.icons_svg}
                  src={"/images/twitter-x.svg"}
                  alt="icon"
                  height={22}
                  width={22}
                />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
