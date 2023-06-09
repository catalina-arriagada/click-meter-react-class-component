import React from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { getImage } from './utils/utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      clicksNum : 0
    };
    this.doClick = this.doClick.bind(this);
    this.rebootCounter = this.rebootCounter.bind(this);
  }

  doClick() {
    this.setState(({ clicksNum }) => ( { clicksNum: clicksNum + 1 }));
  }

  rebootCounter() {
    this.setState({ clicksNum : 0 });
  }

  render(){
    return (
      <div className='App'>
        <div className='logo-container'>
          <img src={getImage()} alt='logo' className='logo' />
        </div>
        <div className='main-container'>
          <Counter
            clicksNum={this.state.clicksNum}
            />
          <Button
            text='Click'
            isClickBtn= {true}
            manageClick= {this.doClick}
           />
          <Button
            text='Reboot'
            isClickBtn= {false}
            manageClick= {this.rebootCounter}
           />
        </div>
      </div>
    );
  }
}

export default App;
