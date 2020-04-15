<div align="center">
  <a href="https://www.styled-components.com">
    <img alt="react-match-breakpoints" src="https://raw.githubusercontent.com/michalklim/react-match-breakpoints/master/rmb-social-logo.jpg" height="200px" />
  </a>
  
  <br />
  
  <h1>React Match Breakpoints</h1>
  
  <strong>Lightweight, performant and easy to use media query library for React. Define your whatever media query configuration once and use it across project either as components or simply as an object.</strong>
</div>

[![Build Status](https://travis-ci.org/michalklim/react-match-breakpoints.svg?branch=master)](https://travis-ci.org/michalklim/react-match-breakpoints) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Table of Contents

- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Browser Support](#browser-support)
- [Roadmap](#roadmap)
- [License](#license)

## Motivation

React Match Breakpoints **(RMB)** goal is to provide a consistent way of handling responsiveness in you React app.
Though similar in some ways to other solutions like [react-responsive](https://github.com/contra/react-responsive) or [react-media](https://github.com/ReactTraining/react-media)
RMB differs in core concepts:

- You should be able to use RMB with ease both as React components and HOC function.
  Regardless in what way you will be using RMB, your breakpoints configuration should be SSOT.

- RMB should make no assumptions regarding how you media queries should look like.
  RMB is built on top of [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API so you can pass any media query
  string that is handled by it. This approach gives you a lot of flexibility and works great with solutions like [styled-components](https://github.com/styled-components/styled-components) since
  you can declare your media queries once and use them both in your styles and layout.

## Installation

```console
$ npm install react-match-breakpoints --save
```

## Usage

### Basic usage

First, you have to include Provider that expects object which you have to create using `createBreakpoints` method.

`createBreakpoints` accepts an object of which keys will be breakpoints names and values are media query strings.

```jsx
// index.js

import React from 'react'
import { Provider as BreakpointsProvider, createBreakpoints } from 'react-match-breakpoints'
import App from './App'

const mediaQueries = {
  isMobile: 'screen and (max-width: 767px)',
  isTablet: 'screen and (min-width: 768px) and (max-width: 1024px)',
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

`withBreakpoints` hoc will provide breakpoints prop to the wrapped component which holds the current state of your breakpoints.

`Breakpoints` component gives you access to your breakpoints by defining them as its properties (it will automatically capitalize breakpoints names).

```jsx
// App.js

import React, { Component } from 'react'
import { Breakpoints, withBreakpoints } from 'react-match-breakpoints'

class App extends Component {
  componentDidMount() {
    const { breakpoints } = this.props

    if (breakpoints.isTablet) {
      // do something when isTablet breakpoint is matched
    }
  }
  render() {
    ;<div className="container">
      // Note that component name is capitalized
      <Breakpoints.IsMobile>
        // children will be rendered // only when `isMobile` breakpoint is matched
        <h3>I'm mobile device!</h3>
      </Breakpoints.IsMobile>
      <Breakpoints.IsTablet>
        // children will be rendered // only when `isTablet` breakpoint is matched
        <h3>I'm tablet!</h3>
      </Breakpoints.IsTablet>
      Hello world
    </div>
  }
}

export default withBreakpoints(App)
```

### Customize components names

You can customize the names of `Breakpoints` components, by providing a function to `crateBreakpoints` as its second argument.
This function will be invoked during each component creation and it receives a default breakpoint name as an argument.

```jsx
import React from 'react'
import { Provider as BreakpointsProvider, createBreakpoints, Breakpoints } from 'react-match-breakpoints'

const mediaQueries = {
  isMobile: 'screen and (max-width: 767px)',
  isTablet: 'screen and (min-width: 768px) and (max-width: 1024px)',
}

const renameFn = breakpointName => breakpointName.replace('is', '')

const breakpoints = createBreakpoints(mediaQueries, renameFn)

const App = () => (
  <div>
    <Breakpoints.Mobile>// will work as usual</Breakpoints.Mobile>
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

- [Using Breakpoints](https://88nol5480l.codesandbox.io/)
- [Using withBreakpoints](https://9zwwr30x8y.codesandbox.io/)
- [Renaming Breakpoints](https://8z1r83j8lj.codesandbox.io/)
- [Accessing non defined Breakpoints](https://codesandbox.io/s/github/michalklim/react-match-breakpoints/tree/master/examples/accessing-non-defined-breakpoints?expanddevtools=1)

## Browser Support

RMB is supported basically by every browser that implements the full ES5 spec. It might be a good idea to include [matchMedia polyfill](https://github.com/paulirish/matchMedia.js/) for some older browsers.

**Note:** On browsers that don't support `Proxy` you won't see warnings if you try to access Breakpoints components that are not defined.

## Roadmap

- Debug feature
- Possibility to provide media query as an object
- Flow support
- Server Side Rendering

## License

[MIT](https://github.com/michalklim/react-match-breakpoints/blob/master/LICENSE)
