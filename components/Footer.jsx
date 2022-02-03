import React from 'react'

import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (


<section id="contact">

<div className={styles.container}>


<div className={styles.footer}>


<div className={styles.wrapper}>

        <h3 className={styles.head}>Our social media</h3>

        <ul className={styles.list}>

            <li className={styles.listItem}>Facebook</li>

            <li className={styles.listItem}>Instagram</li>

            <li className={styles.listItem}>Twitter</li>

            <li className={styles.listItem}>Pinterest</li>

            <li className={styles.listItem}>Linked In</li>
        </ul>


    </div>

    <div className={styles.wrapper}>

        <h3 className={styles.head}>Our Services</h3>

        <ul className={styles.list}>

           

            <li className={styles.listItem}>Web design</li>

            <li className={styles.listItem}>App development</li>

            <li className={styles.listItem}>Testing vulnerabilities</li>

            <li className={styles.listItem}>Accessibility</li>
        </ul>


    </div>



    
    <div className={styles.wrapper}>

        <h1 className={styles.head}>Newsletter</h1>

        <div className={styles.newsletter}>

            <input type="text" className={styles.input}/>

            <button className={styles.button}>Submit</button>
        </div>





    </div>

</div>


<div className={styles.builBy}>


<span className={styles.copyright}>Built by<strong> Monkey House</strong></span>

<span className={styles.copyright}>copyright &copy;2022</span>



</div>



</div>

        </section>
    )
}

export default Footer
