import styles from "./someProject.module.css"
import schoolWebPic from "../assets/schoolwebpic.png"
import bootstrapPic from "../assets/bootstrap.png"
import formPic from "../assets/outputform.png"
import MinningApp from "./MiningApp.jsx"
import MyProjects from "./myproject.jsx"
import { useNavigate } from "react-router-dom"
function Projects(params) {
    const navigate = useNavigate()
    return <>

        <div className="main">
            <div className="headingDiv mt-5 d-flex">
                <h1 className=' h1 ' style={{ color: "white", marginLeft: "60px" }} > <span className='purple'>#</span>Projects </h1>
                <p className='line'></p>
                <button className={`${styles.projectBtn} mainBtn`} onClick={() => navigate("/myprojects")}>View all {"~~>"}</button>
            </div>
        </div>
        <MinningApp />
        <div className="container-fluid mt-4 ">
            <div className="row justify-content-center">
                <div className=" img-div">
                    <img src={schoolWebPic} alt="" className="myImg " />
                    <h2>School Website</h2>
                    <p style={{ color: "#ABB2BF" }}>This project  is  designed by using html and styled using css
                        . It is developed in a very semantic way and
                        designed with precision also added animation on many components.
                        It is made responsible using media querires and flexbox</p>
                    <center>
                        <a href="https://github.com/malikraheelrugh/schoolWebsite/tree/main/school%20website">
                            <button className="mainBtn" style={{ marginBottom: "10px" }}>View on GitHub</button>
                        </a>
                    </center>
                </div>
                <div className=" img-div">
                    <img src={formPic} alt="" className=" myImg" />
                    <h2>Dynamic Form using Javascript</h2>
                    <p style={{ color: "#ABB2BF" }}>Registration Form is designed dynamically by using javascript , that is showing an output on submit in table dynamically.This form also
                        perform CRUD operations ,It have functionality to create ,update ,delete the data.The  color applying on the table's row is based on checkbox . If checkbox is checked then  that's
                        row's background color color would Green else Red .
                    </p>
                    <center>
                        <a href="https://github.com/malikraheelrugh/clorib-bootstrap-website">
                            <button className="mainBtn" style={{ marginBottom: "10px" }}>View on GitHub</button>
                        </a>
                    </center>
                </div>
                <div className=" img-div">
                    <img src={bootstrapPic} alt="" className=" myImg" />
                    <h2>HTML,Css and Bootstrap</h2>
                    <p style={{ color: "#ABB2BF" }}>This website's layout is designed by with the Html and using framework Bootatrap .
                        It is designed in avery smooth way and also made responsive by mostly bootstrap .
                    </p>
                    <center>
                        <a href="https://github.com/malikraheelrugh/javascript-form-with-output">
                            <button className="mainBtn" style={{ marginBottom: "10px" }}>View on GitHub</button>
                        </a>
                    </center>
                </div>

            </div>
        </div>
    </>
}
export default Projects;