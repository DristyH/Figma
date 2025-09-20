import React from "react";
import "./Content.css";
import CardContent from "./CardContent";

export default function Content() {
  return (
    <section className="content">
      <div className="content__container">
        {/* Pill label */}
        <span className="content__badge">Fast, secure, hassle-free</span>

        {/* Main heading */}
        <h1 className="content__title">
          Get Paid Faster<img src="/Illustration.png" alt="" className="illustration" />Instant Cash for Businesses!
        </h1>

        {/* Description */}
        <p className="content__desc">
          Stop waiting months for credit card payments. CASA helps business owners
          access cash instantly by converting card transactions into immediate funds.
        </p>

        {/* CTA button */}
        <button className="btn btn-primary content__cta">Get Started</button>

        {/* Cards */}
        <div className="content__features">
          <CardContent image="/Icon info.png" title="Sales Overview from Previous Day" subtitle="" bgColor="#E0F0E5">
            <p><img src="/Chart & botoom.png" alt="" /></p>
          </CardContent>
          

          <CardContent image="/Icon.png" title="Factoring Possible Amount" subtitle="" bgColor="#DAFFC2">
            <p>
                <img src="/1.png" alt=""/>
                <img src="/2.png" alt=""/>
            </p>
          </CardContent>

          <CardContent image="/Icon (1).png" title="Secure & Streamlined Workflow" bgColor="#F1F68E">
            <p><img src="/Card contet.png" alt="" /></p>
          </CardContent>
        </div>
      </div>
    </section>
  );
}
