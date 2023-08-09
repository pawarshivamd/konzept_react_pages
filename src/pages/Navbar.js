import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoimgwhite from '../img/logo/tranferent_konzept_white.svg';
import logoimg from '../img/logo/tranferent_konzept.svg';
import aroup from '../img/icon/up_aero.svg'
import time from '../img/icon/time.svg'
const Navbar = () => {
    const [Accordion, setAccordion] = useState(false);
    const [Accordion2, setAccordion2] = useState(false);
    const [open, setOpen] = useState(false);
    const [showScroll, setShowScroll] = useState(false);
    const [logoSrc, setLogoSrc] = useState(logoimgwhite);
    const [showTopBtn, setShowTopBtn] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const isMaxWidth991 = window.innerWidth <= 991;

            if (scrollTop > 25) {
                setShowScroll(true);

                setLogoSrc(logoimg);
            } else {
                setShowScroll(false);
                setLogoSrc(logoimgwhite);
            }


            if (scrollTop > 150) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }
        , []);

    const handleCloseMenu = () => {
        setOpen(false);
    };
    const handleAccordionToggle = () => {
        setAccordion(!Accordion);
    };
    const handleAccordionToggle2 = () => {
        setAccordion2(!Accordion2);
    };
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <button id="scrollTopBtn" onClick={handleScrollTop} className={`${showTopBtn ? 'actived ' : ''}`} ><img src={aroup} alt="" /></button>
            <header className={`header ${showScroll ? '' : 'header-transparent'}  header-full`}>
                <nav className={`navbar navbar-expand-lg  ${showScroll ? 'is-sticky' : ''}  `}>
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            {window.innerWidth <= 991 ? (
                                <img loading="lazy" src={logoimg} className="logo logo-dark" height="75" alt="logo" />
                            ) : (
                                <img loading="lazy" src={logoSrc} className={`logo logo-light ${showScroll ? 'padding-imgs' : 'p-0'}`} height={showScroll ? '75' : '100'} alt="logo" />
                            )}
                        </a>
                        <button className="navbar-toggler" type="button" onClick={() => setOpen(!open)}>
                            <span className="menu-lines"><span></span></span>
                        </button>

                        <div className={`collapse navbar-collapse ${open ? "menu-opened" : " "}`}  >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav__item has-dropdown">
                                    <a href='https://www.konzeptsolutions.com/index' className="dropdown-toggle nav__item-link ">Home</a>
                                </li>
                                {/* <li className="nav__item has-dropdown">
                                    <Link to='/hiredeveloper' className="dropdown-toggle nav__item-link ">Hire Developer</Link>
                                </li> */}
                                <li className="nav__item has-dropdown">
                                    <Link to='/hiredeveloper' className="dropdown-toggle nav__item-link ">Hire Developer</Link>
                                </li>
                                <li className="nav__item has-dropdown">
                                    <Link to="/" data-toggle="dropdown" className="dropdown-toggle nav__item-link" onClick={handleAccordionToggle}>IT
                                        Solutions</Link>
                                    <ul className={`dropdown-menu wide-dropdown-menu ${Accordion ? 'show' : ''}`}>
                                        <li className="nav__item">
                                            <div className="row mx-0">
                                                <div className="col-sm-6 dropdown-menu-col">
                                                    <a href="https://www.konzeptsolutions.com/web-solution"
                                                        className="nav__item-link dropdown-menu-title ">Web
                                                        Solutions</a>

                                                    <ul className="nav flex-column">

                                                        <li className="nav__item"><a className="nav__item-link"
                                                            href="https://www.konzeptsolutions.com/web-solution#infomativeweb">Informative
                                                            Web</a>
                                                        </li>
                                                        <li className="nav__item"><a className="nav__item-link"
                                                            href="https://www.konzeptsolutions.com/web-solution#dynamicweb">Dynamic
                                                            Website</a>
                                                        </li>
                                                        <li className="nav__item"><a className="nav__item-link"
                                                            href="https://www.konzeptsolutions.com/web-solution#ecommerceweb">E-Commerce</a>
                                                        </li>

                                                        <a href="https://www.konzeptsolutions.com/mobile-solution"
                                                            className="nav__item-link dropdown-menu-title">Mobile
                                                            Solutions</a>
                                                        <ul className="nav flex-column">

                                                            <li className="nav__item"><a className="nav__item-link"
                                                                href="https://www.konzeptsolutions.com/mobile-solution#app">App
                                                                Development</a>
                                                            </li>
                                                            <li className="nav__item"><a className="nav__item-link"
                                                                href="https://www.konzeptsolutions.com/mobile-solution#hyb">Hybrid
                                                                Development</a>
                                                            </li>
                                                            <li className="nav__item"><a className="nav__item-link"
                                                                href="https://www.konzeptsolutions.com/mobile-solution#api">API
                                                                Services</a>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                </div>

                                                <div className="col-sm-6 dropdown-menu-col">
                                                    <a href="https://www.konzeptsolutions.com/design-solutions"
                                                        className="nav__item-link dropdown-menu-title">Design
                                                        Solutions</a>
                                                    <ul className="nav flex-column">
                                                        <li className="nav__item"><a className="nav__item-link"
                                                            href="https://www.konzeptsolutions.com/design-solutions#html">HTML
                                                            Design</a>
                                                        </li>
                                                        <li className="nav__item"><a className="nav__item-link"
                                                            href="https://www.konzeptsolutions.com/design-solutions#uiux">UI / UX</a>
                                                        </li>
                                                        <li className="nav__item"><a className="nav__item-link"
                                                            href="https://www.konzeptsolutions.com/design-solutions#logobrand">Logo
                                                            And Branding</a>
                                                        </li>

                                                    </ul>


                                                    <Link to='/' className="nav__item-link dropdown-menu-title">Other</Link>

                                                    <ul className="nav flex-column">
                                                        <li className="nav__item"><a className="nav__item-link"
                                                            href="https://www.konzeptsolutions.com/digital-marketing">Digital
                                                            Marketing</a>
                                                        </li>
                                                        <li className="nav__item"><a className="nav__item-link"
                                                            href="https://www.konzeptsolutions.com/software-solution">Software
                                                            Solutions</a>
                                                        </li>
                                                        <li className="nav__item"><a className="nav__item-link"
                                                            href="https://www.konzeptsolutions.com/important-services">Important
                                                            Services</a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav__item has-dropdown">
                                    <Link to="/" data-toggle="dropdown" className="dropdown-toggle nav__item-link" onClick={handleAccordionToggle2}>Know us</Link>
                                    <ul className={`dropdown-menu ${Accordion2 ? 'show' : ''}`}>

                                        <li className="nav__item">
                                            <a href="https://www.konzeptsolutions.com/about-us" className="nav__item-link">About Us</a>
                                        </li>

                                        <li className="nav__item">
                                            <a href="https://www.konzeptsolutions.com/konzept-solutions" className="nav__item-link">Konzept Solutions</a>
                                        </li>

                                        <li className="nav__item">
                                            <a href="https://www.konzeptsolutions.com/why-us" className="nav__item-link">Why Choose Us</a>
                                        </li>

                                        <li className="nav__item">
                                            <a href="https://www.konzeptsolutions.com/life-at-konzept" className="nav__item-link">Life at Konzept</a>
                                        </li>

                                        <li className="nav__item">
                                            <a href="https://www.konzeptsolutions.com/career/" className="nav__item-link">Careers</a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="nav__item has-dropdown">
                                    <a href="https://www.konzeptsolutions.com/portfolio" className="dropdown-toggle nav__item-link">Portfolio</a>
                                </li>

                                <li className="nav__item">
                                    <Link to="/" className="dropdown-toggle nav__item-link active">Blog</Link>
                                </li>
                                <li className="nav__item">
                                    <a href="https://www.konzeptsolutions.com/contact-us" className="dropdown-toggle nav__item-link">Contact</a>
                                </li>
                            </ul>
                            <button className="close-mobile-menu d-block d-lg-none " onClick={handleCloseMenu}><img src={time}
                                alt="" /></button>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
