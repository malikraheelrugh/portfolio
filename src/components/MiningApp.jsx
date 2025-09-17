import earn1Img from '../assets/earn1.png';
import earn2Img from '../assets/earn2.png';
import earn3Img from '../assets/earn3.png';
import earn4Img from '../assets/earn4.png';
import earn5Img from '../assets/earn5.png';
function MinningApp(params) {
    return <>
        <div className="container " style={{ border: "1px solid #f0ffff8f", marginTop: "1rem", width: "90%" }}>

            <div className="d-flex justify-content-around align-items-center gap-2  flex-wrap" style={{ marginBottom: "10px" }}>
                <div className="col">
                    <img src={earn1Img} alt="Earn1" className="img-fluid" />
                </div>
                <div className="col">
                    <img src={earn2Img} alt="Earn2" className="img-fluid" />
                </div>
                <div className="col">
                    <img src={earn3Img} alt="Earn3" className="img-fluid" />
                </div>
                <div className="col">
                    <img src={earn4Img} alt="Earn4" className="img-fluid" />
                </div>
                <div className="col">
                    <img src={earn5Img} alt="Earn5" className="img-fluid" />
                </div>
            </div>
            <h1 className='mining-heading p-2'>Mining App</h1>

            <p style={{ color: "gray" }}>
                Mining App   is a digital investment platform designed to simplify and simulate crypto-based earning strategies. With a clean interface and intuitive controls,  initiate mining cycles, and monitor returns—all within a secure and responsive environment.

            </p>

            <center><a href="https://github.com/malikraheelrugh/Mining-App"> <button className='mainBtn' style={{ marginBottom: "10px" }}>view on GitHub</button>
            </a></center>
        </div >
    </>
}
export default MinningApp;