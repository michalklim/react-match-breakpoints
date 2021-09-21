<div align="center">
  <a href="https://michalklim.github.io/react-match-breakpoints">
    <img alt="react-match-breakpoints" src="https://raw.githubusercontent.com/michalklim/react-match-breakpoints/master/rmb-social-logo.jpg" height="200px" />
  </a>
  
  <br />
  
  <h1>React Match Breakpoints</h1>
   <strong>Lightweight, performant and easy to use media query library for React📱 💻 🖥️</strong>
  
   <sub>Define breakpoints configuration once using standard media queries and use it across your project either as components, hooks, HOC, or by simply passing configuration dictionary around.</sub>
  
<br/>

[![npm](https://badgen.net/npm/v/react-match-breakpoints)](https://www.npmjs.com/package/react-match-breakpoints)
[![Size](https://badgen.net/bundlephobia/minzip/react-match-breakpoints@latest?color=green)](https://www.npmjs.com/package/react-match-breakpoints)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![RMB PR Checks](https://github.com/michalklim/react-match-breakpoints/workflows/RMB%20PR%20Checks/badge.svg)
![CodeFactor](https://www.codefactor.io/repository/github/michalklim/react-match-breakpoints/badge?style=flat-square)
![Coverage](https://badgen.net/codecov/c/github/michalklim/react-match-breakpoints)

</div>

<br/>

## Table of contents

- [Motivation](https://github.com/michalklim/react-match-breakpoints#motivation)
- [Installation](https://github.com/michalklim/react-match-breakpoints#installation)
- [Basic usage](https://github.com/michalklim/react-match-breakpoints#basic-usage)
- [Support](https://github.com/michalklim/react-match-breakpoints#support)
- [Usage with Typescript](https://github.com/michalklim/react-match-breakpoints#usage-with-typescript)
- [Usage with SSR](https://github.com/michalklim/react-match-breakpoints#usage-with-typescript)
- [API](https://github.com/michalklim/react-match-breakpoints#api)
- [License](https://github.com/michalklim/react-match-breakpoints#license)

## Motivation

React Match Breakpoints (RMB) goal is to provide a consistent way of handling responsiveness in your React app. RMB works great with CSS-in-JS libraries like [styled-components](https://github.com/styled-components/styled-components), but you can also find it useful in every tech stack of your choosing. Some highlights:

- **Universal** - can be used with ease both in declarative and imperative code. You can use it as a Component, HOC, or hook. It also handles SSR well

- **Consistent** - regardless of how it will be used, initial configuration is [SSOT](https://en.wikipedia.org/wiki/Single_source_of_truth).

- **Flexible** - allows any media query string that is supported by [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) method

- **Performant** - built on top of [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API. No `window.onresize` handlers

- **Lightweight** - no dependencies and it only weighs around 2kb (minified and gzipped)

- **Mature** - Built using Typescript and tested

<br />

## Installation

```console
$ npm install react-match-breakpoints
```

or

```console
$ yarn add react-match-breakpoints
```

<br />
 
## Basic usage

To initialize RMB use `initBreakpoints` method and wrap your application with returned Provider.

> :warning: notice that initBreakpoints is called before the actual app starts to render. This is an intentional and required way of setting up RMB :warning:

```jsx
import React from 'react'
import { initBreakpoints } from 'react-match-breakpoints'
import App from './App'

const breakpointsConfig = {
  mobile: 'screen and (max-width: 767px)',
  tablet: 'screen and (min-width: 768px) and (max-width: 1024px)',
}

const BreakpointsProvider = initBreakpoints(breakpointsConfig)

ReactDOM.render(
  <BreakpointsProvider>
    <App />
  </BreakpointsProvider>,
  document.getElementById('root'),
)
```

**Using `Breakpoint` component:**

`Breakpoint` is a singleton and is aware of the configuration that you provided to `initBreakpoints` method

```jsx
import React from 'react'
import { Breakpoint } from 'react-match-breakpoints'

const ResponsiveComponent = () => {
  return (
    <Breakpoint.mobile>
      <span>I will be shown on mobile devices</span>
    </Breakpoint.mobile>

    <Breakpoint.tablet>
      <span>I will be shown on tablet devices</span>
    </Breakpoint.tablet>
  )
}
```

**Using `useBreakpoints` hook**

```jsx
import React from 'react'
import { useBreakpoints } from 'react-match-breakpoints'

const ResponsiveComponent = () => {
  const breakpoints = useBreakpoints()

  const text = breakpoints.mobile ? 'I will be showed on mobile devices' : 'I will be showed on nonmobile devices'

  return <span>{text}</span>
}
```

**Using `withBreakpoints` HOC**

```jsx
import React from 'react'
import { withBreakpoints } from 'react-match-breakpoints'

const ResponsiveComponent = props => {
  const text = props.breakpoints.mobile ? 'I will be shown on mobile devices' : 'I will be shown on other devices'

  return <span>{text}</span>
}

export default withBreakpoints(ResponsiveComponent)
```

<br />

## Support

RMB is supported basically by every browser that implements the full ES5 spec. It might be a good idea to include [matchMedia polyfill](https://github.com/paulirish/matchMedia.js/) for some older browsers.

> :warning: On browsers that don't support [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) you won't see warnings if you try to access Breakpoints components that are not defined :warning:

<br />

## Usage with Typescript

To fully utilize RMB Typescript support you will have to inform RMB of your breakpoints configuration structure. You could do that using [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html). First, let's create `rmb.d.ts` file and extend `UserConfig` type:

```typescript
// rmb.d.ts
import { UserConfig } from 'react-match-breakpoints'

declare module 'react-match-breakpoints' {
  export interface UserConfig extends {
    mobile: string,
    tablet: string
  }
}
```

If you don't want to maintain types separately from your configuration dictionary you can pass it using `typeof` operator:

```typescript
// rmb.d.ts
import { UserConfig } from 'react-match-breakpoints'
import config from './breakpoints-config.ts'

type BreakpointsConfig = typeof config

declare module 'react-match-breakpoints' {
  export interface UserConfig extends BreakpointsConfig {}
}
```

<br />

## Usage with SSR

RMB can be used together with Server Side Rendering. You have to provide additional breakpoints configuration specific to a server environment. It has to have the same structure as primary configuration with `boolean` values

```jsx
import React from 'react'
import { initBreakpoints } from 'react-match-breakpoints'
import App from './App'

const breakpointsConfig = {
  mobile: 'screen and (max-width: 767px)',
  tablet: 'screen and (min-width: 768px) and (max-width: 1024px)',
}

const serverBreakpointsConfig = {
  mobile: true,
  tablet: false,
}

const BreakpointsProvider = initBreakpoints(breakpointsConfig, {
  ssr: {
    config: serverBreakpointsConfig,
  },
})

ReactDOM.render(
  <BreakpointsProvider>
    <App />
  </BreakpointsProvider>,
  document.getElementById('root'),
)
```

Additionally, you can try to guess the breakpoint during server render using libraries such as [useragent](https://www.npmjs.com/package/useragent). If the breakpoint is guessed incorrectly RMB automatically rerenders this component to show the actual state. This behavior could be
disabled using `ssr.rehydrate` option set to `false`

<br />

## API

### initBreakpoints(Config, Options)

Used for initializing RMB. Has to be invoked before your application first render

#### Config

Configuration object. All values should be proper media query strings that could be interpreted
by [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) method

#### Options

Options object

| Property           | Default value                         | Description                                                                                                                           |
| ------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| breakpointCSSClass | false                                 | Controls adding css class to `Breakpoint` children. Could be useful for example during SSR to visually hide badly guessed breakpoints |
| log                | process.env.NODE_ENV !== 'production' | Controls debug mode. By default, RMB shows logs only in the development environment                                                   |
| isServer           | typeof window === 'undefined'         | Tells RMB if `matchMedia` should be used or not                                                                                       |
| ssr.rehydrate      | true                                  | By default RMB will rerender badly guessed breakpoints during SSR. You can turn this behavior off by setting this value to `false`    |
| ssr.config         | null                                  | SSR configuration object that should resemble the main Config with boolean values                                                     |

**Arguments**

Config (Object): configuration object. See below for details
Options (Object): options object. See below for details

**Returns**

Provider: Provider that has to wrap your application

#### Example

```js
{
  breakpointCSSClass: false
  log: process.env.NODE_ENV !== 'production',
  isServer: typeof window === 'undefined',
  ssr: {
    rehydrate: false,
    config: null,
  },
}
```

<br />

### Breakpoint

Used for accessing Components created from your configuration. Every child of the component
will be shown or hidden depending on provided media queries.

**Returns**

FunctionComponent | nested config part

#### Example:

```jsx
import React from 'react'
import { Breakpoint } from 'react-match-breakpoints'

// Provided configuration

// {
//   mobile: {
//     small: 'screen and (max-width: 320px)',
//     big: 'screen and (max-width: 425px)'
//   },
//   tablet: 'screen and (max-width: 425px)'
// }

const ResponsiveComponent = () => {
  return (
    <>
      <Breakpoint.mobile.small>I will be shown on small mobile devices</Breakpoint.mobile.small>

      <Breakpoint.mobile.big>I will be shown on big mobile devices</Breakpoint.mobile.big>

      <Breakpoint.tablet>I will be shown on tablet devices</Breakpoint.tablet>
    </>
  )
}
```

<br />

### useBreakpoints()

Hook used for obtaining current breakpoints state.

**Returns**

Object: An object that resembles provided configuration with `boolean` values.

#### Example

```jsx
import React from 'react'
import { useBreakpoint } from 'react-match-breakpoints'

// Provided configuration

// {
//   mobile: {
//     small: 'screen and (max-width: 320px)',
//     big: 'screen and (max-width: 425px)'
//   },
//   tablet: 'screen and (max-width: 425px)'
// }

const ResponsiveComponent = () => {
  const { mobile, tablet} = useBreakpoints()

  const text = mobile.small
    ? 'I will be shown on mobile devices'
    : tablet
    ? 'I will be shown on tablet devices'
    : 'I will be shown on non-mobile devices' '

  return <span>{text}</span>
}

```

<br />

## License

[MIT](https://github.com/michalklim/react-match-breakpoints/blob/master/LICENSE), Copyright © 2018-present Michal Klim
