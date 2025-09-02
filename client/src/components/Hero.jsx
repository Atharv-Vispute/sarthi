import './Hero.css';   

export default function Hero() {
  return (
    <>
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="brand-name">Saarthi</span>
            <div className="underline"></div>
          </div>
          <nav className="navigation">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Services</a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="hero-section">
          <h1 className="main-heading">
            Saarthi
            <div className="main-underline"></div>
          </h1>
          <p className="tagline">
            Guiding every worker, every step — Saarthi: Your path to rights and opportunity.
          </p>
        </div>
      </main>

      {/* Floating Chat Icon */}
      <div className="chat-icon">
        <div className="chat-bubble">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="notification-badge">1</div>
      </div>
    </>
  );
}
