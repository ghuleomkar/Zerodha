import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-4 text-center">
          We pioneered the discount broking model in India.
          <br></br>
          Now ,we are breaking ground with our technology.
        </h1>
      </div>
      <div
        className="row p-5 mt-5 border-top text-muted fs-6"
        style={{ lineHeight: "1.8" }}
      >
        <div className="col-6 p-5">
          <p>
            We kick-started operations on the 15th of August , 2010 with the
            goal of breaking all barriers that traders and investors ace in
            India in terms of cost , support , and tecnology . we named the
            company Zerodha , a combination of zero and "Rodha", the Sanskrit
            world for barrier.
          </p>
          <p>
            Today , our disruptive pricing models and in-house tecnology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment plateforms , contributing over 15%
            of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition , we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            ,our fintech fund and incubator , has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet , we are always up to something new every day . catch up on
            the latest updates on our blog or see what the media is saying us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
