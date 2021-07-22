import React from 'react';
import { Link } from 'react-router-dom';
//import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    // const toTop=()=>{
    //     scroll.scrollToTop()
    // }


    const year=new Date().getFullYear()


    return (
    
        <footer className="footer mx-auto">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="icons">

                        <div className="row">
                            <div className="col-3">
                                <Link className="single-icon" to="#">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </div>
                            <div className="col-3">
                                <Link className="single-icon" to="#">
                                    <i className="fab fa-facebook"></i>
                                </Link>
                            </div>
                            <div className="col-3">
                                <Link className="single-icon" to="#">
                                    <i className="fab fa-github"></i>
                                </Link>
                            </div>
                            <div className="col-3">
                                <Link className="single-icon" to="#">
                                    <i className="fab fa-linkedin"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

              
                 <div className="swift-hr mx-auto col-9"></div>
                 {/* <div className="to-top" onClick={toTop}><i className="fas fa-angle-double-up"></i></div> */}
                 <div className="developer-details mx-auto text-center">
                     <p>Designed&amp;Developed by <a href="http://ryanmwakio.netlify.app">Ryan Mwakio</a> &copy; {year}</p>
                     
                 </div>
              
            </div>
        </footer>
    );
}

export default Footer;
