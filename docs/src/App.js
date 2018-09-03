import React, { Component } from 'react';
import {Provider as MatchBreakpointsProvider} from 'react-match-breakpoints'

import logo from './logo.svg';
import Page from './Page';
import './App.css';

class App extends Component {
  renameBreakpointsComponent = breakpoint => `${breakpoint}Dupa`

  render() {
    const breakpoints = {
        isMobile: `screen and (max-width: 500px)`,
        isTablet: `screen and (min-width: 501px) and (max-width: 1280px)`,
        isDesktop: `screen and (min-width: 1281px) and (max-width: 1920px)`
    }
    return (
        <MatchBreakpointsProvider breakpoints={breakpoints}>
            <Page />
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        </MatchBreakpointsProvider>
    );
  }
}

export default App;
