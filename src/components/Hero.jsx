import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faEbay } from "@fortawesome/free-brands-svg-icons";
import Shoes from "../assets/Shoes.png";
const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
          <button className="btn">SHOP NOW</button>
          <button className="sec-btn">CATEGORY</button>
        </div>
        <div className="shop-on">
          <p>Also Available On</p>
          <div className="font-awe">
            <FontAwesomeIcon
              icon={faAmazon}
              style={{ color: "#ffffff" }}
              className="font-icon"
            />
            <FontAwesomeIcon
              icon={faEbay}
              style={{ color: "#ffffff" }}
              className="font-icon"
            />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src={Shoes} alt="" />
      </div>
    </main>
  );
};

export default Hero;
