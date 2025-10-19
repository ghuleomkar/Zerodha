import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-5">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: how do i activate F&O , why is my order getting rejected..." />
          <br />
          <br />
          <a href="">Track account opening</a>
          &nbsp;&nbsp;
          <a href="">Track segment activation</a>
          &nbsp;&nbsp;
          <a href="">Intraday margins</a>
          &nbsp;&nbsp;
          <br />
          <br />
          <a href="">Kite user manual</a>
          &nbsp;&nbsp;
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href=""> Current Takeovers and Delisting – June 2025</a>
            </li>
            <br></br>
            <li>
              <a href="">Surveillance measure on scrips - June 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
