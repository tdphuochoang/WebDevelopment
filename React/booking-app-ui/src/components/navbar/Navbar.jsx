import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">MYBOOKINGCLONE</span>
        <div className="navItems">
          <button className="nav-btn">Register</button>
          <button className="nav-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
