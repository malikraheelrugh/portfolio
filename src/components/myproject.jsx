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
import inventory from '../assets/inventory-ms.png';
import Projects from './SomeProjects.jsx';
function MyProjects() {

    const myproject = [

        {
            name: "Weather Api", photo: weatherapi,
            about: `User enters a city name, and the app displays current temperature, weather condition
            It fetches current conditions, forecasts, and location-specific weather details using lightweight JSON responses`,
            link: "https://github.com/malikraheelrugh/weather"
        },
        {
            name: "Javascript", photo: outputform, about: `Registration Form is designed dynamically by using javascript , that is showing an output on submit in table dynamically.This form also
             perform CRUD operations .The  color applying on the table's row is based on checkbox . If checkbox is checked then  that's 
             row's background color color would Green else Red `,
            link: "https://github.com/malikraheelrugh/javascript-form-with-output"
        },
        {
            name: "Dynamic Form with validation", photo: validationForm,
            about: `This form is dynamically made by using vanilla JavaScript, Validation is handled in real-time using custom logic
            ensuring that all dynamically added fields meet required conditions before submission.`,
            link: "https://github.com/malikraheelrugh/Validation-Form"
        },
        {
            name: "Html and Css", photo: schoolpic,
            about: ``,
            link: "https://github.com/malikraheelrugh/schoolWebsite/tree/main/school%20website"
        },
        {
            name: "Bootstrap", photo: bootstrap, about:
                ``,
            link: "https://github.com/malikraheelrugh/clorib-bootstrap-website"
        },
        {
            name: "Bootstrap", photo: bootstrap2,
            about: ``,
            link: "https://github.com/malikraheelrugh/web-Store"
        },
        {
            name: "Html and Css", photo: mediaboom,
            about: "",
            link: "https://github.com/malikraheelrugh/calculator"
        },

        {
            name: "Html and Css", photo: netflix,
            about: ``,
            link: "https://github.com/malikraheelrugh/netflex-clone"
        },
        , {
            name: "Tic Tac Toe", photo: ticTacToe,
            about: ``,
            link: "https://github.com/malikraheelrugh/Tic-Tac-Toe"
        },


        {
            name: "firebase form with CRUD", photo: firebaseForm,
            about: `This form is integrated with Firebase Realtime Database 
            , where user input is securely stored. The form is dynamically rendered using
             JavaScript, and validation ensures that only valid data is submitted to the database.
`,
            link: "https://github.com/malikraheelrugh/FireBase-Form"
        }, {
            name: "Javascript Calculator", photo: javascript, about: `Calculator is developed by custom logic.`,
            link: "https://github.com/malikraheelrugh/calculator"
        }

        ,


    ]
    return <>
        <div className=" mt-4 m-2" style={{

        }}>
            <div className="headingDiv mt-5 d-flex">
                <h1 className=' h1 '> <span className='purple'>#</span>Projects </h1>
                <p className='line'></p>
            </div>            <div className={styles.projectContainer}>
                <Projects />
                {myproject.map(item =>
                    <div key={item.photo} className={`${styles.container} col-sm-6 col-md-4 col-lg-3 col-xxl-2`}>
                        <img src={item.photo} alt="" />
                        <h2 key={item.name} >{item.name}</h2>

                        <p>{item.about}</p>
                        <a href={item.link}><button className="mainBtn mb-2">view on GitHub</button></a>
                    </div>
                )}

            </div>
        </div>

    </>
}
export default MyProjects;