import React from 'react'
import City from '../City'
import HomeCard from '../Main/HomeCard'
import { Col, Row } from 'reactstrap';

function Main() {
    return (
        <div className="layout-wrapper landing" style={{ backgroundImage: 'assets/img/bg-home.jpg' }}>
            <nav className="navbar navbar-expand-lg navbar-landing navbar-light fixed-top" id="navbar">
                <div className="container">
                    <button className="navbar-toggler py-0 fs-20 text-body" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mt-2 mt-lg-0" id="navbar-example">
                            <li className="nav-item">
                                <a className="nav-link active" href="#hero">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Get in Touch</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Help and Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Privacy Policy</a>
                            </li>
                        </ul>

                        <div className="">
                            <a href="/flatmate" className="btn btn-success"> Log in </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="bg-overlay bg-overlay-pattern"></div>
            <section className="section nft-hero" id="hero">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-sm-10">
                            <div className="text-center">
                                <h1 className="display-4 fw-medium mb-4 lh-base text-white">Crafting Memories:</h1>
                                <h2 className="text-success">One Roommate at a Time!</h2>
                                <p className="lead text-white-50 lh-base mb-4 pb-2">Connect with people who get you!
                                    Amazing roommates can turn into awesome friends—sometimes even lifelong ones. That's why we make
                                    sure people are at the center of the adventure.</p>

                                <div className="hstack gap-2 justify-content-center">
                                    <Row>
                                        <Col lg={6} md={6} sm={12} className='text-center'>
                                            <HomeCard name="flatmate" img="assets/img/flatmate.png" />
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                            <HomeCard name="room" img="assets/img/room.jpg" />
                                        </Col>
                                    </Row>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="City">
                <City />
            </section>
            <footer className="custom-footer py-3 position-relative footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 mt-2 text-center">
                            Get in Touch
                        </div>
                        <div className="col-lg-3 col-sm-12 mt-2 text-center">
                            About Us
                        </div>
                        <div className="col-lg-3 col-sm-12 mt-2 text-center">
                            Help and Support
                        </div>
                        <div className="col-lg-3 col-sm-12 mt-2 text-center">
                            Privacy Policy
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Main