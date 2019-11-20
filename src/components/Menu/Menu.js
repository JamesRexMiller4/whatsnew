import React from 'react';
import './Menu.css';

const Menu = ({chooseNews}) => {
    return(
        <nav>
            <button type='button' onClick={chooseNews} className='btn'>Local News</button>
            <button type='button' onClick={chooseNews} className='btn'>Technology</button>
            <button type='button' onClick={chooseNews} className='btn'>Entertainment</button>
            <button type='button' onClick={chooseNews} className='btn'>Science</button>
            <button type='button' onClick={chooseNews} className='btn'>Health</button>
        </nav>
    )
}

export default Menu;