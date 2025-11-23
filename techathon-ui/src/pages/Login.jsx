import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login(){
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const nav = useNavigate();

  function submit(e){
    e.preventDefault();
    // very simple auth mock
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === pass);
    if(user){
      localStorage.setItem('user', user.name || user.email);
      nav('/dashboard');
    } else {
      alert('Invalid credentials (this is a mock system)');
    }
  }

  return (
    <div className="card">
      <h2 className="label">Login</h2>
      <form onSubmit={submit}>
        <label className="label">Email</label>
        <input className="input" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label className="label">Password</label>
        <input className="input" value={pass} onChange={(e)=>setPass(e.target.value)} type="password" />
        <button className="btn fill" type="submit">Log in</button>
      </form>
      <div style={{marginTop:12}}>
        <Link to="/forgot">Forgot password?</Link> • <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}
