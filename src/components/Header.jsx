
const Header = () => {
    return (
      <header className="header">
        {" "}
        {/* Logo Section */}
        <div className="logo">
          <img
            src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"
            alt="Restaurant Logo"
          />
        </div>
        <nav className="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
    );
  };

export default Header
