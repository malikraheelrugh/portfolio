import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './aboutskill.module.css';
import { Html } from '@react-three/drei';

function AboutSkills() {
    const mySkills = ["Html", "Css", "Bootstrap", "Tailwind CSS","Javascript", "React", "firebase",  "Node JS", "Express JS", "MongoDB", "GitHub"]
     
    return <>

        <div className="container-fluid text-start" style={{ marginLeft: "20px", marginRight: "20px", width: "auto" }}>
            <div className="headingDiv mt-5 d-flex">
                <h1 className=' h1 ' > <span className='purple'>#</span>Skills </h1>
                <p className='line'></p>
            </div>
            <div className={`${styles.languages} col-12`}>
                {mySkills.map(item =>
                    <div key={item} className={`${styles.skillItem} col-sm-6 col-md-4 col-lg-3 col-xxl-2.5`}>
                        <h3> {item}</h3>
                    </div>

                )}

            </div>
        </div>
    </>
}
export default AboutSkills;