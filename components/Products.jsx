import styles from '../styles/Products.module.css';

import Image from 'next/image'

const Products = () => {
    return (
<section id="about">


<div className={styles.container}>


<div className={styles.wrapper}>


                <Image src='/img/ovah1.png' className={styles.img} alt='' height="500px" width="500px" />


                <div className={styles.info}>

                        <span className={styles.desc}>

                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </span>


                </div>



 </div>

 <div className={styles.wrapper}>


                <Image src='/img/ovah6.png' className={styles.img} alt='' height="500px" width="500px" />


                <div className={styles.info}>

                        <span className={styles.desc}>

                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </span>


                </div>



 </div>







 



</div>
        </section>
    )
}

export default Products
