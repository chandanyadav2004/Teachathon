import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function RegistrationSuccess(){
  const { state } = useLocation();
  const ticket = state?.ticketNo || 'TCK-XXXXX';

  return (
    <div className="card">
      <h2 className="label">Game Registration Success</h2>
      <p className="label">Registration complete for <strong>{state?.gameName}</strong></p>

      <div style={{marginTop:16, padding:12, border:'1px dashed rgba(0,255,149,0.08)', borderRadius:8}}>
        <div style={{fontFamily:'VT323', fontSize:20, color:'var(--primary)'}}>Ticket: {ticket}</div>
        <div style={{marginTop:8}}>Name: {state?.username}</div>
        <div>Game: {state?.gameName}</div>
        <div>Time slot: {state?.timeslot}</div>
      </div>

      <div style={{marginTop:12}}>
        <Link to="/games" className="btn">Back to Games</Link>
      </div>
    </div>
  );
}

