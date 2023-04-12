import "./navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"; // import the useEffect and useState hooks

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const navbar = document.querySelector(".navbarBox");

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove("hidden");
      } else {
        navbar.classList.add("hidden");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <>
      <div className="navbarBox">
        <div className="container">
          <div className="navLeft">
            <img
              src="https://us.123rf.com/450wm/ginatra/ginatra2211/ginatra221100102/ginatra221100102.jpg?ver=6"
              alt="logo"
              className="logo"
            />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logoTitle">Smart Sheet</span>
            </Link>
          </div>
          <div className="navRight">
            <div className="navbarOption">
              <Link to="/Product" style={{ textDecoration: "none" }}>
                <span className="navLinks">Product</span>
              </Link>
            </div>
            <div className="navbarOption">
              <Link to="/Guide" style={{ textDecoration: "none" }}>
                <span className="navLinks">Guide</span>
              </Link>
            </div>
            <div className="navbarOption">
              <Link to="/Contact" style={{ textDecoration: "none" }}>
                <span className="navLinks">Contact</span>
              </Link>
            </div>
            <div className="navbarOption">
              <Link to="/developers" style={{ textDecoration: "none" }}>
                <span className="navLinks">Contributors</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
          
    </>
  );
}
