import React from "react";
import backImage1 from '../../images/1.png';
import backImage2 from '../../images/2.png';
import n1 from '../../images/n1.jpeg';
import n2 from '../../images/n2.jpg';
import n3 from '../../images/n3.jpg';
import n4 from '../../images/n4.jpg';

export const SectionOne = () => {
    return <>
        <section className="section-one">
            <img className="section-one__back-image_left" src={backImage1} alt="image" />
            <div className="container">
                <div className="section-one__flex-box">
                    <div className="section-one__left-box"></div>
                    <div className="section-one__right-box"></div>
                </div>
            </div>
            <img className="section-one__back-image_right" src={backImage2} alt="image" />=
        </section>
    </>
}