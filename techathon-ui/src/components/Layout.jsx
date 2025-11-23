import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout(){
  return (
    <div>
      <div className="matrix" />
      <div className="app">
        <header className="header">
          <div className="brand">&gt;_ TECHATHON 2025</div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
            <Link to="/sponsors">Sponsors</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login" className="cta">Login</Link>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="footer">
          <div>&gt;_ Made for Techathon 2025</div>
          <div>© 2025 Techathon</div>
        </footer>
      </div>
    </div>
  );
}
