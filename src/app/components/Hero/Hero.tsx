import React from "react";
import styles from "../Hero/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.containar}>
      <div className={styles.extra}>
        <div className={styles.free}>
          <div className={styles.one}>
            <div className={styles.hidnimage}>
              {/* <Image src={'/images/dots.svg'} alt='dots' height={50} width={120}/> */}
              {/* <Image src={'/images/dots.svg'} alt='dots' height={50} width={120}/> */}
              <h1 className={styles.head_01}>01</h1>
            </div>
            <div className={styles.hidnimage}>
              {/* <Image src={'/images/dots.svg'} alt='dots' height={50} width={120}/>
                  <Image src={'/images/dots.svg'} alt='dots' height={50} width={120}/> */}
            </div>
          </div>
          <div className={styles.two}>
            <div className={styles.hidnimage}>
              <Image
                src={"/images/dots.svg"}
                alt="dots"
                height={50}
                width={100}
              />
              <Image
                src={"/images/dots.svg"}
                alt="dots"
                height={50}
                width={100}
              />
            </div>
            <div className={styles.hidnimage}>
              <Image
                src={"/images/dots.svg"}
                alt="dots"
                height={50}
                width={100}
              />
              <Image
                src={"/images/dots.svg"}
                alt="dots"
                height={50}
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hero_section}>
        <div className={styles.one_one}>
          <h1 className={styles.oneone_head1}>
            Flare is a branding agency based in somewhere. We design thoughtful
            digital experiences and beautiful brand aesthetics.
          </h1>
          <p className={styles.oneone_pera}>
            Non amet venenatis dolor id pellentesque mattis erat. Fermentum
            nunc, tincidunt sit elit amet scelerisque. Ac quisque quis eu nibh
            rutrum risus tellus egestas neque. Vestibulum ante ipsum primis in
            faucibus orci luctus et.
          </p>
        </div>
        <div className={styles.two_two}>
          <Image
            className={styles.two_twoimage}
            src={"/images/about-photo.jpg"}
            alt="about"
            height={100}
            width={450}
          />
        </div>
      </div>
    </div>
  );
}
