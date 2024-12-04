
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';

/* Animation */
import Lottie  from 'lottie-react';

import animationData from './Animation/Animation - 1732126246701.json'; // Chemin vers le fichier JSON


/* Video */
import BackgroundVideo from './video/background.mp4';
import arrowdown from './video/arrowdown.mp4';


/* Import Images */
import mexico from './image/mexico.png';
import travelwhite from './image/travel-white.png';
import travelm from './image/travelm.png';
import passport_icon from './image/passport_icon.png';
import arrow from './image/arrow.svg';
import airplane from './image/airplane.png';
import enfants from './image/enfants.png';
import cartons from './image/cartons.png';
import papiers from './image/papiers.png';
import société from './image/société.png';
import HR from './image/HR.png';
import famille from './image/famille.png';
import homme from './image/homme.png';
import Bank from './image/Bank.svg';

import Truck from './image/Truck.svg';
import single from './image/single.png';
import building from './image/building.png';
import family from './image/family.png';
import seul from './image/seul.png';
import bat from './image/bat.png';
import Team from './image/Team.png';
import Family2 from './image/Family2.png';

import philou from './image/Philou.png';
import celeste from './image/celeste.png';
import jo from './image/jo.png';
import theo from './image/theo.png';




const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  
  
  const smoothScrollTo = (targetPosition, duration = 1000) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Limite entre 0 et 1
  
      // Ease-in-out animation
      const ease = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
  
      window.scrollTo(0, startPosition + distance * ease);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
  
    requestAnimationFrame(animation);
  };
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      if (event.target.tagName === "A" && event.target.getAttribute("href").startsWith("#")) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };
  
    document.addEventListener("click", handleSmoothScroll);
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);




  return (
    <div className="app">
      {/* Vidéo de fond */}
      <div className="video-container">
        <video autoPlay loop muted className="video-background">
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

     

      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg navbar-light ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            GoExpat
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#destinations">
                  Destinations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Section Hero */}
      <header id= "Home" className="hero-section text-center text-lg-start">
        <div className="container d-lg-flex align-items-center py-5">
          <div className="hero-text col-lg-6">
            <h1 className="display-4 fw-bold">
              {/* Make international mobility easier with GoExpat*/}
              Make your Mexican mobility come true with GoExpat
            </h1>
            <p className="lead">
              Feel comfortable and supported during your international mobility.
               Turn your mobility in a sucessfull integration.
            </p>
            <div className="mt-4">
              <a href="#contact" className="btn btn-dark btn-lg me-3">
                Contact Us
              </a>
              <a href="#contact" className="btn btn-outline-white btn-lg">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-image col-lg-6 mt-4 mt-lg-0">
            {/*<img src={travelm} alt="Hero" className="img-fluid" />*/}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">

       {/* Animation Lottie */}
       <Lottie
          animationData={animationData}
          loop={true} // Définit si l'animation doit boucler
          style={{ width: '150px' }} // Ajuste la taille et position
        />
          
        </div>
      </header>

      {/* Section Options */}
      <section className="options-section blur-background ">
        <div className="container">
        <h2 className="title-section-option" style={{ color: '#f6f6f6' }}> How can we support your mobility ?</h2>
          <div className="row text-center">
            <div className="col-md-4"style={{ color: '#f6f6f6' }}>
            <img
                src={papiers}
                alt="admin_support"
                className="mb-3"
                style={{ width: '75px' }}
              />
              <h5>Administrative support</h5>
              <p>All the administration you need</p>
            </div>
            <div className="col-md-4" style={{ color: '#f6f6f6' }}>
              <img
                src={cartons}
                alt="Moving_assistance"
                className="mb-3"
                style={{ width: '75px' }}
              />
              <h5>Moving assistance</h5>
              <p>Container customs clearance and vehicle rental</p>
            </div>
            <div className="col-md-4"style={{ color: '#f6f6f6' }}>
              <img
                src={enfants}
                alt="school_finding"
                className="mb-3"
                style={{ width: '75px' }}
              />
              <h5>School finding</h5>
              <p>We advise you on schools and simplify the process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Destinations */}
      <section id="destinations" className="destinations-section py-5 ">
        <div className="container py-5 ">
         <h3 className="modern-title"> Our service taylored for who you are </h3>
          <div className="row py-5">
            <div className="col-md-4">
              <div className="card  ">
               <img
                 src={Team} alt="Hero" 
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title py-3">I'm a company</h5>
                  <p className="white-light who">We support businesses in managing 
                    the international mobility of their employees. From administrative 
                    formalities to customs clearance and school searches, we handle it 
                    all so you can focus on your core operations.</p>
                </div>
                     <div className="d-flex justify-content-center ">
                       <a href="#contact" className="btn btn-dark btn-lg me-1 mb-3">
                            Learn more
                        </a>
                      </div>
              </div>
            </div>
            {/*<div className="col-md-3">
              <div className="card ">
                <img
                  src={HR} alt="Hero" className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title white">I'm from H/ Ressources</h5>
                  <p className="white">Streamline your international mobility processes! 
                    We partner with you to ensure a seamless and stress-free transition 
                    for your employees, covering everything from visas to school placements.</p>
                </div>
                      <div className="d-flex justify-content-center mt-4">
                       <a href="#join" className="btn btn-dark btn-lg me-1">
                            Learn more
                        </a>
                      </div>
              </div>
            </div>*/}
            <div className="col-md-4">
              <div className="card ">
                <img
                 src={seul} alt="Hero" 
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title py-3">I come by myself</h5>
                  <p className="white-light who">Starting fresh abroad? We take care 
                    of your administrative tasks, housing, and mobility needs, 
                    ensuring you can settle in smoothly and enjoy your new life 
                    hassle-free.</p>
                   
                </div>
                      <div className="d-flex justify-content-center mt-4">
                       <a href="#contact" className="btn btn-dark btn-lg me-1 mb-3">
                            Learn more
                        </a>
                      </div>
              </div>
            </div>
            <div className="col-md-4">
              
              <div className="card ">
              <img
                 src={Family2} alt="Hero" 
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title py-3">I come with my family</h5>
                  <p className="white-light who">Relocating with your family? We make the 
                    transition easier by managing administrative tasks, finding the 
                    right schools, and securing housing tailored to your needs. Your 
                    peace of mind is our priority.</p>
                </div>
                      <div className="d-flex justify-content-center mt-4">
                       <a href="#contact" className="btn btn-dark btn-lg me-1 mb-3">
                            Learn more
                        </a>
                      </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Section Avis Clients */}
<section className="testimonials-section py-5">
  <div className="container py-5">
    <h2 className="section-title text-center mb-4 text-white">What Our Clients Say</h2>
    <p className="section-description text-center mb-5 text-light">
      See how we've helped our clients navigate their international moves.
    </p>
    <div className="row">
      <div className="col-md-4">
        <div className="card-testi bg-light shadow-sm">
          <div className="card-body text-center">
            <p className="card-text-testi">
              "GoExpat made our family's move to Mexico seamless! From finding schools to handling all the paperwork, we couldn't have done it without them."
            </p>
            <h5 className="card-title-testi mt-3">- Sarah J., Family Relocation</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card-testi bg-light shadow-sm">
          <div className="card-body text-center">
            <p className="card-text-testi">
              "As an HR manager, partnering with GoExpat was the best decision for our company. They handled everything for our employees relocating abroad."
            </p>
            <h5 className="card-title-testi mt-3">- Mark T., HR Manager</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card-testi bg-light shadow-sm">
          <div className="card-body text-center">
            <p className="card-text-testi">
              "Moving alone was daunting, but GoExpat took care of every detail, allowing me to focus on starting my new job stress-free."
            </p>
            <h5 className="card-title-testi mt-3">- Emily R., Individual Expat</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



{/* Section Qui Sommes-Nous */}
<section id="about" className="about-section py-5">
  <div className="container py-5">
  <h2 className="section-title text-center mb-4 text-white">Who We Are</h2>
  <p className="section-description text-center mb-5 text-light ">
      GoExpat is your trusted partner for seamless international mobility.  
      With years of experience, we ensure your transition abroad is stress-free.
    </p>
    <div className="row align-items-center">
      {/* Bloc carré pour les profils à gauche */}
      <div className="col-md-6">
        <div className="row">
          {/* Profil 1 */}
          <div className="col-6 mb-3">
            <div className="card  text-light shadow-lg">
              <img 
                src= {celeste}
                alt="Creator 1" 
                className="card-img-top rounded-circle p-3 mx-auto image-black-and-white" 
                style={{ width: "200px", height: "200px" }}
              />
              {/* style={{ width: "200px", height: "200px" }}*/}
              <div className="card-body text-center">
                <h5 className="card-title">Celestin Veto</h5>
                <p className="card-text">CEO & Founder</p>
              </div>
            </div>
          </div>
          {/* Profil 2 */}
          <div className="col-6 mb-3">
            <div className="card text-light shadow-lg">
              <img 
                src= {philou}
                alt="Creator 2" 
                className="card-img-top rounded-circle p-3 mx-auto image-black-and-white" 
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Philippine Sarther</h5>
                <p className="card-text">Head of Operations</p>
              </div>
            </div>
          </div>
          {/* Profil 3 */}
          <div className="col-6 mb-3">
            <div className="card text-light shadow-lg">
              <img 
                src= {jo}
                alt="Creator 3" 
                className="card-img-top rounded-circle p-3 mx-auto image-black-and-white" 
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Josephine Louis</h5>
                <p className="card-text">Chief Marketing Officer</p>
              </div>
            </div>
          </div>
          {/* Profil 4 */}
          <div className="col-6 mb-3">
            <div className="card text-light shadow-lg">
              <img 
                src= {theo}
                alt="Creator 4" 
                className="card-img-top rounded-circle p-3 mx-auto image-black-and-white" 
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Theodore Leridon</h5>
                <p className="card-text">IT Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Texte à droite */}
      <div className="col-md-6 text-light about-texte-droite ">
        <h3 className="mb-3 text-droite-title">Our Mission</h3>
        <p classname="text-droite">
          At GoExpat, we aim to simplify international relocation for families, individuals, and businesses. 
          From administrative support to finding the right schools or housing, 
          our mission is to make every step of your journey abroad effortless.
        </p>
        <div classname="why-choose-us py-5">
        <h3 className="mt-4 mb-3 text-droite-title ">Why Choose Us?</h3>
        <ul classname="text-droite">
          <li>Personalized services tailored to your needs.</li>
          <li>Expertise in administrative formalities and customs processes.</li>
          <li>A dedicated team passionate about your success abroad.</li>
        </ul>
        </div>
        <div className="mt-4">
          <a href="#contact" className="btn btn-dark btn-lg me-3">
            Contact Us
          </a>
          <a href="#contact" className="btn btn-outline-light btn-lg">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



     {/* Section Contact */}
     <section id="contact" className="contact-section py-5">
  <div className="container py-5">
    <h2 className="section-title text-center mb-4">Get in Touch</h2>
    <p className="section-description text-center mb-5">
      We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
    </p>
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8">
        <div className="contact-form p-4">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" id="name" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" id="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea id="message" className="form-control" rows="4" placeholder="Write your message"></textarea>
            </div>
            <div className="text-center">
              <a  href="mailto:contact@goexpat.com" className="btn btn-primary px-5 py-2">Send Message</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
      </section>




      {/* Footer */}
      <footer className="py-4 bg-dark text-light text-center">
        <div className="container">
          <p>© 2024 GoExpat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;