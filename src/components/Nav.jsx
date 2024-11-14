import logo from "../assets/Logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Stores</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </>
  );
};

export default Nav;
