import React from 'react';
import logo from '../assets/images/logo-nba.svg';

class TopBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        );
    }
}

export default TopBar;