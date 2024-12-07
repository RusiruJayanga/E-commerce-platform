import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      {/* Contact section */}
      <div className="contact-con">
        <div className="contact-left-side">
          <div className="contact-address details">
            <img className="ontact-icon" src="wish-list.png" alt="" />
            <h4>Address</h4>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
          </div>
          <div className="contact-phone details">
            <img className="ontact-icon" src="wish-list.png" alt="" />
            <h4>Phone</h4>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
          </div>
          <div className="contact-email details">
            <img className="ontact-icon" src="wish-list.png" alt="" />
            <h4>Email</h4>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className="contact-right-side">
          <h3 className="text-hili">Send us a message</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae
            quae inventore reiciendis deserunt. Temporibus impedit quae aliquid
            fugit at maiores consectetur ipsum odio velit sunt cupiditate minus,
            modi numquam.
          </p>
          <form className="gap" action="#">
            <div className="contact-input-box">
              <input typeof="text" placeholder="Enter your name"></input>
            </div>
            <div className="contact-input-box">
              <input typeof="text" placeholder="Enter your email"></input>
            </div>
            <div className="contact-input-box message-box">
              <input typeof="text" placeholder="Message..."></input>
            </div>
            <button className="contact-button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
