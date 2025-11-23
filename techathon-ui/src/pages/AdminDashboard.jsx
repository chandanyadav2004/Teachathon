import React from "react";

export default function AdminDashboard(){
  const regs = JSON.parse(localStorage.getItem('registrations') || '[]');
  const users = JSON.parse(localStorage.getItem('users') || '[]');

  return (
    <div className="card">
      <h2 className="label">Admin Dashboard</h2>
      <div>&gt; Total Users: {users.length}</div>
      <div>&gt; Registrations: {regs.length}</div>
      <div style={{marginTop:12}}>
        <h3 className="label">Recent registrations</h3>
        {regs.slice(-5).reverse().map(r=>(
          <div key={r.ticketNo} style={{padding:8, borderBottom:'1px solid rgba(0,255,149,0.04)'}}>
            <div>{r.username} • {r.gameName}</div>
            <div style={{opacity:0.8}}>Ticket: {r.ticketNo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
