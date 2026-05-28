export default function Topbar() {
  return (
    <header className="topbar">
      {/* LEFT BRAND */}
      <div className="brand">
        <span className="brand-mark">
          MC
        </span>

        <div>
          <h1>
            Modern Culture
          </h1>

          <p>
            By Bawarchi
          </p>
        </div>
      </div>

      {/* CENTER NAVIGATION */}
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

      {/* RIGHT CTA */}
      <a
        className="reserve-btn"
        href="#contact"
      >
        Reserve A Table
      </a>
    </header>
  );
}