import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header>
            <h1>What's New?</h1>
            <input type='text' className='search-bar-input' placeholder='Search for News Articles Here'/> 
            <button type='button' className='search-bar-btn'>Search Now</button>
        </header>
    )
}

export default Header