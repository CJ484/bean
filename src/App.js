import './App.css';
import bean from "./Images/beanofpatch.png";
import buy3 from "./Images/buy3get1.jpg";
import music from "./Images/liveMusic.jpeg";
import mic from "./Images/OpenMic.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"

function App() {
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
        <a className='next'><FontAwesomeIcon icon={faChevronRight}/></a>
        <a className='prev'><FontAwesomeIcon icon={faChevronLeft}/></a>
      </div>
      <br/>
      <div>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
      </div>

      <div className='secondSection'>
        <div className='cubeInfo'>
          <h5>Local Artist</h5>
        </div>
        <div className='cubeInfo'>
          <h5>Bake Contest</h5>
        </div>
        <div className='cubeInfo'>
          <h5>Private Conference</h5>
        </div>
      </div>
      <div className='thirdSection'>
        <h2>Bringing the world to you, We bring different variety</h2>
      </div>
      <footer>
        <h5>Copyright @ 2022 | Web Designed by: Carlos Coreas</h5>
      </footer>
    </div>
  );
}

export default App;
