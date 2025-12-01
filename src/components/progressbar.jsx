import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './progressbar.module.css';

function ProgressBar() {
    return <>
        <div className="main">
            <div className="headingDiv mt-5 d-flex">
                <h1 className=' h1 ' > <span className='purple'>#</span>Progress Bar </h1>
                <p className='line'></p>
            </div>
        </div>
        <div className="container-fluid mt-4" style={{ width: "93%", }}>
            <div className="languages border border-primary border-4 p-4" style={{ borderRadius: "10px", }}>
                <h3 className={styles.h3}>Html</h3>
                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: "90%" }}></div>
                </div>

                <h3 className={styles.h3}>Css</h3>
                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: "90%" }}></div>
                </div>

                <h3 className={styles.h3}>Bootstrap</h3>
                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="90%" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: "90%" }}></div>
                </div>

                <h3 className={styles.h3}>javascript</h3>
                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: "80%" }}></div>
                </div>

                <h3 className={styles.h3}>React js</h3>
                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: "75%" }}></div>
                </div>
            </div>

        </div >
    </>
}
export default ProgressBar;