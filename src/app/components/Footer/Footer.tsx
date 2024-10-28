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
        

        </div>




    </div>
  )
}
