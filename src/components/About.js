import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-top">
        <div className="about-left">
          <span className="about-tag">About Casa Service</span>
          <h2>Revolutionizing Cash Flow for Business Owners!</h2>
        </div>
        <div className="about-right">
          <p>
            Empowering businesses with faster cash access, CASA provides a
            secure, fast, and flexible solution to get early payments for credit
            card sales.
          </p>
          <button className="btn">Join Now</button>
        </div>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <img src="/images/icon1.png" alt="Icon" />
          <h3>Secure and Instant Cash Advances</h3>
          <p>
            No more waiting weeks—convert daily credit card transactions into
            cash within 24 hours to keep your business running smoothly.
          </p>
        </div>

        <div className="about-card">
          <img src="/images/icon2.png" alt="Icon" />
          <h3>Transparent and Fair Pricing Process</h3>
          <p>
            No Hidden Fees. No Surprises. Enjoy clear, upfront pricing with
            flexible funding options, so you always know what to expect.
          </p>
        </div>

        <div className="about-card highlight">
          <img src="/images/icon3.png" alt="Icon" />
          <h3>Flexible and Secure Payout Options</h3>
          <p>
            We offer flexible and easy payout options based on your needs,
            ensuring quick access to your funds. Choose from multiple payment
            methods.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
