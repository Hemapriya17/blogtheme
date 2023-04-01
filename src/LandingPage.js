import React from "react";
import "./asset/css/main.css";
import "./asset/css/bootstrap.min.css";
import "./asset/css/magnific-popup.css";
import "./asset/css/nivo-lightbox.css";
import "./asset/css/owl.carousel.min.css";
import "./asset/css/owl.theme.css";
import "./asset/css/responsive.css";
import "./asset/fonts/line-icons.css";
import "./asset/fonts/LineIcons.eot";
import "./asset/fonts/LineIcons.svg";
import "./asset/fonts/LineIcons.ttf";
import "./asset/fonts/LineIcons.woff";
import "./asset/js/wow";
import "./asset/js/scrolling-nav"

import Main from "./asset/img/main.png";
import About from "./asset/img/about.png";
import SVCET from "./asset/img/institute/svcet.png";
import ACET from "./asset/img/institute/acet.png";
import Mailam from "./asset/img/institute/Mailam.png";

const LandingPage = () => {
  return (
    <div>
      {/* Header Area wrapper Starts */}
      <header id="header-wrap">
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
          <div className="container">
            <a href="index.html" className="navbar-brand">
              <h4 style={{ color: "black"}} className="text-xl font-semibold">
                Test
                <span style={{ color: "black", backgroundColor: "#f1c232" }}>
                  RunZ
                </span>
              </h4>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="lni-menu" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                <li className="nav-item active">
                  <a className="nav-link" href="#hero-area">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#solutions">
                    Solution
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">
                    Feature
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#institute">
                    Institute
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar End */}
        {/* Hero Area Start */}
        <div id="hero-area" className="hero-area-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                <div className="contents">
                  <h4 className="head-title">Digital Experimentation</h4>
                  <p>
                    A web based application that streamlines the experimentation
                    workflow by digitising test steps, post processing of the
                    test data and automatic report generation.
                  </p>
                  <div className="header-button">
                    <a rel="nofollow" href="#" className="btn btn-common">
                      Get Started
                    </a>
                    {/* <a href="https://www.youtube.com/watch?v=r44RKWyfcFw" className="btn btn-border video-popup">Demo Video</a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                <div className="intro-img">
                  <img className="img-fluid" src={Main} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Area End */}
      </header>
      {/* Header Area wrapper End */}

      {/* Solutions Section Start */}
      <section id="solutions" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Our Solutions
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
          </div>
          <div className="row">
            {/* solutions item */}
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="solutions-item wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <div className="icon">
                  <i className="lni lni-search" />
                </div>
                <div className="solutions-content">
                  <h4>Focus on experiments</h4>
                  <p>
                    It frees up the students to focus on the experiments and
                    insights.
                  </p>
                </div>
              </div>
            </div>
            {/* solutions item */}
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="solutions-item wow fadeInRight"
                data-wow-delay="0.6s"
              >
                <div className="icon">
                  <i className="lni-stats-up" />
                </div>
                <div className="solutions-content">
                  <h4>Opportunity</h4>
                  <p>
                    Allows the students to gain practical and industry
                    experience.
                  </p>
                </div>
              </div>
            </div>
            {/* solutions item */}
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="solutions-item wow fadeInRight"
                data-wow-delay="0.9s"
              >
                <div className="icon">
                  <i className="lni-users" />
                </div>
                <div className="solutions-content">
                  <h4>Collaboration</h4>
                  <p>
                    Provides capability for the students and teachers to
                    collaborate in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* solutions Section End */}

      {/* About Section start */}
      <div className="about-area section-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12 info">
              <div
                className="about-wrapper wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <div>
                  <div className="site-heading">
                    <h2 className="section-title">
                      Detailed Statistics of your RunZ
                    </h2>
                  </div>
                  <div className="content">
                    <p>
                      Students carry out experiments with predefined
                      experiments. Streamlines the experimentation and learning
                      process. The Testrunz also provides capability for the
                      students and teachers to collaborate in real time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-xs-12 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <img className="img-fluid" src={About} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* About Section End */}
      {/* Features Section Start */}
      <section id="features" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Awesome Features
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-left">
                <div className="box-item wow fadeInLeft" data-wow-delay="0.3s">
                  <span className="icon">
                    <i className="lni-notepad" />
                  </span>
                  <div className="text">
                    <h4>Procedures</h4>
                    <p>1K+ experimentation procedures are digitalized.</p>
                  </div>
                </div>
                <div className="box-item wow fadeInLeft" data-wow-delay="0.6s">
                  <span className="icon">
                    <i className="lni-cog" />
                  </span>
                  <div className="text">
                    <h4>Notification</h4>
                    <p>
                      Once students submitted their Runz teachers will be
                      notified.
                    </p>
                  </div>
                </div>
                <div className="box-item wow fadeInLeft" data-wow-delay="0.9s">
                  <span className="icon">
                    <i className="lni-download" />
                  </span>
                  <div className="text">
                    <h4>Runz report</h4>
                    <p>
                      Experimentation workflow by digitising test steps and
                      automatic report generation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="show-box wow fadeInUp" data-wow-delay="0.3s">
                <img src="assets/img/feature/intro-mobile.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-right">
                <div className="box-item wow fadeInRight" data-wow-delay="0.3s">
                  <span className="icon">
                    <i className="lni-magnifier" />
                  </span>
                  <div className="text">
                    <h4>Monitoring</h4>
                    <p>
                      Teachers can easily identify the calculation mistakes.
                    </p>
                  </div>
                </div>
                <div className="box-item wow fadeInRight" data-wow-delay="0.6s">
                  <span className="icon">
                    <i className="lni-layers" />
                  </span>
                  <div className="text">
                    <h4>Teams &amp; Collaboration</h4>
                    <p>
                      Invite team members and enables seamless collaboration
                      between students and teachers.
                    </p>
                  </div>
                </div>
                <div className="box-item wow fadeInRight" data-wow-delay="0.9s">
                  <span className="icon">
                    <i className="lni-laptop-phone" />
                  </span>
                  <div className="text">
                    <h4>Time save</h4>
                    <p>
                      No need to calculate the result. Submitted runz shown the
                      actual result.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section End */}
      {/* institute Section Start */}
      <section id="institute" className="institute section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h4 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Participating Institutes
            </h4>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
          </div>
          <div className="row justify-content-center">
            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> */}
              <div
                id="institutes"
                className="wow row fadeInUp institutes"
                data-wow-delay="1.2s"
              >
              <div className="item">
                  <div className="institute-item">
                    <div className="img-thumb">
                      <img src={ACET} alt="" />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="institute-item">
                    <div className="img-thumb">
                      <img src={Mailam} alt="" />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="institute-item">
                    <div className="img-thumb">
                      <img src={SVCET} alt="" />
                    </div>
                  </div>
                </div>
                {/* <div className="item">
                  <div className="institute-item">
                    <div className="img-thumb">
                      <img src="assets/img/institute/Mailam.png" alt="" />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
      {/* institute Section End */}
      {/* Contact Section Start */}
      <section id="contact" className="section-padding bg-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Contact Us
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
          </div>
          <div className="contact-form-area wow fadeInUp" data-wow-delay="0.3s">
              {/* Call To Action Section Start */}
              <section id="cta" className="section-padding">
                <div className="container">
                    <div className="cta-text">
                      <form id="contactForm" className="contactForm">
                        <div className="flex flex-wrap">
                          <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                            <div className="mx-3">
                              <input
                                type="text"
                                className="form-input rounded-full"
                                id="name"
                                name="name"
                                placeholder="Name"
                                required
                                data-error="Please enter your name"
                              />
                            </div>
                          </div>
                          <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                            <div className="mx-3">
                              <input
                                type="text"
                                placeholder="Email"
                                id="email"
                                className="form-input rounded-full"
                                name="email"
                                required
                                data-error="Please enter your email"
                              />
                            </div>
                          </div>
                          <div className="w-full"></div>
                          <div className="w-full">
                            <div className="mx-3">
                              <textarea
                                className="form-input rounded-lg"
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                rows={4}
                                data-error="Write your message"
                              />
                            </div>
                          </div>
                          <div className="w-full">
                            <div className="submit-button mx-3">
                              <button
                                className="text-white border-0 bg-yellow-600 rounded-full duration-300"
                                id="form-submit"
                                type="submit"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                </div>
              </section>
              {/* Call To Action Section Start */}
            </div>
          
        </div>
      </section>
      {/* Contact Section End */}
      {/* Footer Section Start */}
      <footer id="footer" className="footer-area section-padding">
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <div className="widget">
                  <h4 className="text-xl font-semibold">
                    Test
                    <span
                      style={{ color: "black", backgroundColor: "#f1c232" }}
                    >
                      RunZ
                    </span>
                  </h4>
                  <div className="textwidget">
                    <p>
                      To prepare the scientists of tomorrow. Testrunz helps
                      students carry out their laboratory experiments with the
                      predefined test procedure and experiment libraries. Allows
                      the students to gain practical and industry experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12" />
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <h4 className="footer-titel">About us</h4>
                <ul className="footer-link">
                  <li>
                    <a href="#solutions">Solution</a>
                  </li>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#">Clients</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <h4 className="footer-titel">Find us on</h4>
                <div className="social-icon">
                  <a className="facebook" href="#">
                    <i className="lni-facebook-filled" />
                  </a>
                  <a className="twitter" href="#">
                    <i className="lni-twitter-filled" />
                  </a>
                  <a className="instagram" href="#">
                    <i className="lni-instagram-filled" />
                  </a>
                  <a className="linkedin" href="#">
                    <i className="lni-linkedin-filled" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-content">
                  <p>
                    2023 ©
                    <a
                      className="text-green-600"
                      rel="nofollow"
                      href="http://learnytech.com/"
                    >
                      Learnytech
                    </a>
                    All Right Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
      {/* Go to Top Link */}
      <a href="#" className="back-to-top">
        <i className="lni-arrow-up" />
      </a>
      {/* Preloader 
  <div id="preloader">
    <div className="loader" id="loader-1" />
  </div>
 End Preloader */}
 <script src="./assets/js/jquery-min.js"></script>
    <script src="./assets/js/popper.min.js"></script>
    <script src="./assets/js/bootstrap.min.js"></script>
    <script src="./assets/js/owl.carousel.min.js"></script>
    <script src="./assets/js/wow.js"></script>
    <script src="./assets/js/jquery.nav.js"></script>
    <script src="./assets/js/scrolling-nav.js"></script>
    <script src="./assets/js/jquery.easing.min.js"></script>
    <script src="./assets/js/jquery.counterup.min.js"></script>
    <script src="./assets/js/waypoints.min.js"></script>
    <script src="./assets/js/main.js"></script>
    </div>
  );
};

export default LandingPage;
