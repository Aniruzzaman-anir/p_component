import "./Navbar.scss";
import Logo from "../../assests/Logo.png";
const Navbar = () => {
  return (
    <nav>
      <div>
        <div className="n-logo-section">
          <img src={Logo} alt="" />
        </div>
        <ul className="n-link-section">
          <li>find a trip</li>
          <li>destinations</li>
          <li>why besnik</li>
          <li>contact</li>
        </ul>
        <div className="n-signup-trydemo-btn">
          <span className="n-create-account-btn">Create Account</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
