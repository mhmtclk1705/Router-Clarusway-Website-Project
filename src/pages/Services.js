import React from "react";

const Services = () => {
  return (
    <div className="cwd">
      <div className="cwd-subscribe">
            <div className="cwd-subscribe-left"><p>Subscribe to Our Newsletter</p></div>
            <div className="cwd-subscribe-right"><input type="email" name="email" id="email" placeholder="Enter Email..."/><button>Subscribe</button></div>
        </div>
        <div className="cwd-services">
            <div className="cwd-services-services">
                <h4>Services</h4>
                <div className="cwd-services-servicesup">
                    <h4>Website Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos velit iste dolorem. <br/>

                        Pricing $1,000 - $3,000</p>
                </div>
                <div className="cwd-services-servicesmid">
                    <h4>Website Maintenance</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat perferendis praesentium similique. <br/>

                        Pricing $250 per month</p>
                </div>
                <div className="cwd-services-servicesdown">
                    <h4>Website Hosting</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eaque sit laudantium delectus?<br/>

                        Pricing $25 per month</p>
                </div>
            </div>
            <div className="cwd-services-form">
                <form action="#">
                    <h4>Get A Quote</h4>
                    <label htmlFor="name">Name</label><br/>
                    <input type="text" id="name" placeholder="Name"/><br/>
                    <label htmlFor="email">Email</label><br/>
                    <input type="email" name="email" id="email" placeholder="Email Adress"/><br/>
                    <label>Message</label><br/>
                    <textarea name="message" id="message" cols="20" rows="2" placeholder="Message"></textarea><br/>
                    <button>Send</button>
                </form>
            </div>
            
        </div>
    </div>
  );
};

export default Services;
