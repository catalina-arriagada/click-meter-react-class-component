import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';
import { getImage } from './utils/utils';

function App() {
  //Hooks. useState adds states. setClicksNumber is another state
  const [clicksNum, setClicksNumber] = useState(0); //0 is an initial value

  const doClick = () => {
    //function returns this
    setClicksNumber(clicksNum + 1);
  };  

  const rebootCounter = () => {
    setClicksNumber(0);
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img src={getImage()} alt='logo' className='logo' />
      </div>
      <div className='main-container'>
        <Counter
          clicksNum={clicksNum}
          />
        <Button
          text='Click'
          isClickBtn= {true}
          manageClick= {doClick}
         />
        <Button
          text='Reboot'
          isClickBtn= {false}
          manageClick= {rebootCounter}
         />
      </div>
    </div>
  );
};

export default App;
