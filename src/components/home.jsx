import styles from './home.module.css';
import myImage from '../assets/photo.jpg';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate()
    return <>



        <div className={styles.container}

        >

            <div>
                <center><div className={styles.paragraph}>
                    <h1 style={{ fontFamily: '"fira code",monospace' }}> Raheel is  a <span className={styles.heading}>Web Developer</span> and <span className={styles.animate}><span className={styles.heading}>Front-End </span> Developer </span> </h1>
                    <h5 > He crafts responsive websites where technologies <br /> meet creativity</h5>
                </div>
                </center>
                <button className="mainBtn"
                    onClick={() => navigate("contact")}
                    style={{
                        marginTop: "1rem",
                        marginLeft: "20px"
                    }}>Contact Me ={">"}</button>

            </div>
            <div className={styles.myImage}>
                <img src={myImage} className="raheel" sizes="62x62" alt="Profile" />

            </div>
        </div >
    </>
}
export default Homepage;