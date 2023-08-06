import feedbackImg from "../assets/images/feedback.png"
import "./feedbacks.css"
const Feedbacks = () => {
    return ( 
        <div className="feedbacks">
            <div className="text">
                <h2 className="title">Give us a <span>Feedback</span></h2>
                <p>Fill the form above and give us your feedback so we can improve your use expereince</p>
                <form >
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <input type="email" name="emai" id="email" placeholder="Email" />
                    <textarea name="text" id="text" placeholder="How did you find us?"></textarea>
                    <button className="btn">Send</button>
                </form>
            </div>
            <div className="img">
                <img src={feedbackImg} alt="" />
            </div>
        </div>
     );
}
 
export default Feedbacks;