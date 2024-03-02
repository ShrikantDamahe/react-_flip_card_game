
import React from 'react';
import mainimg from '../images/mainimg.png';
import Group1 from '../images/Group1.png';
import Group2 from '../images/Group2.png';
import barbutton from '../images/barbutton.png';
import bbanana from '../images/bbanana.png';

const ThirdPage = ({ setCurrentPage }) => {
  const handlePlay = () => {
    setCurrentPage('/game');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="image-container">
          <img src={mainimg} className="main-img" alt="mainimg" />
          <div className="group-container">
            <img src={Group1} className="group1" alt="Group1" />
            <img src={Group2} className="group2" alt="Group2" />
            <img src={barbutton} className="barbutton" alt="Barbutton" />
            <img src={bbanana} className="bbanana" alt="Bbanana" />
            <div className="text-overlay"><h4>Can you help me to get me some</h4></div>
            <button onClick={handlePlay} className="btn">
              Play
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ThirdPage;
