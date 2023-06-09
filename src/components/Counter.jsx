import React from 'react';
import '../styles/Counter.css';

class Counter extends React.Component {
    render(){
        return (
            <div className='counter'>
                {this.props.clicksNum}
            </div>
        );
    }
}

export default Counter;