import { useNavigate } from "react-router-dom";

function Footer(params) {
  const navigate = useNavigate
  return <>
    <div className="container-fluid  footer ">
      {/* <h5 className="pt-4 m-4"><strong>Note :</strong> This project is made by using react js</h5> */}
      <footer className=" mt-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link  p-2 ">Home</a></li>
          <li className="nav-item">
            <a href="#skills" className="nav-link p-2 ">skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className=" nav-link px-2 ">projects</a>
          </li> <li className="nav-item">
            <a href="#aboutus" className="nav-link p-2  ">About Us</a></li>
          <li className="nav-item">
            <a href="#progress" className="nav-link p-2  ">progress</a></li>

        </ul>
        <p className="text-center  mb-0">copyright 2025 . made by raheel abbas</p>
      </footer> </div>

  </>
}
export default Footer;