import "./footer.css"
const Footer = () => {
    return ( 
        <>
            <footer>
                <div className="sec-one">
                    <img src="" alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam blanditiis voluptatibus quis aut voluptate?</p>
                </div>
                <div className="sec">
                    <h4>Aout</h4>
                    <ul>
                        <li>How it works</li>
                        <li>Featured</li>
                        <li>Partnership</li>
                        <li>Bussines Relation</li>
                    </ul>
                </div>
                <div className="sec">
                    <h4>Community</h4>
                    <ul>
                        <li>Events</li>
                        <li>Blog</li>
                        <li>Podcast</li>
                        <li>Invite a friend </li>
                    </ul>
                </div>
                <div className="sec">
                    <h4>Socials</h4>
                    <ul>
                        <li>Discord</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                    </ul>
                </div>
            </footer>
            <div className="last">
                <p>©2023 aGrow. All rights reserved</p>
                <p>Privacy & Policy</p>
            </div>
        </>
     );
}
 
export default Footer;