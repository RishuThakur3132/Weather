import "../CSS/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">🌤️ Weather App</h1>

        <nav className="nav">
          <a href="/">Home</a>
          <a href="#weather">Weather</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;