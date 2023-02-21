import React from "react";
import "../../styles/footer.css";
import logo from '../../assets/img/dumble.png';


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>

            <footer className="footer" data-aos='fade-up' id="footer"
                            data-aos-duration="1500">
                <div className="container">
                    <div className="footer__wrapper row">
                        <div className="footer__box col-md-3">
                            <div className="logo">
                                <div className="logo__img">
                                    <img src={logo} alt="" />
                                </div>
                                <h2>Fitbody</h2>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                 Nihil, cum vitae? Fugit expedita delectus asperiores.</p>
                        </div>

                        <div className="footer__box col-md-3">
                        <div>
                        <h3 className="footer__title">
                            Quick Links
                            </h3>
                            </div>
                            <ul className="footer__links">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Support</a></li>

                            </ul>
                        
                           
                        </div>

                        <div className="footer__box col-md-3">
                            <div>
                            <h3 className="footer__title">
                                Quick Links
                                </h3>
                                </div>
                                <ul className="footer__links">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Support</a></li>

                                </ul>
                        
                           
                        </div>

                        <div className="footer__box col-md-3">
                            <div>
                            <h3 className="footer__title">
                                Quick Links
                                </h3>
                                </div>
                                <ul className="footer__links">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Support</a></li>

                                </ul>
                        
                           
                        </div>

                    </div>

                    <p className="copyright"> Developed by Mona Mohammady Saber</p>
                </div>
            </footer>



        </>)
}
export default Footer;