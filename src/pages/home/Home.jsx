import "./home.css"
import landing from "./mb.jpg"
import about from "./mb.jpg"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <div className="homeWrapper">
        <div className="gdsc">
          <div className="infoContainer">
            <header>Google Developer Student Clubs</header>
            <p style={{fontSize: "24px", marginTop: "10px"}}>NIT Andhra Pradesh</p>
            <p style={{maxWidth: "70%", lineHeight: "2", color: "#757575"}}>A community of developers, designers and tech nerds who desire to learn, educate and grow. At GDSC NIT AP, we provide a platform for individuals to learn, develop, collaborate, exchange ideas
            and grow together</p>
            <button onClick={() => {alert("Coming soon")}} className="memberButton">Become a member</button>
          </div>
          <div className="imageContainer">
            <img src={landing} alt=""></img>
          </div>
        </div>

        <div className="about">
          <div className="imageContainer">
            <img src={about} alt=""></img>
          </div>
          <div className="infoContainer">
            <h1 style={{color: "#4182EF"}}>GUIDE</h1>
            <header>Get to know more about SMARTSHEET</header>
            <p style={{maxWidth: "70%", lineHeight: "2", color: "#757575"}}>
            Google Developer Student Clubs are community groups for college and university students to learn 
            app development, web development, machine learning, cloud computing and leadership skills
            </p>
            <Link to="/Guide" style={{textDecoration: "none", color: "#4182EF"}}>
              <a className="aboutUsLink">Learn More {" >"}</a>
            </Link>
          </div>
        </div>
      </div>
           
    </>
  )
}
