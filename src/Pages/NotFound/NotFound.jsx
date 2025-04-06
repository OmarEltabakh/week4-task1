
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
export default function NotFound() {



    return <>


        {/* notFoundPage */}
        <section className={`${styles.notFoundPage}`}>

            {/* notFoundContainer */}
            <div className={`${styles.notFoundContainer} specialContainer`}>

                {/* notFoundHeader */}
                <div className={`${styles.notFoundHeader}`}>
                    <h3>Home / <span>404Error</span></h3>
                </div>


                {/* notFoundContent */}
                <div className={`${styles.notFoundContent}`}>

                    <h2>404 Not Found</h2>

                    <p>Your visited page not found. You may go home page.</p>
                    <button><Link to="/">Back to home page</Link></button>
                </div>



            </div>





        </section>



    </>
}
