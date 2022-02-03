import styles from '../styles/Navbar.module.css';

import Image from 'next/image';


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>

                <div className={styles.callButton}>

                    <Image src="/img/telephone.png"  height="32" width="32" alt="" />

                    

                </div>

                <div className={styles.texts}>

                        <div className={styles.text}>CALL US NOW !!!</div>

                        <div className={styles.text}>+254727632051</div>

                    </div>

                   



            </div>

            <div className={styles.item}>

                   <ul className={styles.list}>

                       <li className={styles.listItem}><a href="#">Home</a></li>

                       <li className={styles.listItem} ><a href="#about">About</a></li>
                       <li className={styles.listItem} href="#services">Services</li>
                       <li className={styles.listItem}  href="#work">Work</li>
                       <li className={styles.listItem}  href="#blog">Blog</li>
                       <li className={styles.listItem}  href="#contact"><a href="#contact">Contact</a></li>
                   </ul>
            </div>

            <div className={styles.item}>

                   <div className={styles.cart}>

                       <Image src="/img/cart.png"  alt="" height="50px" width="50px" className={styles.icon}/>

                       <div className={styles.counter}>2</div>

                   </div>
            </div>
        </div>
    )
}

export default Navbar
