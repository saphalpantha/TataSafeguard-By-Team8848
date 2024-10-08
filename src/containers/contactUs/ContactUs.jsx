import React from 'react';
import './ContactUs.css';


const ContactForm = () => (
  <div className="contactBody" id="contact-us">
    <section className="contact-form">
      <h1 className="gradient__text">Get In Touch with us. Explore TataSafeguard Worldwide Facilities</h1>
      <div className="contactForm">
        <form action="#">
          <h1 className="sub-heading">Join us in our journey</h1>
          <p className="para">Contact us and we will be happy to answer your questions.</p>
          <input type="text" className="inputform" placeholder="Name" />
          <input type="text" className="inputform" placeholder="Email" />
          <input type="number" className="inputform" placeholder="Phone number" />
          <textarea className="inputform" cols="30" rows="5" placeholder="Your message" />
          <input type="submit" className="inputSubmit" value="Send Message" />
        </form>

        <div className="map-container">
          <div className="mapBg" />
          <div className="map">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12025599.928674743!2d63.28447619770007!3d15.85669241633292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae115a78c8da7b%3A0xa8d013ee8bb0c332!2sTata%20Technologies%20Limited!5e0!3m2!1sen!2sin!4v1726854511888!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      <div className="contactMethod">
        <div className="method">
          <article className="text">
            <h1 className="sub-heading">Location</h1>
            <div className="infoContainer">
              <i className="fa-solid fa-location-dot contactIcon" />
              <p className="para">TataSafeguard Group India Private Limited,5th Floor, West Wing, Worldmark – 1 Aerocity New Delhi – 110037 - India</p>
            </div>
          </article>
        </div>

        <div className="method">
          <article className="text">
            <h1 className="sub-heading">Email</h1>
            <div className="infoContainer">
              <i className="fa-solid fa-envelope contactIcon" />
              <p className="para">info@tatasafeguard.com</p>
            </div>
          </article>
        </div>

        <div className="method">
          <article className="text">
            <h1 className="sub-heading">Phone</h1>
            <div className="infoContainer">
              <i className="fa-solid fa-phone contactIcon" />
              <p className="para">+91 11 45 801 100</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
);

export default ContactForm;
