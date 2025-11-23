import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function GameApply(){
  const { gameId } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: localStorage.getItem('user') || '',
    gameName: gameId || '',
    timeslot: '',
    ticketNo: '',
    notes: ''
  });

  function handle(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function submit(e){
    e.preventDefault();
    // generate ticket number
    const ticket = 'TCK' + Math.random().toString(36).slice(2,9).toUpperCase();
    const payload = {...form, ticketNo: ticket, createdAt: new Date().toISOString()};
    // save registration locally
    const regs = JSON.parse(localStorage.getItem('registrations') || "[]");
    regs.push(payload);
    localStorage.setItem('registrations', JSON.stringify(regs));
    // navigate to success & pass ticket via state
    navigate('/success', { state: payload });
  }

  return (
    <div className="card">
      <h2 className="label">Apply for {gameId}</h2>
      <form onSubmit={submit}>
        <label className="label">Username</label>
        <input name="username" value={form.username} onChange={handle} className="input" required />
        <label className="label">Game Name</label>
        <input name="gameName" value={form.gameName} onChange={handle} className="input" required />
        <label className="label">Time Slot</label>
        <input name="timeslot" value={form.timeslot} onChange={handle} className="input" placeholder="e.g. Nov 25 - 14:00" required />
        <label className="label">Notes</label>
        <textarea name="notes" value={form.notes} onChange={handle} className="input" rows="3" />
        <button className="btn fill" type="submit">Submit</button>
      </form>
    </div>
  );
}
