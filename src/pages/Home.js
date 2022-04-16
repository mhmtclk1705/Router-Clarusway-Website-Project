import React from 'react'
import htmlLogo from "../assets/logo_html.png";
import cssLogo from "../assets/logo_css.png";
import brushLogo from "../assets/logo_brush.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const cardInfo = [
    {id:0,img: htmlLogo,alt:"html", title: "HTML5 Markup", text: "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."},
    {id:1,img: cssLogo,alt:"css", title: "CSS3 Styling", text: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."},
    {id:2,img: brushLogo,alt:"graphic-design", title: "Graphic Design", text: "Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience."}
  ]
  const navigate = useNavigate();
 
  return (
    <div className="cwd">
       
        <div className="cwd-img-content">
                        
            <h1>Professional Web Design</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur corporis illo numquam quaerat magnam officiis.</p>
        
        </div>
        <div className="cwd-subscribe">
            <div className="cwd-subscribe-left"><p>Subscribe to Our Newsletter</p></div>
            <div className="cwd-subscribe-right"><input type="email" name="email" id="email" placeholder="Enter Email..."/><button>Subscribe</button></div>
        </div>
        <div className="cwd-content">
      {
        cardInfo.map((card) => (
          <div key={card.id} className={`cwd-content-${card.alt}`}>
          <img src={card.img} alt={card.alt} onClick={()=> navigate("/card", {state: {card}})} />
          <h4>{card.title}</h4>
          <p>{card.text}</p>
          </div>
        ))
      }
      
    </div>
       
       
    </div>
  )
}

export default Home