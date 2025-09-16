import styles from './home.module.css';
import myImage from '../assets/photo.jpg';
import { useNavigate } from 'react-router-dom';

function Homepage(params) {
    const navigate = useNavigate()
    return <>

        <marquee behavior="alternate" direction="left"> <h1 className={styles.heading}><span style={{ color: "#C470DB" }}>Frontend  Developer</span> <br /></h1>
        </marquee>

        <div className={styles.container}>

            <div>
                <center><div className={styles.paragraph}>
                    <h1 style={{ fontFamily: '"fira code",monospace' }}> Raheel is  a <span className={styles.heading}>Web Developer</span><br />and <span className={styles.heading}>Front-End </span> Developer </h1>
                    <h5 > He crafts responsive websites where technologies <br /> meet creativity</h5>
                </div>
                </center>
                <button className="mainBtn"
                    onClick={() => navigate("contact")}
                    style={{
                        marginTop: "1rem"
                    }}>Contact Me ={">"}</button>

            </div>
            <div className={styles.myImage}>
                <img src={myImage} className="raheel" sizes="62x62" alt="Profile" />

            </div>
        </div >
    </>
}
export default Homepage;