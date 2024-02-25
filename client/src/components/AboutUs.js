// AboutUs.js
import React from "react";
import ElectionImage1 from "../assets/electionImage1.avif";
import ElectionImage2 from "../assets/electionImage2.avif";
import ElectionImage3 from "../assets/electionImage3.avif";
import "../styles/index.css";

const AboutUs = () => {
  return (
    <div id="about-us-section" className="about-us-container">
      <h2>About Us</h2>
      <div className="about-us-content">
        <div className="about-us-image-container">
          <img src={ElectionImage1} alt="ElectionImage 1" />
        </div>
        <div className="about-us-text-container">
          <p>
            Election Insight is your go-to platform for comprehensive and
            insightful information about elections. We are dedicated to making
            the electoral process accessible to everyone.
          </p>
          <p>
            Our mission is to provide users with a user-friendly experience,
            ensuring that they stay informed about political events and
            elections happening around the globe.
          </p>
        </div>
      </div>
      <div className="about-us-content">
        <div className="about-us-text-container">
          <p>
            What sets us apart is our commitment to delivering accurate and
            up-to-date data. Whether you are a political enthusiast, a
            researcher, or a casual observer, Election Insight has something for
            everyone.
          </p>
          <p>
            Explore election results, candidate information, and much more in an
            easy-to-understand format. We believe in transparency and openness,
            empowering individuals with knowledge to make informed decisions.
          </p>
        </div>
        <div className="about-us-image-container">
          <img src={ElectionImage2} alt="ElectionImage 2" />
        </div>
      </div>
      <div className="about-us-content">
        <div className="about-us-image-container">
          <img src={ElectionImage3} alt="ElectionImage 3" />
        </div>
        <div className="about-us-text-container">
          <p>
            At Election Insight, we strive for excellence in delivering
            high-quality information. Join us on this journey towards a more
            informed and engaged electorate.
          </p>
          <p>
            Explore, learn, and stay updated with Election Insight - your
            reliable source for political insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
