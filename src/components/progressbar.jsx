import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './progressbar.module.css';

function ProgressBar() {
    return <>
        <div className="main">
            <div className="headingDiv mt-5 d-flex">
                <h1 className=' h1 ' style={{ color: "white", marginLeft: "60px" }}> <span className='purple'>#</span>Progress Bar </h1>
                <p className='line'></p>
            </div>
        </div>
        <div className="container-fluid mt-4" style={{ width: "93%", }}>
            <div className="languages border border-primary border-4 p-4" style={{ background: "white", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                <strong className={styles.strong}>Html</strong>
                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: "90%" }}></div>
                </div>

                <strong className={styles.strong}>Css</strong>
                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: "80%" }}></div>
                </div>

                <strong className={styles.strong}>Bootstrap</strong>
                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="85%" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: "80%" }}></div>
                </div>

                <strong className={styles.strong}>javascript</strong>
                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: "75%" }}></div>
                </div>

                <strong className={styles.strong}>React js</strong>
                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: "70%" }}></div>
                </div>
            </div>

        </div >
    </>
}
export default ProgressBar;