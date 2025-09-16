import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import styles from './myprojects.module.css';
import netflix from '../assets/netflix.png';
import schoolpic from '../assets/schoolwebpic.png'
import mediaboom from '../assets/mediaboompic.png'
import bootstrap from '../assets/bootstrap.png';
import bootstrap2 from '../assets/bootstrap2.png';
import outputform from '../assets/outputform.png';
import ticTacToe from '../assets/tic-tac-toe.png';
import javascript from '../assets/calculator.png';
import validationForm from '../assets/validationForm.png';
import firebaseForm from '../assets/firebaseForm.png';
import weatherapi from '../assets/weather api.png';

function MyProjects() {
    // function RightMove() {
    //     const container = document.querySelector(`.${styles.projectContainer}`);
    //     if (container) {
    //         container.scrollBy({ left: 200, behavior: 'smooth' });
    //     }
    // }
    // function LeftMove() {
    //     const container = document.querySelector(`.${styles.projectContainer}`);
    //     if (container) {
    //         container.scrollBy({ left: -200, behavior: 'smooth' });
    //     }
    // }
    const myproject = [
        {
            name: "Html and Css", photo: schoolpic,
            about: `This project  is  designed by using html and styled using css
             . It is developed in a very semantic way and
             designed with precision also added animation on many components.
              It is made responsible using media querires and flexbox`,
            link: "https://github.com/malikraheelrugh/schoolWebsite/tree/main/school%20website"
        },
        {
            name: "Bootstrap", photo: bootstrap, about:
                `This website's layout is designed by with the Html and using framework Bootatrap . It is designed in avery smooth way and also made responsive by mostly bootstrap .`,
            link: "https://github.com/malikraheelrugh/clorib-bootstrap-website"
        },
        {
            name: "Bootstrap", photo: bootstrap2,
            about: `This website's layout is designed by with the Html and using framework Bootatrap . and also made responsive by mostly bootstrap .`,
            link: "https://github.com/malikraheelrugh/web-Store"
        },
        {
            name: "Javascript", photo: outputform, about: `Registration Form is designed dynamically by using javascript , that is showing an output on submit in table dynamically.This form also
             perform CRUD operations ,It have functionality to create ,update ,delete the data.The  color applying on the table's row is based on checkbox . If checkbox is checked then  that's 
             row's background color color would Green else Red `,
            link: "https://github.com/malikraheelrugh/javascript-form-with-output"
        },
        {
            name: "Javascript Calculator", photo: javascript, about: `Calculator is designed by using javascript , that is showing an output on screen dynamically.This calculator also
             perform all arithmetic operations .`,
            link: "https://github.com/malikraheelrugh/calculator"
        }

        , {
            name: "Html and Css", photo: netflix,
            about: `Landing page of netflix  is designed with the help of only html and css.This website is also made re
            sponsive with the help only media queries and flexbox and only added some javascript`,
            link: "https://github.com/malikraheelrugh/netflex-clone"
        },
        , {
            name: "Tic Tac Toe", photo: ticTacToe,
            about: `Tic Tac Toe game is designed with the help of only html ,css and javascript .`,
            link: "https://github.com/malikraheelrugh/Tic-Tac-Toe"
        },
        {
            name: "Html and Css", photo: mediaboom,
            about: "It's layout is simple not much complex but it's responsible and user-friendly.",
            link: "https://github.com/malikraheelrugh/calculator"
        },
        {
            name: "Dynamic Form with validation", photo: validationForm,
            about: ``,
            link: "https://github.com/malikraheelrugh/Validation-Form"
        },
        {
            name: "firebase form with CRUD", photo: firebaseForm,
            about: ``,
            link: "https://github.com/malikraheelrugh/FireBase-Form"
        },
        {
            name: "Weather Api", photo: weatherapi,
            about: ``,
            link: "https://github.com/malikraheelrugh/weather"
        },

    ]
    return <>
        <div className="container-fluid mt-4" style={{
            marginLeft: "5%",
            marginRight: "5%",
            width: "auto"
        }}>
            <div className="headingDiv mt-5 d-flex">
                <h1 className=' h1 ' style={{ color: "white", marginLeft: "60px" }}> <span className='purple'>#</span>Projects </h1>
                <p className='line'></p>
            </div>            <div className={styles.projectContainer}>
                {myproject.map(item =>
                    <div key={item.photo} className={`${styles.container} col-sm-6 col-md-4 col-lg-3 col-xxl-2`}>
                        <img src={item.photo} alt="" />
                        <h2 key={item.name} >{item.name}</h2>

                        <strong></strong> <p>{item.about}</p>
                        <a href={item.link}><button className="mainBtn">view on GitHub</button></a>
                    </div>
                )}

            </div>
        </div>

    </>
}
export default MyProjects;