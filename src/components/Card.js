import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Card = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const card = location.state.card;
  console.log(card);
  return (
    <div className="cwd-content-container">
      <div className="cwd-content-card">
        <div key={card.id} className={`cwd-content-${card.alt}`}>
          <img style={{width:"200px"}} src={card.img} alt={card.alt} />
          <h4>{card.title}</h4>
          <p>{card.text}</p>
        </div>
      <button className="backtohome" onClick={()=> navigate(-1)}>Back to Home</button>
      </div>
    </div>
  );
};

export default Card;
