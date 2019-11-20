import React from 'react';
import './Menu.css';

const Menu = ({chooseNews}) => {
    return(
        <nav>
            <button type='button' onClick={() => chooseNews('local')} id='local' className='btn'>Local News</button>
            <button type='button' onClick={() => chooseNews('technology')} id='technology' className='btn'>Technology</button>
            <button type='button' onClick={() => chooseNews('entertainment')} id='entertainment' className='btn'>Entertainment</button>
            <button type='button' onClick={() => chooseNews('science')} id='science' className='btn'>Science</button>
            <button type='button' onClick={() => chooseNews('health')} id='health' className='btn'>Health</button>
        </nav>
    )
}

export default Menu;