import React from 'react';

function Universe(){
    return(
        <div className="container mt-5">
      <div className="row text-center">
        <h1 className="text-muted">The Zerodha Universe</h1>
        <p className="mt-3 text-muted">Extend your trading and investment experience even further with our partner platforms</p>
       
        <div className="col-4 p-3 mt-5">
            <img src="media/images/smallcaseLogo.png"/> 
            <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="media/images/zerodhaFundhouse.png" style={{width:"50%"}}/> 
            <p className="text-small text-muted  mt-3">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5"  style={{width:"30%"}}>
            <img src="media/images/sensibullLogo.svg" style={{width:"50%"}}/>
            <p className="text-small text-muted  mt-3">Options trading plateform</p>
        </div>

         <div className="col-4 p-3 mt-5">
            <img src="media/images/streakLogo.png" style={{width:"40%"}}/>
            <p className="text-small text-muted  mt-3">Algo & strategy plateform</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="media/images/dittoLogo.png" style={{width:"30%"}}/>
            <p className="text-small text-muted  mt-3"> Insur?</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="media/images/goldenpiLogo.png"/>
            <p className="text-small text-muted  mt-3">Bonds trading platform</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup up for free
        </button>
      </div>
    </div>
    )
}

export default Universe;