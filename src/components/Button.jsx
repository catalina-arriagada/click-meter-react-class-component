import React from 'react';
import '../styles/Button.css';

class Button extends React.Component {
  render() {
    return (
      <button className={this.props.isClickBtn ? 'btn-click' : 'btn-reboot'} 
              onClick={this.props.manageClick}>
        {this.props.text}
      </button>
    ); 
  }
}

export default Button;