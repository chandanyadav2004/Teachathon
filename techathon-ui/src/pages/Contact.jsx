import React, { useState } from "react";

export default function Contact(){
  const [msg, setMsg] = useState('');
  function submit(e){ e.preventDefault(); alert('Message sent (mock)'); setMsg(''); }
  return (
    <div className="card">
      <h2 className="label">contact.run()</h2>
      <p>Email: info@techathon.in</p>
      <p>Phone: +91 XXXXX</p>
      <form onSubmit={submit}>
        <label className="label">Message</label>
        <textarea className="input" value={msg} onChange={e=>setMsg(e.target.value)} rows="4"></textarea>
        <button className="btn fill" type="submit">Send</button>
      </form>
    </div>
  )
}
