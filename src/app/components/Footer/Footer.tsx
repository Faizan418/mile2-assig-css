import React from 'react'
import styles from '../Footer/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.main_containar}>

        <div className={styles.main_div_one}>

            <div className={styles.div_one}>
                <h1 className={styles.div_one_h1}>Get In Touch</h1>
            </div>

            <div className={styles.div_two}>
                <h1 className={styles.div_two_h1}>Have an idea or an epic project in mind? Talk <br /> to us. Let us work together and make <br /> something great. Shoot us a message at</h1>
            </div>

            <div className={styles.div_three}>
                <h1 className={styles.div_three_h1}>muhammadf4060@gmail.com</h1>
            </div>

        </div>


        <div className={styles.main_div_two}>

        
          <div className={styles.footer_div_one}>
              <h3 className={styles.footers_headrs}>WHERE TO FIND US</h3>
                <h1 className={styles.footers_pera}>C/o R-505 Rafi Bunglows,</h1>
                <h1 className={styles.footers_pera}>Malir-15 Karachi</h1>
                <h1 className={styles.footers_pera}>+92 PKR</h1>
                <h1 className={styles.footers_pera}>0304-0604-4359</h1>
          </div> 
          <div className={styles.footer_div_two}>
              <h3 className={styles.footers_headrs}>FOLLOW US</h3>
                <h1 className={styles.footers_pera}>Facebook</h1>
                <h1 className={styles.footers_pera}>Whatsapp</h1>
                <h1 className={styles.footers_pera}>Instagram</h1>
                <h1 className={styles.footers_pera}>Twitter</h1>
          </div>
          <div className={styles.footer_div_three}>
              <h3 className={styles.footers_headrs}>------------</h3>
                <button className={styles.footers_pera_btn} type="button">LET'S TALK</button>
            <div className={styles.last}>
                <p className={styles.footers_pera}>Copyright Flare 2024 | </p>
                <p className={styles.footers_pera}>Design by StyleShout Distribution  By</p>
                <p className={styles.footers_pera}>Muhammad Faizan</p>
            </div>

          </div>


        </div>




    </div>
  )
}
