import React from 'react'
import styles from '../styles/Slider.module.css';
import Image from 'next/image';


const Slider = () => {
    return (
        <div className={styles.container}>

            <Image className={styles.img} src="/img/ovah4.png" alt="" height="400px" width="400px" />
           


            <div className={styles.wrapper}>


                <h1>Mobile Apps/ Web Apps</h1>

                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
            </div>


           
            <Image className={styles.img2} src="/img/ovah5.png" alt="" height="800px" width="800px" />
            <Image className={styles.img2} src="/img/ovah2.png" alt="" height="600px" width="600px" />


            




            
        </div>
    )
}

export default Slider;
