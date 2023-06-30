import "../styles/style.css"

  function NavBar() {
  return (
    <div className="navbar">
    <div className="logo">
      <a href="#"><img src="/assets/Codibot.svg" alt="" /></a>
    </div>
    <div>
      <ul className="flex_Items">
        <li className="nav_Item">Live Demo</li>
        <li className="nav_Item">Pricing</li>
        <li className="nav_Item">Contact Us</li>
      </ul>
    </div>
    <a href="">
      <div className="button">Sign Up</div>
    </a>
  </div>
);
}

 export default NavBar;