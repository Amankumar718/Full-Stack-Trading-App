import React from 'react';

function Brokerage() {
    return ( 
        <div className="container">
                <div className='row p-5 mt-5 text-center' >
                <div className='col-8 p-4'>
                 <a href=''style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage calculator</h3> </a>
                 <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"12px"}} className='text-muted'>
                    <li>Call & Trade and RMS auto-squareoff:Additional charges of rupees50 + GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes ,if required, shall be charged rupees20 per contract note. Courier charges apply.</li>
                    <li>For NRI account(non-PIS),0.5% or rupees 100 executed order for equity (whichever is lower).</li>
                    <li>For NRI account(PIS),0.5% or rupees 200 executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged rupess40 per executed order instead of rupees 20 per executed order.</li>
                 </ul>
                
                 </div>
                <div className='col-4 p-4'>
                <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>List of Charges</h3></a>
                </div>
            
        </div>
        </div>
     );
}


export default Brokerage;