import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
  return (
    <div className="card">
      <h2 className="label">404 Error</h2>
      <p>Command not found. The page you requested does not exist.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </div>
  )
}

