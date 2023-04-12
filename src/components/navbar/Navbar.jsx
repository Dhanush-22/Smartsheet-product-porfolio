import "./navbar.css"
import { Link } from "react-router-dom"


export default function Navbar() {
  return (
    <>
        <div className="navbarBox">
            <div className="container">
                <div className="navLeft">
                    <img src="https://us.123rf.com/450wm/ginatra/ginatra2211/ginatra221100102/ginatra221100102.jpg?ver=6" alt="logo" className="logo" />
                    <Link to="/" style={{textDecoration:"none"}}>
                        <span className="logoTitle">Smart Sheet</span>
                    </Link>
                </div>
                <div className="navRight">
                    {/* <div className="navbarOption">
                        <Link to="/Home" style={{textDecoration:"none"}}>
                            <span className="navLinks">Home</span>
                        </Link>
                    </div> */}
                    <div className="navbarOption">
                        <Link to="/Product" style={{textDecoration:"none"}}>
                            <span className="navLinks">Product</span>
                        </Link>
                        
                    </div>
                    <div className="navbarOption">
                        <Link to="/Guide" style={{textDecoration:"none"}}>
                            <span className="navLinks">Guide</span>
                        </Link>
                    </div>
                    <div className="navbarOption">
                        <Link to="/Contact" style={{textDecoration:"none"}}>
                            <span className="navLinks">Contact</span>
                        </Link>
                    </div>
                    <div className="navbarOption">
                        <Link to="/developers" style={{textDecoration:"none"}}>
                            <span className="navLinks">Contributors</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
