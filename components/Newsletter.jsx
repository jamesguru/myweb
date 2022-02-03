import styles from '../styles/Newsletter.module.css';

const Newsletter = () => {
    return (
        <div className={styles.container}>

            <h2 className={styles.header}>Get NewsLetter</h2>

            <div className={styles.wrapper}>

                <input name="text" placeholder="Enter your email" type="text" className={styles.input}/>

                <button className={styles.button}>submit</button>


            </div>
            
        </div>
    )
}

export default Newsletter
