# React Match Breakpoints [![Build Status](https://travis-ci.org/michalklim/react-match-breakpoints.svg?branch=master)](https://travis-ci.org/michalklim/react-match-breakpoints)

Lightweight and easy to use media query library for React. Define your media query breakpoints once and use them as components or props across your application.

## Table of Contents

* [Motivation](#motivation)
* [Installation](#installation)
* [Usage](#usage)
* [Examples](#examples)
* [Browser Support](#browser-support)
* [Roadmap](#roadmap)
* [License](#license)

## Motivation

TODO

## Installation

```console
$ npm install react-match-breakpoints --save
$ yarn add react-match-breakpoints
```

## Usage

### Basic usage
First, you have to include Provider that expects object which you have to create using `createBreakpoints` method. 
`createBreakpoints` method accepts object which keys are breakpoint names and values are media query strings

```jsx
// index.js

import React from 'react'
import {Provider as BreakpointsProvider, createBreakpoints} from 'react-match-breakpoints'
import App from './App'

const mediaQueries = {
  isMobile: 'screen and (max-width: 767px)',
  isTablet: 'screen and (min-width: 768px) and (max-width: 1024px)'
}

const breakpoints = createBreakpoints(mediaQueries)

ReactDOM.render(
  <BreakpointsProvider breakpoints={breakpoints}>
    <App />
  </BreakpointsProvider>,
  document.getElementById('root'),
)
```

Now you can access your defined breakpoints either using `withBreakpoints` HOC or by using `Breakpoints` component. 
`withBreakpoints` hoc will provide breakpoints prop to wrapped component which holds up to date  state of your breakpoints.
`Breakpoints` component give you access to you breakpoints as its properties (it will automatically capitalize breakpoints names)

```jsx
// App.js
import React, {Component} from 'react'
import {Breakpoints, withBreakpoints} from 'react-match-breakpoints'

class App extends Component {
  componentDidMount() {
    const {breakpoints} = this.props
    
    if(breakpoints.isTablet) {
      // do something when isTablet breakpoint is being matched
    }
  }
  render() {
    <div className="container">
      // Note that component name is capitalized      
      <Breakpoints.IsMobile>
        // children will be rendered only when isMobile breakpoint is being matched
        I'm mobile device!
      </Breakpoints.IsMobile>
            
      Hello world
    </div>
  }
}

export default withBreakpoints(App)
```

### Customize components names

You can customize names of `Breakpoints` components, by providing function to `crateBreakpoints` method as a second argument.
This function will be invoked during each component creation with default breakpoint name as argument

```jsx
import React from 'react'
import {Provider as BreakpointsProvider, createBreakpoints, Breakpoints} from 'react-match-breakpoints'
import capitalize from 'utils'

const mediaQueries = {
  isMobile: 'screen and (max-width: 767px)',
  isTablet: 'screen and (min-width: 768px) and (max-width: 1024px)'
}

const renameFn = breakpointName => capitalize(breakPointName.replace('is', ''))

const breakpoints = createBreakpoints(mediaQueries, renameFn)

const App = () => (
  <div>
    <Breakpoints.Mobile>
      // will work as usual
    </Breakpoints.Mobile>
  </div>
)

ReactDOM.render(
  <BreakpointsProvider breakpoints={breakpoints}>
    <App />
  </BreakpointsProvider>,
  document.getElementById('root'),
)

```

## Examples

TODO

## Browser Support

Basically every if you include [matchMedia polyfill](https://github.com/paulirish/matchMedia.js/)

**Note:** on browser that don't support Proxy object you won't see warnings when you will try to access Breakpoints components that are not defined

## Roadmap

* Provide workable examples
* Debug feature
* Possibilty to provide media query as object and not only as string
* Flow support

## License
[MIT](https://github.com/michalklim/react-match-breakpoints/blob/master/LICENSE)