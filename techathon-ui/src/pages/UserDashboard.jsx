import React from "react";
import { Link } from "react-router-dom";

export default function UserDashboard(){
  const user = localStorage.getItem('user') || 'Guest';
  const regs = JSON.parse(localStorage.getItem('registrations') || '[]').filter(r => r.username === user);

  return (
    <div className="card">
      <h2 className="label">User Dashboard</h2>
      <p>Welcome back, {user}</p>
      <div style={{marginTop:12}}>
        <Link to="/games" className="btn">View Games</Link>
      </div>
      <div style={{marginTop:16}}>
        <h3 className="label">Your Registrations</h3>
        {regs.length===0 ? <p>No registrations yet</p> : regs.map(r=>(
          <div key={r.ticketNo} style={{padding:10, border:'1px solid rgba(0,255,149,0.05)', marginBottom:8}}>
            <div><strong>{r.gameName}</strong> — {r.timeslot}</div>
            <div>Ticket: {r.ticketNo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
