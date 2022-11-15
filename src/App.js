import './App.css';
import bean from "./Images/beanofpatch.png";
import buy3 from "./Images/buy2.jpg";
import music from "./Images/liveMusic.jpg";
import mic from "./Images/OpenMic.jpg"
import conferance from "./Images/Conferance.jpg"
import localArtist from "./Images/anotherOpenMic.jpg"
import bake from "./Images/bakeContest.jpg"
import culture from "./Images/worldCoffee.jpg"
import wifi from './Images/freeWifi.png';
import bean2 from './Images/BayShoreBean.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect } from 'react';

let i;
let slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex =n);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

  function viewMenu() {
    const menu = document.querySelector(".links");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }


const useIt = () => {
  useEffect(() => {
    showSlides(slideIndex)
  })
}

function App() {
  useIt();
  return (
    <div>
      <div className="social">
        <h6>Catch us on Social Media:</h6>
        <a data-hover="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a data-hover="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a data-hover="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a data-hover="TikTok">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
      <nav className='regularMenu'>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
          <img src={bean} alt="coffee" />
          <li>
            <a>Locations</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </nav>
      <nav className='mobileMenu hideMenu'>      
        <div className='heading'>
          <div>
            <img src={bean} alt="coffee" />
            <a href="#home">The Bean of Patchogue</a>
          </div>
          <a onClick={() => viewMenu()}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
        <div className='links'>
          <a href='#gfg1'>Menu</a>
          <a href='#gfg1'>Locations</a>
          <a href='#gfg1'>About Us</a>
        </div>
      </nav>
      <div className="firstSection">
        <div className="mySlides fade">
          <div className="numberText">1 / 3</div>
          <img src={buy3} alt="buy3get1" />
          <h3 className="text">Nobody likes monday's, so we made it better</h3>
        </div>
        <div className="mySlides fade">
          <div className="numberText">2 / 3</div>
          <img src={music} alt="liveMusic" />
          <h3 className="text">Sit back and relax to the music</h3>
        </div>
        <div className="mySlides fade">
          <div className="numberText">3 / 3</div>
          <img src={mic} alt="openMic" />
          <h3 className="text">Show us your talent tonight</h3>
        </div>
        <a className="prev" onClick={() => plusSlides(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
      <div className="dots">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
      <div className="secondSection">
        <div className="test">
          <div className="cubeInfo">
            <h5>Local Artist</h5>
            <img src={localArtist} alt="local artist singing" />
          </div>
          <h6 className="textBox">
            All local artist are welcome to sign up to bring your talent to the
            rest of our local community!
          </h6>
        </div>
        <div className="test">
          <div className="cubeInfo">
            <img src={bake} alt="Backing contest" />
            <h5>Bake Contest</h5>
          </div>
          <h6 className="textBox">
            Every Thursday we invite all bakers to bring there aprons and
            measuring cups to go for the chance of a winning prize of $200.
            Bring your best dessert!
          </h6>
        </div>
        <div className="test">
          <div className="cubeInfo">
            <h5>Private Conference</h5>
            <img src={conferance} alt="Studying conferance table" />
          </div>
          <h6 className="textBox">
            Schedule your next study group or business meeting in our large
            sitting table. Our stress free enviroment gives a change of scenary
            to help a new perspective.
          </h6>
        </div>
      </div>
      <div className="thirdSection">
        <img src={culture} alt="Diverse coffee from around the world" />
        <h2>Bringing the world to you, We bring different variety</h2>
      </div>
      <div className="top-footer">
        <img className="bean2 topFooterChild" src={bean2} />
        <div className="topFooterChild">
          <h5>CONTACT INFORMATION</h5>
          <br />
          47 East Main Street
          <br />
          Bay Shore, NY 11706
          <br />
          P:(631)647-7971
          <br />
          E: info@bayshorebean.com
          <br />
          <br />
          <h5>OPENING TIMES</h5>
          <br />
          Mon-Tue-Thu 6:00AM - 11:00PM
          <br />
          Wed 6:00AM - 11:00PM
          <br />
          Fri-Sat 6:00AM - 12:00PM
          <br />
          Sun 6:00AM - 8:30PM
        </div>
        <div className="map topFooterChild">
          <h5>MAP & LOCATION</h5>
          <br />
          <img
            src={mic}
            // src="https://maps.googleapis.com/maps/api/staticmap?center=bay+shore+bean&zoom=13&scale=2&size=400x200&maptype=roadmap&format=png&key={API__KEY}&markers=size:mid%7Ccolor:0x8e4e1a%7Clabel:1%7Cbay%20shore%20bean"
            alt="Google map of bay shore bean"
          />
        </div>
        <img className="wifiPic topFooterChild" src={wifi} />
      </div>
      <footer>
        <h5>Copyright @ 2022 | Web Designed by: Carlos Coreas</h5>
      </footer>
    </div>
  );
}

export default App;
