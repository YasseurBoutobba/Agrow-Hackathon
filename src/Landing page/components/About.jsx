import aboutImg from "../assets/images/about.png"
import "./about.css"
const About = () => {
    return ( 
        <div className="about ">
            <div className="text">
                <h2 className="title">What is <span>aGrow ?</span></h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ipsa earum assumenda magnam saepe dolor est modi, vel aliquid quam laborum blanditiis quidem, maiores aut libero omnis et, quisquam expedita porro quos. Quas temporibus deserunt praesentium explicabo dignissimos soluta. Eveniet itaque laudantium illum temporibus excepturi quae harum vitae sequi, commodi magnam reiciendis expedita eaque voluptas labore, sed eius perspiciatis doloribus.</p>
            </div>
            <div className="img">
                <img src={aboutImg} alt="" />
            </div>
        </div>
     );
}
 
export default About;