import React from "react";

const About = () => {
  return (
    <div className="cwd">
      <div className="cwd-subscribe">
        <div className="cwd-subscribe-left">
          <p>Subscribe to Our Newsletter</p>
        </div>
        <div className="cwd-subscribe-right">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email..."
          />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="cwd-content">
        <div className="cwd-content-left">
          <div className="cwd-content-leftup">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              veritatis incidunt necessitatibus, iste eveniet facilis at
              officiis maiores velit soluta deleniti debitis ratione neque quasi
              quaerat numquam vero rem deserunt totam laudantium saepe, quo odit
              amet. Eum iure blanditiis maxime deleniti explicabo, laboriosam
              asperiores excepturi dolores doloribus, facere consectetur
              obcaecati.
            </p>
          </div>
          <div className="cwd-content-leftdown">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              nemo ratione, at a voluptatem quis eaque eius assumenda totam
              eligendi similique voluptatum tempore mollitia ipsam dolore nulla
              quisquam ducimus cupiditate nesciunt. Numquam aspernatur quidem
              obcaecati officia repudiandae quae ea commodi aliquid vitae autem
              sint ipsum, sequi suscipit ex delectus sit!
            </p>
          </div>
        </div>
        <div className="cwd-content-right">
          <h4>What We Do</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ex
            omnis dicta libero optio ipsam blanditiis fugiat, perferendis
            debitis esse praesentium, corporis, dolorem amet consequatur?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
