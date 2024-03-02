import ground from './images/ground.png';
import Rectangle from './images/Rectangle.png'
// import playbutton from './images/playbutton.png'
import Group2 from './images/Group2.png'
import barbutton from './images/barbutton.png'
import bbanana from './images/bbanana.png'
import card from './images/card.png'
import card1 from './images/card1.png'
import card2 from './images/card2.png'
import twocards from './images/twocards.png'

import './App.css';
import { Button,} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="image-container">
          <img src={ground} className="ground-img" alt="groundimg" />
          <div className="group-container">
            <img src={card} className="carda" alt="Card" />
            <img src={card} className="cardb" alt="Card" />
            <img src={card} className="cardc" alt="Card" />
            <img src={card} className="cardd" alt="Card" />
            <img src={card} className="carde" alt="Card" />
            <img src={card} className="cardf" alt="Card" />
            <img src={card1} className="card11" alt="Card1" />
            <img src={card1} className="card12" alt="Card1" />
            <img src={card1} className="card13" alt="Card1" />
            <img src={card1} className="card14" alt="Card1" />
            <img src={card1} className="card15" alt="Card1" />
            <img src={card1} className="card16" alt="Card1" />
            <img src={Group2} className="group2" alt="Group2" />
            <img src={barbutton} className="barbutton" alt="Barbutton" />
            <img src={bbanana} className="bbanana" alt="Bbanana" />
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;
