import styles from '../styles/PortFolio.module.css';

import Image from 'next/image';

const PortFolio = () => {
    return (
        <div className={styles.container}>


            <h2 className={styles.header}>View some of our works.</h2>


            <div className={styles.wrapper}>


                <div className={styles.card}>


                        <Image src="/img/ovah5.png" className={styles.img} alt="" height="400px" width="400px" objectFit="contain"/>

                        <span className={styles.info}>E shamba</span>


                </div>


                <div className={styles.card}>


                        <Image src="/img/ovah2.png"  className={styles.img} alt ="" height="400px" width="400px" objectFit="contain"/>

                        <span className={styles.info}>Weather app</span>


                </div>


                <div className={styles.card}>


                        <Image src="/img/ovah6.png"  className={styles.img} alt ="" height="400px" width="400px" objectFit="contain"/>

                        <span className={styles.info}>Admin Dashboard</span>


                </div>


                <div className={styles.card}>


                        <Image src="/img/ovah1.png"  className={styles.img} alt ="" height="400px" width="400px" objectFit="contain"/>

                        <span className={styles.info}>GCL House Design </span>


                </div>


                

            
            </div>
            
        </div>
    )
}

export default PortFolio
