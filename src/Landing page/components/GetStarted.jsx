import mobileImg from "../assets/images/mobileversion.png"
import "./getstarted.css"
const GetStarted = () => {
    return ( 
        <div className="get-started">
            <div className="text">
                <h2 className="title">Get <span>Started </span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere delectus explicabo incidunt, dicta earum nostrum molestiae in, reprehenderit, asperiores maxime corrupti inventore reiciendis tempora quo suscipit quod aut nisi? Officiis, non velit eos reiciendis praesentium eius rerum et itaque numquam nostrum cupiditate enim exercitationem iure sed fugit doloribus! Eveniet?</p>
                <button className="btn">Download for Android</button>
            </div>
            <div className="img">
                <img src={mobileImg} alt="" />
            </div>
        </div>
     );
}
 
export default GetStarted;