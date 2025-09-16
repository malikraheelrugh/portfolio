import myImage from "../assets/photo.jpg"
function AboutUs(params) {
    return <>
        <div className="main">
            <div className="headingDiv mt-5 d-flex">
                <h1 className=' h1 ' style={{ color: "white", marginLeft: "60px" }}> <span className='purple'>#</span>About Us </h1>
                <p className='line'></p>
            </div>
        </div>
        <div className="container d-flex about-div justify-content-between gap-5 align-items-center mt-5">
            <div className="">
                <img src={myImage} alt="" className="raheel " />
            </div>
            <div className="para ">
                <p>
                    I’m a self-taught front-end developer . I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.


                </p>
                <p>
                    I creates beautiful, responsive and mobile friendly websites with passion

                    I build with empathy and precision—designing interfaces
                    that are inclusive, multilingual, and engaging. My goal is to create
                    experiences that feel intuitive and delightful, whether you're signing
                    up, browsing, or interacting  with dynamic content
                </p>
            </div>
        </div>
    </>
}
export default AboutUs;