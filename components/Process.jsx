import styles from '../styles/Process.module.css';

const Process = () => {
    return (
        <div className={styles.container}>

            <h2 className={styles.header}>The steps followed during development</h2>



            <ol>


                <li><div className={styles.wrapper}>

                    <h3 className={styles.head}>Understanding objectives</h3>

                    <span className={styles.desc}>Working with client to understand their objectives.Working with client to understand their objectives.Designing the application according to client objectives.Working with client to understand their objectives.</span>



                    </div>
                    
                </li>

                <li>


                <div className={styles.wrapper}>

                        <h3 className={styles.head}>Designing Application</h3>

                        <span className={styles.desc}>Designing the application according to client objectives.Working with client to understand their objectives.Designing the application according to client objectives.Working with client to understand their objectives.</span>



                </div>



                        
                </li>

                <li>



                <div className={styles.wrapper}>

                        <h3 className={styles.head}>Actual Work</h3>

                        <span className={styles.desc}>Actual work happens and the development process kick start while communicating with client.Designing the application according to client objectives.Working with client to understand their objectives.</span>



                </div>





                        


                </li>

                <li>



                <div className={styles.wrapper}>

                    <h3 className={styles.head}>Testing accessibility and validation.</h3>

                    <span className={styles.desc}>Testing the web application for accessibility and validity.Designing the application according to client objectives.Working with client to understand their objectives.</span>



                </div>

                

                </li>

                <li>

                <div className={styles.wrapper}>

                    <h3 className={styles.head}>Testing vulnerabilities</h3>

                    <span className={styles.desc}>Testing application for vulnerabilities.Designing the application according to client objectives.Working with client to understand their objectives.</span>



                </div>

                </li>
                <li>

                <div className={styles.wrapper}>

                    <h3 className={styles.head}>Deployment</h3>

                    <span className={styles.desc}>Deploying into production.</span>



                </div>



                </li>
            </ol>


            
        </div>
    )
}

export default Process
