import mainimg from './images/mainimg.png';
import Group1 from './images/Group1.png';
// import startimg from './images/startimg.png';
import './App.css';
// import { Button,} from 'react-bootstrap';

// function App() {
  const StartPage = ({setCurrentPage }) => {
    const handleStartGame = () => {
      setCurrentPage('/pages/SecondPage.js');
    };
  return (
    <div className="App">
      <header className="App-header">
        <div className="image-container">
          <img src={mainimg} className="main-img" alt="mainimg" />
          <div className="group-container">
            <img src={Group1} className="group1" alt="Group1" />
            <div className="text-overlay"><h4>Welcome Kiddo !</h4></div>
            <div className="btn-container">
        <button onClick={handleStartGame} className="btn">
          Start Game
        </button>
            {/* <button><img src={startimg} alt="click" onClick={Button} /></button> */}
        </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default StartPage;



// FirstPage.js
// import React from 'react';
// import mainimg from './images/mainimg.png';
// import Group1 from './images/Group1.png';

// const FirstPage = ({ setCurrentPage }) => {
//   const handleStartGame = () => {
//     setCurrentPage('/SecondPage');
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="image-container">
//           <img src={mainimg} className="main-img" alt="mainimg" />
//           <div className="group-container">
//             <img src={Group1} className="group1" alt="Group1" />
//             <div className="text-overlay"><h4>Welcome Kiddo!</h4></div>
//             <button onClick={handleStartGame} className="btn">
//               Game
//             </button>
//           </div>
//         </div>
        
//       </header>
//     </div>
//   );
// };

// export default FirstPage;
