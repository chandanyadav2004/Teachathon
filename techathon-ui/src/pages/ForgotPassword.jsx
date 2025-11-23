import React, { useState } from "react";

export default function ForgotPassword(){
  const [email,setEmail] = useState('');
  function submit(e){
    e.preventDefault();
    // mock
    alert(`If ${email} exists a password reset link has been sent (mock)`);
  }
  return (
    <div className="card">
      <h2 className="label">Forgot Password</h2>
      <form onSubmit={submit}>
        <label className="label">Email</label>
        <input className="input" value={email} onChange={e=>setEmail(e.target.value)} />
        <button className="btn fill" type="submit">Submit</button>
      </form>
    </div>
  );
}
