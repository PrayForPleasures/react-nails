import React from "react";
import backImage1 from '../../images/1.png';
import backImage2 from '../../images/2.png';
import n1 from '../../images/n1.jpeg';
import n2 from '../../images/n2.jpg';
import n3 from '../../images/n3.jpg';
import n4 from '../../images/n4.jpg';
import vk from '../../images/vk.svg';
import tel from '../../images/tel.svg';
import inst from '../../images/inst.svg';
import viber from '../../images/viber.svg';
import line from '../../images/line.png';

export const SectionOne = () => {
    return <>
        <section className="section-one">
            <img className="section-one__back-image_left" src={backImage1} alt="image" />
            <div className="container">
                <div className="section-one__flex-box">
                    <div className="section-one__left-box">
                        <nav className="section-one__nav-soc-links">
                            <a className="section-one__soc-link" href="#"><img className="section-one__soc-link-image" src={vk} alt="ref" /></a>
                            <a className="section-one__soc-link" href="#"><img className="section-one__soc-link-image" src={inst} alt="ref" /></a>
                            <a className="section-one__soc-link" href="#"><img className="section-one__soc-link-image" src={tel} alt="ref" /></a>
                            <a className="section-one__soc-link" href="#"><img className="section-one__soc-link-image" src={viber} alt="ref" /></a>
                        </nav>
                    </div>
                    <div className="section-one__right-box">
                        <div className="section-one__main-content">
                            <h2 className="section-one__main-topic">x Nails</h2>
                            <img className="section-one__main-image" src={line} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
            <img className="section-one__back-image_right" src={backImage2} alt="image" />=
        </section>
    </>
}