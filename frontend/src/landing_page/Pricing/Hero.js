import React from 'react';
 function Hero() {
    return ( 
          <div className='container'>
            
             <div className='row p-5 mt-5 border-bottom text-center' >
                <h1>Pricing</h1>
                <h3 className='text-muted mt-3 fs-4'>Free equity investments and flat rupees 20 traday and F&O traders</h3>
                </div>
                <div className='row p-5 mt-5 text-center' >
                <div className='col-4 p-5'>
                   <img src='media/images/pricing0.svg'/>
                   <h1 className='fs-3'>
                     Free equity delivery </h1>
                     <p className='fs-6 text-muted'>All equity investments(NSE ,BSE),<br/> are absolutely free -rupees 0 brokerage</p>
                </div>
                <div className='col-4 p-5'>
                   <img src='media/images/intradayTrades.svg'/>
                    <h1 className='fs-3'>
                    Intraday and F&O trades</h1>
                     <p className='fs-6 text-muted'>Flat Rs.20 or 0.03%(whichever is lower)<br/> per executed order on intraday trades<br/>across equity, currency, and commodity<br/>trades</p>
                </div>
                <div className='col-4 p-5'>
                   <img src='media/images/pricing0.svg'/>
                    <h1 className='fs-3'>Free direct MF </h1>
                     <p className='fs-6 text-muted'>All direct mutual fund investments are absolutely free -ruppes 0<br/> commissiona & DP charges.</p>
                </div>
               
            </div>
        </div>
     );
 }
 
 export default Hero;