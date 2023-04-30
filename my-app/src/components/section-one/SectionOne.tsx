import React from "react";
import backImage1 from '../../images/1.png';
import backImage2 from '../../images/2.png';
import vk from '../../images/vk.svg';
import tel from '../../images/tel.svg';
import inst from '../../images/inst.svg';
import viber from '../../images/viber.svg';
import classic from '../../images/classic.jpg';
import euro from '../../images/euro.jpg';
import braz from '../../images/braz.jpg';
import jap from '../../images/jap.jpg';
import spa from '../../images/spa.jpg';
import app from '../../images/app.jpg';
import mts from '../../images/mts.png';

export const SectionOne = () => {
    return <>
        <section className="section-one">
            <img className="section-one__back-image_left" src={backImage1} alt="image" />
            <div className="container">
                <div className="section-one__phone_flex">
                    <a className="section-one__phone-number" href="tel:+375445551001"><img className="section-one__phone-logo" src={mts} alt="logo" /> +375 (29) 555-10-01</a>
                    <a className="section-one__phone-number" href="tel:+375445551001"><img className="section-one__phone-logo" src={mts} alt="logo" /> +375 (44) 555-10-01</a>
                </div>
                <div className="section-one__flex-box">
                    <div className="section-one__left-box">
                        <div className="section-one__slider-box"></div>
                        <div className="section-one__main-content">
                            <h2 className="section-one__main-topic">x Nails</h2>
                            <p className="section-one__description">«x Nails» - это уютная и комфортная атмосфера для наших гостей, где каждый сможет почувствовать свою исключительность. Мастера салона настоящие эксперты в области совершенствования красоты своих клиентов.</p>
                            <hr className="section-one__hr"/>
                            <p className="section-one__description">«x Nails» - это место, где встречаются друзья за чашечкой ароматного чая или чудесного кофе, чтобы отдохнуть от повседневных проблем. Это место, где вас всегда ждут, как старых и добрых друзей.</p>
                        </div>
                        <div className="section-one__slider-box"></div>
                        </div>
                    <div className="section-one__right-box">
                        <nav className="section-one__nav-soc-links">
                            <a className="section-one__soc-link" href="#"><img className="section-one__soc-link-image" src={vk} alt="ref" /></a>
                            <a className="section-one__soc-link" href="#"><img className="section-one__soc-link-image" src={inst} alt="ref" /></a>
                            <a className="section-one__soc-link" href="#"><img className="section-one__soc-link-image" src={tel} alt="ref" /></a>
                            <a className="section-one__soc-link" href="#"><img className="section-one__soc-link-image" src={viber} alt="ref" /></a>
                        </nav>
                    </div>
                    
                </div>
                <div className="section-one__types">
                    <h2 className="section-one__types-topic">Какие есть техники маникюра и педикюра? </h2>
                    <div className="section-one__types-big-box">
                        <div className="section-one__types-box">
                            <div className="section-one__types-mini-box">
                                <h3 className="section-one__types-mini-box-topic">Классический</h3>
                                <img className='section-one__types-image' src={classic} alt="img" />
                                <p className="section-one__types-mini-box-description">Это один из самых популярных способов придать ногтям и коже рук ухоженный вид. Классический маникюр и педикюр начинают с корректировки формы ногтей. Далее, перед обработкой кутикулы, выполняют мацерацию — делают ванночку для размягчения кожи. </p>
                            </div>
                            <div className="section-one__types-mini-box">
                                <h3 className="section-one__types-mini-box-topic">Европейский</h3>
                                <img className='section-one__types-image' src={euro} alt="img" />
                                <p className="section-one__types-mini-box-description">Этот вид маникюра и педикюра очень похож на классический. Главное различие заключается в том, что кутикулу не срезают. С ней работают более щадящим способом — наносят гель-ремувер, который растворяет ороговевшие частицы кожи и позволяет с легкостью ее отодвинуть.  </p>
                            </div>
                            <div className="section-one__types-mini-box">
                                <h3 className="section-one__types-mini-box-topic">Аппаратный</h3>
                                <img className='section-one__types-image' src={app} alt="img" />
                                <p className="section-one__types-mini-box-description">Аппаратный маникюр и педикюр, как правило, «сухие»: наросшую кожу (а если быть точнее, ее ороговевшие частицы) убирают с помощью абразивных аппаратных насадок из металла или керамики, и для этого ее не нужно размягчать, так что можно обойтись без замачивания в ванночке.  </p>
                            </div>
                        </div>
                        <div className="section-one__types-box">
                            <div className="section-one__types-mini-box">
                                <h3 className="section-one__types-mini-box-topic">Японский </h3>
                                <img className='section-one__types-image' src={jap} alt="img" />
                                <p className="section-one__types-mini-box-description">Эта техника — особый ритуал, который идеально подойдет тем, кто любит максимально естественные маникюр и педикюр, а также легко обходится без покрытия.  </p>
                            </div>
                            <div className="section-one__types-mini-box">
                                <h3 className="section-one__types-mini-box-topic">Spa</h3>
                                <img className='section-one__types-image' src={spa} alt="img" />
                                <p className="section-one__types-mini-box-description">В таком маникюре (и педикюре) акцент делают на качественный уход за кожей рук и ног с расслабляющим эффектом. В spa-маникюре и педикюре используются не только ванночки, но и скрабы, которые наносят мягкими массирующими движениями, а также маски — для глубокого увлажнения и питания кожи. Приятные текстуры средств и тонкий аромат превращают такую процедуру в полноценный сеанс релакс-терапии с нужным результатом в виде ухоженных рук и ног.  </p>
                            </div>
                            <div className="section-one__types-mini-box">
                                <h3 className="section-one__types-mini-box-topic">Бразильский</h3>
                                <img className='section-one__types-image' src={braz} alt="img" />
                                <p className="section-one__types-mini-box-description">В этом виде маникюра и педикюра акцент тоже сделан на уход. А еще — на безопасность: в нем не используются ножницы, щипчики, шабер с острым «топориком» на конце — повредить кожу или ногти в бразильском маникюре просто не получится.  </p>
                            </div>
                        </div>
                        
                        
                    
                    </div>
                    
                    
                </div>
            </div>
            <img className="section-one__back-image_right" src={backImage2} alt="image" />
        </section>
    </>
}