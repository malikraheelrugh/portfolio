import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import myLogo from "./assets/myLogo.png"
import { useNavigate } from 'react-router-dom';
import React from 'react';
function Navbar() {
    const navigate = useNavigate()
    const [showNav, setShowNav] = React.useState(false);
    return (<>
        <nav className="navbar navbar-expand-lg top" id='navbar'>
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    id='nav-toggler'
                    aria-controls="navbarNav"
                    aria-expanded={showNav}
                    aria-label="Toggle navigation"
                    onClick={() => setShowNav(prev => !prev)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={"collapse navbar-collapse " + (showNav ? "show" : "")} id="navbarNav" style={{ justifyContent: "space-around" }}>
                    <div className="navbar-brand">
                        <img src={myLogo} alt="logo" />
                    </div>
                    <ul className="navbar-nav nav-list">
                        <li className="nav-item">
                            <a className="nav-link ms-5 fw-bold" aria-current="page" href="#home" onClick={() => setShowNav(false)}><span className='purple'>#</span>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 fw-bold" href='#skills' onClick={() => setShowNav(false)}><span className='purple'>#</span>Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 fw-bold" href='#projects' onClick={() => setShowNav(false)}><span className='purple'>#</span>My Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 fw-bold" href='#aboutus' onClick={() => setShowNav(false)}><span className='purple'>#</span>About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 fw-bold" href='#progress' onClick={() => setShowNav(false)}><span className='purple'>#</span>Progress</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 fw-bold" onClick={() => { setShowNav(false); navigate("/contact"); }}><span className='purple'>#</span>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}
export default Navbar;