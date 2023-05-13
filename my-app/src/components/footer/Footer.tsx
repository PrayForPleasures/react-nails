import React from 'react';
import pay from '../../images/pay.png'

export const Footer = () =>{
    return <div className='footer'>
        <div className="container">
            <div className="footer__box">
                <div className="footer__left-box">
                    <p className='footer__copyright'>Республика Беларусь, Советская 99 к.2</p>
                    <p className='footer__copyright'>&copy; All Right Reserved</p>
                    <p className='footer__copyright'>Dmitriy Yarchuck Corp.</p>
                </div>
                <div className="footer__middle-box">
                    <img className='footer__pay-image' src={pay} alt="logos" />
                </div>
                <div className="footer__right-box">
                    <p className='footer__copyright'><a className="section-one__phone-number" href="tel:+375445551001">+375 (29) 555-10-01</a></p>
                    <p className='footer__copyright'><a className="section-one__phone-number" href="tel:+375445551001">+375 (44) 555-10-01</a></p>
                </div>
            </div>
        </div>
    </div>
}