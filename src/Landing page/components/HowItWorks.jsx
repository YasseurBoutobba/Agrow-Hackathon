import { IoAddCircleOutline , IoCodeDownload} from "react-icons/io5";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { LiaUserCircleSolid } from "react-icons/lia";
import "./howitworks.css"
const HowItWorks = () => {
    return ( 
        <div className="how-it-works">
            <h2 className="title">How it <span>Works ?</span></h2>
            <div className="steps">
                <div className="step">
                    <LiaUserCircleSolid className="icon"></LiaUserCircleSolid>
                    <h2>Craete an account</h2>
                    <p>Sign up to join our community of famers, experst and investors </p>
                </div>
                <div className="step">
                    <IoAddCircleOutline className="icon"></IoAddCircleOutline>
                    <h2>Share a Post</h2>
                    <p>Whether you have an idea of a project, a question you want to ask , Just post it here</p>
                </div>
                <div className="step">
                    <MdOutlineQuestionAnswer className="icon"></MdOutlineQuestionAnswer>
                    <h2>Find Experts</h2>
                    <p>Here you can find experts in agronomic that can help you solve you diffrent problems</p>
                </div>
            </div>
           
        </div>
     );
}
 
export default HowItWorks;