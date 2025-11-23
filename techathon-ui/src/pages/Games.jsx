import React from "react";
import { Link } from "react-router-dom";

const GAMES = [
  { id:'code-quest', title:'Code Quest', desc:'Timed coding rounds' },
  { id:'ctf', title:'Capture the Flag', desc:'Security & reverse' },
  { id:'ml', title:'AI & ML', desc:'Model-building challenge' }
];

export default function Games(){
  return (
    <div className="card">
      <h2 className="label">Games</h2>
      <div className="gamesGrid">
        {GAMES.map(g => (
          <div key={g.id} className="gameCard">
            <h3>{g.title}</h3>
            <p>{g.desc}</p>
            <Link to={`/games/${g.id}/apply`} className="btn">Apply Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
