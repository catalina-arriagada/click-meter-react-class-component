import React from 'react';
import '../styles/Counter.css';

function Counter({ clicksNum }) {
    return (
        <div className='counter'>
            {clicksNum}
        </div>
    );
};

export default Counter;