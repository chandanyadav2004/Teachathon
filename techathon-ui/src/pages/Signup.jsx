import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const nav = useNavigate();

  function submit(e){
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ name, email, password: pass });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('user', name);
    nav('/dashboard');
  }

  return (
    <div className="card">
      <h2 className="label">Sign Up</h2>
      <form onSubmit={submit}>
        <label className="label">Name</label>
        <input className="input" value={name} onChange={(e)=>setName(e.target.value)} />
        <label className="label">Email</label>
        <input className="input" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label className="label">Password</label>
        <input className="input" type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />
        <button className="btn fill" type="submit">Sign Up</button>
      </form>
    </div>
  );
}
