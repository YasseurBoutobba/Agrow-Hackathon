import "./welcome.css"
import welcomeImg from "../assets/images/welcome.png"
const Welcome = () => {
    return ( 
        <div className="welcome ">
            <div className="text">
                <span>Welcome To aGrow</span>
                <h1>join our community of agriculture</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum beatae in quia doloribus, adipisci minima facilis nobis? Consectetur illo reprehenderit iusto labore atque rem suscipit officia provident porro fugit!</p>
                <div className="join">
                    <button className="btn">Create account</button>
                    <span className="log-in">Log in</span>
                </div>
            </div>
            <div className="img">
                <img src={welcomeImg} alt="" />
            </div>
        </div>
     );
}
 
export default Welcome;