import React, {Component} from 'react';
import './header.css';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            query: ''
        }
    }

    handleChange = event => {
        this.setState({query: event.target.value})
    }

    submitQuery = () => {
        const query = this.state
        this.props.filterNews(query)
        document.querySelector('#search-bar').value = ''
        this.setState({query: ''})
    }


    render() {
        return (
            <header>
                <form>
                <h1>What's New?</h1>
                <input type='text' id='search-bar' onChange={event => this.handleChange(event)} className='search-bar-input' placeholder='Search for news articles here'/> 
                <button type='button' className='search-bar-btn' onClick={event => this.submitQuery()}>Search Now</button>
                </form>
            </header>
        )
    }
}

export default Header