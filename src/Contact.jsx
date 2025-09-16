
function Contact(params) {
    return <>
        <div className="headingDiv mt-5 d-flex">
            <h1 className=' h1 ' style={{ color: "white", marginLeft: "20%", marginBottom: "20px" }}> <span className='purple'>#</span>contact </h1>
            <p className='line'></p>
        </div>
        <center>
            <form action="https://formly.email/submit" className="contact-form" method="POST">
                <input type="hidden" name="access_key" value="ab2233222a96460b922dc73804bc5ac7" />
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" id="name" required />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" required />
                <label htmlFor="email">Phone Number</label>
                <input type="number" name="number" id="number" placeholder="number" required />
                <label htmlFor="meassage">Enter your message here</label>
                <textarea name="message" id="message" rows="4" placeholder="Enter your message here" required ></textarea>
                <button type="submit" className="mainBtn" style={{ width: "70%", marginLeft: "15%" }}>Contact</button>
            </form>
        </center>
    </>

}
export default Contact;