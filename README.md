<div align="center">
  <a href="https://www.styled-components.com">
    <img alt="react-match-breakpoints" src="https://raw.githubusercontent.com/michalklim/react-match-breakpoints/master/rmb-social-logo.jpg" height="200px" />
  </a>
  
  <br />
  
  <h1>React Match Breakpoints</h1>
   <strong>Lightweight, performant and easy to use media query React library 📱💻🖥️</strong>
  
   <sub>Define your whatever media query configuration once and use it across project either as components or simply as an object.</sub>
  
<br/>

[![npm](https://badgen.net/npm/v/react-match-breakpoints)](https://www.npmjs.com/package/react-match-breakpoints)
[![Size](https://badgen.net/bundlephobia/minzip/react-match-breakpoints?color=green)](https://www.npmjs.com/package/react-match-breakpoints)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![RMB PR Checks](https://github.com/michalklim/react-match-breakpoints/workflows/RMB%20PR%20Checks/badge.svg)
![CodeFactor](https://www.codefactor.io/repository/github/michalklim/react-match-breakpoints/badge?style=flat-square)
![Coverage](https://badgen.net/codecov/c/github/michalklim/react-match-breakpoints)

</div>

<br/>

## Motivation

React Match Breakpoints goal is to provide a consistent way of handling responsiveness in your React app. Highlights:

- **Universal** - can be used with ease both in declarative and imperative code. You can use it as a Component, HOC or hook. It also handles SSR well

- **Consistent** - regardless of how it will be used, initial configuration is [SSOT](https://en.wikipedia.org/wiki/Single_source_of_truth).

- **Flexible** - allows any media query string that is supported by [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API

- **Performant** - built on top of [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API. No `window.onresize` handlers

- **Lightweight** - no dependencies and it only weighs around 2kb (minified and gzipped)

- **Mature** - Build using Typescript and fully tested

<br />

## Installation

```console
$ npm install react-match-breakpoints --save
```

or

```console
$ yarn add react-match-breakpoints
```

<br />

## Docs

Please head to [https://michalklim.github.io/react-match-breakpoints/](https://michalklim.github.io/react-match-breakpoints/) for full documentation and interactive examples

<br />
 
## Basic usage

First, you have to initialize RMB by calling `initMatchBreakpoints` method and wrap your application with returned Provider
and you are ready to go:

> :warning::warning: notice that `initMatchBreakpoints` is called before actaul app starts to render. This is intentional and required way of setting up RMB. You can read about reasoning behind it [here]()

```jsx
import React from 'react'
import { initMatchBreakpoints } from 'react-match-breakpoints'
import App from './App'

const breakpointsConfig = {
  mobile: 'screen and (max-width: 767px)',
  tablet: 'screen and (min-width: 768px) and (max-width: 1024px)',
}

const BreakpointsProvider = initMatchBreakpoints(breakpointsConfig)

ReactDOM.render(
  <BreakpointsProvider>
    <App />
  </BreakpointsProvider>,
  document.getElementById('root'),
)
```

Using `Breakpoint` component

```jsx
import React from 'react'
import Breakpoint from 'react-match-breakpoints'
import App from './App'

const ResponsiveComponent = () => {
  return (
    <Breakpoint.mobile>
      <span>I will be showed on mobile devices</span>
    </Breakpoint.mobile>

    <Breakpoint.tablet>
      <span>I will be showed on tablet devices</span>
    </Breakpoint.tablet>
  )
}
```

Using `useBreakpoints` hook

```jsx
import React from 'react'
import { useBreakpoints } from 'react-match-breakpoints'
import App from './App'

const ResponsiveComponent = () => {
  const breakpoints = useBreakpoints()

  const text = breakpoints.mobile ? 'I will be showed on mobile devices' : 'I will be showed on non mobile devices'

  return <span>{text}</span>
}
```

Using `withBreakpoints` HOC

```jsx
import React from 'react'
import { withBreakpoints } from 'react-match-breakpoints'
import App from './App'

const ResponsiveComponent = props => {
  const text = props.breakpoints.mobile ? 'I will be shown on mobile devices' : 'I will be shown on other devices'

  return <span>{text}</span>
}

export default withBreakpoints(ResponsiveComponent)
```

<br />

## Support

RMB is supported basically by every browser that implements the full ES5 spec. It might be a good idea to include [matchMedia polyfill](https://github.com/paulirish/matchMedia.js/) for some older browsers.

> :warning::warning: On browsers that don't support `Proxy` you won't see warnings if you try to access Breakpoints components that are not defined

<br />

## License

[MIT](https://github.com/michalklim/react-match-breakpoints/blob/master/LICENSE), Copyright © 2018-present Michal Klim
