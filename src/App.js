import './App.css';
import bean from "./Images/beanofpatch.png";
import buy3 from "./Images/buy2.jpg";
import music from "./Images/liveMusic.jpg";
import mic from "./Images/OpenMic.jpg"
import conferance from "./Images/Conferance.jpg"
import localArtist from "./Images/anotherOpenMic.jpg"
import bake from "./Images/bakeContest.jpg"
import culture from "./Images/worldCoffee.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
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


const useIt = () => {
  useEffect(() => {
    showSlides(slideIndex)
  })
}

function App() {
  useIt();
  return (
    <div>
      <nav>
        <ul>
          <li><a>Home</a></li>
          <li><a>Menu</a></li>
          <img src={bean} alt='coffee'/>
          <li><a>Locations</a></li>
          <li><a>About Us</a></li>
        </ul>
      </nav>
      <div className='firstSection'>
        <div className='mySlides fade'>
          <div className='numberText'>1 / 3</div>
          <img src={buy3} alt='buy3get1'/>
          <h3 className='text'>Nobody likes monday's so we made it better</h3>
        </div>
        <div className='mySlides fade'>
          <div className='numberText'>2 / 3</div>
          <img src={music} alt='liveMusic'/>
          <h3 className='text'>Sit back and relax to the music</h3>
        </div>
        <div className='mySlides fade'>
          <div className='numberText'>3 / 3</div>
          <img src={mic} alt='openMic'/>
          <h3 className='text'>Show us your talent tonight</h3>
        </div>
        <a className='prev' onClick={() => plusSlides(-1)}><FontAwesomeIcon icon={faChevronLeft}/></a>
        <a className='next' onClick={() => plusSlides(1)}><FontAwesomeIcon icon={faChevronRight}/></a>
      </div>
      <div className='dots'>
        <span className='dot' onClick={() => currentSlide(1)}></span>
        <span className='dot' onClick={() => currentSlide(2)}></span>
        <span className='dot' onClick={() => currentSlide(3)}></span>
      </div>
      <div className='secondSection'>
        <div className='cubeInfo'>
          <h5>Local Artist</h5>
          <img src={localArtist} alt='local artist singing' />
        </div>
        <div className='cubeInfo'>
          <img src={bake} alt="Backing contest" />
          <h5>Bake Contest</h5>
        </div>
        <div className='cubeInfo'>
          <h5>Private Conference</h5>
          <img src={conferance} alt="Studying conferance table" />
        </div>
      </div>
      <div className='thirdSection'>
        <img src={culture} alt="Diverse coffee from around the world" />
        <h2>Bringing the world to you, We bring different variety</h2>
      </div>
      <footer>
        <h5>Copyright @ 2022 | Web Designed by: Carlos Coreas</h5>
      </footer>
    </div>
  );
}

export default App;
