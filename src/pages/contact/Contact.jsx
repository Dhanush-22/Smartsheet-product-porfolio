import "./contact.css";
import {FacebookOutlined, LinkedIn, GitHub} from  "@mui/icons-material"
import pic1 from "./IMG20230102174427-01.jpeg"


export default function Contact() {
  return (
    <div className="fbody">
      <div className="f_container">
        <div className="f_card">
          <div className="f_content">
            <div className="f_img">
              <img src={pic1}></img>
            </div>
            <div className="f_cardContent">
                <h3>Dhanush Bedre</h3>
                <span style={{'marginTop':"5px"}}>Full stack Developer</span>
            </div>
          </div>
          <ul className="f_sci">
            <li style={{ "--i": "1" }}>
              <a href="https://www.facebook.com/dhanush.bedre">
                {/* <i className="fa fo-facebook" aria-hidden="true"></i> */}
                <FacebookOutlined className="socialIcon"/>
              </a>
            </li>
            <li style={{ "--i": "2" }}>
              <a href="https://www.linkedin.com/in/dhanush-bedre-49454622b">
                {/* <i className="fa fa-instagram" aria-hidden="true"></i> */}
                <LinkedIn className="socialIcon"/>
              </a>
            </li>
            <li style={{ "--i": "3" }}>
              <a href="https://github.com/dhanush-22/">
                {/* <i className="fa fa-github" aria-hidden="true"></i> */}
                <GitHub className="socialIcon"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="f_card">
          <div className="f_content">
            <div className="f_img">
              <img src="https://archive.nptel.ac.in/content/noc/NOC22/SEM2/Candidate_photos/chohanganji2004@gmail.com_photo.jpeg"></img>
              {/* <img src="../../assets/guide1.jpg"></img> */}
            </div>
            <div className="f_cardContent">
                <h3>Chohan Dhanendra G</h3>
                <span style={{'marginTop':"5px"}}>Full stack Developer</span>
            </div>
          </div>
          <ul className="f_sci">
            <li style={{ "--i": "1" }}>
              <a href="https://www.facebook.com/chohan.dhanendra">
                {/* <i className="fa fo-facebook" aria-hidden="true"></i> */}
                <FacebookOutlined className="socialIcon"/>
              </a>
            </li>
            <li style={{ "--i": "2" }}>
              <a href="https://www.linkedin.com/in/ganji-chohan-sri-satya-sai-naga-dhanendra-00880821a/">
                {/* <i className="fa fa-instagram" aria-hidden="true"></i> */}
                <LinkedIn className="socialIcon"/>
              </a>
            </li>
            <li style={{ "--i": "3" }}>
              <a href="https://github.com/CHOHAN2004">
                {/* <i className="fa fa-github" aria-hidden="true"></i> */}
                <GitHub className="socialIcon"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="concontainer">
        <h1 className="heading1">Contact Us</h1>
        <p className="heading2">For any inquiries, please contact:</p>
        <ul className="items">
          <li className="item">Name: B DHANUSH</li>
          <li className="item">Email: DHANUHSB@SMARTSHEET.COM</li>
          <li className="item">Phone: 123-456-7890</li>
        </ul>
        <ul className="items">
          <li className="item">Name: G C S S S N DHANENDRA</li>
          <li className="item">Email: CHOHANG@SMARTSHEET.COM</li>
          <li className="item">Phone: 123-456-7890</li>
        </ul>
      </div> */}
    </div>
  );
}
