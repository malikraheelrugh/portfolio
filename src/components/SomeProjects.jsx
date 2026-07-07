import inventory from "../assets/inventory-ms.png";
import orderStore from "../assets/order.png";
import cricket from "../assets/cricket.png";
import MinningApp from "./MiningApp.jsx";
import kpsForm from "../assets/KPS_Form.png";
function Projects() {
    const techStack = ["React", "JavaScript", "Bootstrap", "HTML", "CSS", "Api Integration", "JSON Server"];
    const techStack2 = ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Firebase Firestore", "Excel Export"];
    return <>
        <div className="mt-4" >
            <MinningApp />
            <div className="container " style={{ border: "1px solid #f0ffff8f", marginTop: "1rem", width: "90%" }}>

                <div className="row" style={{ marginBottom: "10px" }}>
                    <div className="col-6 p-0">
                        <img src={inventory} alt="Earn1" className="img-fluid" />
                    </div>
                    <div className="col-6 p-0">
                        <img src={orderStore} alt="Earn2" className="img-fluid" />
                    </div>
                </div>
                <h1 className='mining-heading p-2'>Inventory-managment-system</h1>
                <p style={{ color: "gray" }}>A web-based application built using React and JSON Server for managing products and categories efficiently.</p>
                <p style={{ color: "gray" }}>This project allows users to Add, edit, delete, and view products and categories (Full CRUD functionality),
                    Store and retrieve data through a mock REST API using JSON Server,
                    Navigate through different sections using React Router,
                    Enjoy a clean and responsive interface built with Bootstrap</p>
                <center>
                    {techStack.map(item => <span className='badge bg-primary fs-5 m-2' key={item}>{item}</span>)}
                </center>
<center><a href="https://github.com/malikraheelrugh/Inventory-MS"> <button className='mainBtn' style={{ marginBottom: "10px" }}>view on GitHub</button>
                </a></center>
            </div >
            <div className="container " style={{ border: "1px solid #f0ffff8f", marginTop: "1rem", width: "90%" }}>

                <div className="row" style={{ marginBottom: "10px" }}>
                    <div className="col-12 p-0">
                        <img src={cricket} alt="Earn1" className="img-fluid" />
                    </div>

                </div>
                <h1 className='mining-heading p-2'>Live Cricket Score</h1>
                <p style={{ color: "gray" }}>A responsive web platform dedicated to cricket fans, featuring match updates, player statistics,
                    rankings, and news highlights. Users can explore team profiles, upcoming fixtures,
                    and performance analytics in an organized and engaging layout.
                    Designed with a clean UI for smooth navigation and a real-time feel.</p>
                <center>  {techStack.map(item => <span className='badge bg-primary fs-5 m-2' key={item}>{item}</span>)}
                </center>
                <center style={{ margin: "15px" }}><a href="https://github.com/malikraheelrugh/Cricket-Hub"> <button className='mainBtn' style={{ marginBottom: "10px" }}>view on GitHub</button>
                </a>
                    <a href="   https://cricket-hub-pi.vercel.app/ "> <button className='mainBtn' style={{ marginBottom: "10px" }}>live preview</button>
                    </a>
                </center>
            </div >
            <div className="container " style={{ border: "1px solid #f0ffff8f", marginTop: "1rem", width: "90%" }}>

                <div className="row" style={{ marginBottom: "10px" }}>
                    <div className="col-12 p-0">
                        <img src={kpsForm} alt="Earn1" className="img-fluid" />
                    </div>

                </div>
                <h1 className='mining-heading p-2'>Parental Workshop Registration</h1>
                <p style={{ color: "gray" }}>A full-stack student enrollment system built with React, Tailwind CSS, and Firebase Firestore. Features a multi-field registration form with real-time validation, live ID card preview, and a dedicated export panel that pulls records from the database and downloads them as formatted Excel files.</p>
                <center>  {techStack2.map(item => <span className='badge bg-primary fs-5 m-2' key={item}>{item}</span>)}
                </center>
                <center style={{ margin: "15px" }}><a href="https://github.com/malikraheelrugh/KPS_Form-with-firebase"> <button className='mainBtn' style={{ marginBottom: "10px" }}>view on GitHub</button>
                </a>
                    <a href="https://kpsrachnatown.vercel.app/"> <button className='mainBtn' style={{ marginBottom: "10px" }}>live preview</button>
                    </a>
                </center>
            </div >
        </div>
    </>
}
export default Projects;