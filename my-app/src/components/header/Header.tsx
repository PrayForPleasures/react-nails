import React from "react";
import logo from '../../images/2.png';

export const Header = () => {
    return <>
            <div className="header">
                <div className="container">
                    <div className="header__flex">
                        <a className="header__logo" href="/">
                            <img className="header__logo-img" src={logo} alt="img" />
                            <h1 className="header__logo-text">x Nails</h1>
                            
                        </a>
                        <nav className="header__all-nav-links">
                            <a className="header__nav-link" href="#">О нас</a>
                            <a className="header__nav-link" href="#">Услуги</a>
                            <a className="header__nav-link" href="#">Прайс</a>
                            <a className="header__nav-link" href="#">Запись</a>
                        </nav>
                    </div>
                </div>
            </div>
    </>
}

