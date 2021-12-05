import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/New Project.png'

const Footer = () => {
    return (
        <div>
            <div className="mt-5">
                <footer
                    className="text-center text-lg-start text-dark"
                    style={{ backgroundColor: "#ECEFF1" }}
                >
                    <section
                        className="d-flex justify-content-between p-4 text-white"
                        style={{ backgroundColor: "#21D192" }}
                    >
                        <div className="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <div>
                            <a target='_blank' href="https://www.facebook.com/" className="text-white me-4">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a target='_blank' href="https://www.twitter.com/" className="text-white me-4">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a target='_blank' href="https://www.google.com/" className="text-white me-4">
                                <i className="fab fa-google"></i>
                            </a>
                            <a target='_blank' href="https://www.instagram.com/" className="text-white me-4">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/" className="text-white me-4">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a target='_blank' href="https://www.github.com/" className="text-white me-4">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </section>
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold "> <Nav.Link className="text-dark ps-0">MOTIVO STORE </Nav.Link></h6>
                                    <p>
                                        Mobile gadgets in motivostore.com can be found by brands, price range and so on. A blog section is also there to keep you informed about the latest news from the mobile phone industry. You may also check our where to buy page to get some idea about different buying possibilities.
                                    </p>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-2 mx-auto mb-4 me-5">
                                    <h6 className="text-uppercase fw-bold pt-0"> <Nav.Link className="text-dark ps-0">We Accept </Nav.Link></h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px; background-color: #7c4dff; height: 2px" }}
                                    />
                                    <img src={logo} alt="" width='250px' />
                                </div>
                                <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold pt-0"> <Nav.Link className="text-dark ps-0">Useful links</Nav.Link></h6>
                                    <Nav.Link as={HashLink} to="/home#home" className="text-dark ps-0">Home</Nav.Link>

                                    <Nav.Link as={HashLink} to="/home#products" className="text-dark ps-0">Products</Nav.Link>

                                    <Nav.Link as={HashLink} to="/home#upComing" className="text-dark ps-0">Up Coming</Nav.Link>

                                    <Nav.Link as={HashLink} to="/home#review" className="text-dark ps-0">Review</Nav.Link>

                                </div>
                                <div className="col-md-6 col-lg-2 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold pt-0"> <Nav.Link className="text-dark ps-0">Contact </Nav.Link></h6>
                                    <p><i className="fas fa-home mr-3"></i>1208 SkyRoad, Dhaka</p>
                                    <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 01 234 067 88</p>
                                    <p><i className="fas fa-print mr-3"></i> + 01 234 067 89</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        © 2021 Copyright:
                        <a className="text-dark" target='_blank' href="https://google.com/"
                        >motivostore.com</a
                        >
                    </div>
                </footer>
            </div>
        </div >
    );
};

export default Footer;