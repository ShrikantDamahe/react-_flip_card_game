import ground from './images/ground.png';
import Rectangle from './images/Rectangle.png'
import playbutton from './images/playbutton.png'
import Group2 from './images/Group2.png'
import barbutton from './images/barbutton.png'
import bbanana from './images/bbanana.png'
import card from './images/card.png'
import card1 from './images/card1.png'
import card2 from './images/card2.png'
import twocards from './images/twocards.png'

import './App.css';
import { Button,} from 'react-bootstrap';

function ForthPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="image-container">
          <img src={ground} className="ground-img" alt="groundimg" />
          <div className="group-container">
            <img src={Rectangle} className="rectangle" alt="Rectangle" />
            <img src={Rectangle} className="rectangle1" alt="Rectangle" />
            <img src={Rectangle} className="rectangle2" alt="Rectangle" />
            <img src={card} className="card" alt="Card" />
            <img src={card1} className="card1" alt="Card1" />
            <img src={card2} className="card2" alt="Card2" />
            <img src={twocards} className="Twocards" alt="Twocards" />
            <img src={Group2} className="group2" alt="Group2" />
            <img src={barbutton} className="barbutton" alt="Barbutton" />
            <img src={bbanana} className="bbanana" alt="Bbanana" />
            <div className="text-1"><h4>Select a pink card</h4></div>
            <div className="text-2"><h4>Select a blue card</h4></div>
            <div className="text-3"><h4>its a match</h4></div>
            <button><img src={playbutton} alt="click" onClick={Button} /></button>

          </div>
        </div>
      </header>
    </div>
  );
}
export default ForthPage;
