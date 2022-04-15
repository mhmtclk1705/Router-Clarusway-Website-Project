import React from 'react'
import Card from '../components/Card'

const Home = () => {
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
        <Card/>
       
    </div>
  )
}

export default Home