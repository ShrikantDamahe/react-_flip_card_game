import React from 'react';
import mainimg from '../images/mainimg.png';
import Group1 from '../images/Group1.png';
import Group2 from '../images/Group2.png';

const SecondPage = ({ setCurrentPage }) => {
  const handleNext = () => {
    setCurrentPage('/my-game/src/pages/ThirdPage.js');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="image-container">
          <img src={mainimg} className="main-img" alt="mainimg" />
          <div className="group-container">
            <img src={Group1} className="group1" alt="Group1" />
            <img src={Group2} className="group2" alt="Group2" />
            <div className="text-overlay"><h4>Hi, I am Mizo! and I love bananas</h4></div>
            <button onClick={handleNext} className="btn">
              Next
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SecondPage;

