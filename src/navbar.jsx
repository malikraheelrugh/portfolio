import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import myLogo from "./assets/myLogo.png"
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate()

    return (<>
        <nav className="navbar navbar-expand-sm top" id='navbar'>
            <div className="container-fluid">
                <button className="navbar-toggler bg-white" type="button" id='nav-toggler' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav" style={{ justifyContent: "space-around" }}>
                    <div className="navbar-brand">
                        <img src={myLogo} alt="" />
                        {/* <span style={{ fontFamily: ' "Fira Code", monospace', color: "#FFFFFF" }}> Portfolio</span> */}
                    </div>
                    <ul className="navbar-nav nav-list">
                        <li className="nav-item " >
                            <a className="nav-link ms-5  fw-bold " aria-current="page" href="#home" ><span className='purple'>#</span>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5  fw-bold " href='#skills' ><span className='purple'>#</span>Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5  fw-bold " href='#projects'><span className='purple'>#</span>My Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5  fw-bold " href='#aboutus'><span className='purple'>#</span>About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5  fw-bold " href='#progress' ><span className='purple'>#</span>Progress</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5  fw-bold " onClick={() => navigate("/contact")} ><span className='purple'>#</span>Contact Us</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>


    </>);
}
export default Navbar;