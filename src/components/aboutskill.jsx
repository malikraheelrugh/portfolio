import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './aboutskill.module.css';

function AboutSkills() {
    const mySkills = [
        {
            name: "Html", about: `I craft semantic, accessible HTML layouts 
        that serve as the foundation for responsive and user-friendly
         interfaces. Every tag I use has a purpose—whether it
         improving SEO, enhancing screen reader support, or streamlining 
         collaboration with other developers.`
        },
        {
            name: "Css", about: `My CSS brings life to structure. I 
        focus on responsive design, fluid layouts, and subtle animat
        ions that elevate user experience. Whether it's Flexbox, Grid,
         or custom media queries, I ensure that every design adapts be
         autifully across devices.` },
        {
            name: "Bootstrap", about: `I leverage Bootstrap to accelerate 
        development while maintaining design consistency. From grid-based
         layouts to interactive components, I customize Bootstrap elements
          to align with brand identity and user needs—without compromising performance.
` },
        {
            name: "Javascript", about: `JavaScript is where my logic meets creativity. 
        I build dynamic interfaces with efficient DOM manipulation, robust event
         handling, and clean array operations. I also prioritize error handling to
          ensure smooth user interactions and maintainable code.
` }, {
            name: "React", about: `With React, I architect scalable applications using reusable
     components, hooks, and context for state management. I implement intuitive
     routing and CRUD functionality, ensuring seamless navigation and real-time data
      updates across the app.`
        }, {
            name: "firebase"
        }
        // , {
        //             name: "", about: `I build with empathy and precision—designing interfaces
        //              that are inclusive, multilingual, and engaging. My goal is to create 
        //              experiences that feel intuitive and delightful, whether you're signing 
        //              up, browsing, or interacting with dynamic content.
        // `
        // }

    ]
    return <>

        <div className="container-fluid text-start" style={{ marginLeft: "20px", marginRight: "20px", width: "auto" }}>
            <div className="headingDiv mt-5 d-flex">
                <h1 className=' h1 ' > <span className='purple'>#</span>Skills </h1>
                <p className='line'></p>
            </div>
            <div className={`${styles.languages} col-12`}>
                {mySkills.map(item =>
                    <div key={item.name} className={`${styles.skillItem} col-sm-6 col-md-4 col-lg-3 col-xxl-2.5`}>
                        <h3> {item.name}</h3>
                    </div>

                )}

            </div>
        </div>
    </>
}
export default AboutSkills;