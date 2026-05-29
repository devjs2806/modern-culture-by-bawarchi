export default function Topbar() {
  return (
    <header className="topbar">
      {/* LOGO */}
      <div className="brand">
        <img
          src="/images/logo.png"
          alt="Modern Culture By Bawarchi"
          className="logo-image"
        />
      </div>

      {/* NAVIGATION */}
      <nav className="nav-links">
        <a href="#home">Home</a>

        <a href="#exterior">
          Exterior
        </a>

        <a href="#entrance">
          Entrance
        </a>

        <a href="#interior">
          Interior
        </a>

        <a href="#menu">
          Menu
        </a>

        <a href="#contact">
          Contact
        </a>
      </nav>

      {/* RESERVE BUTTON */}
      <a
        className="reserve-btn"
        href="#contact"
      >
        Reserve A Table
      </a>
    </header>
  );
}