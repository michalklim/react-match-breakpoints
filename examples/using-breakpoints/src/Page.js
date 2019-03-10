import React from 'react'
import { Breakpoints } from 'react-match-breakpoints'

import './Page.css'

function Page() {
  return (
    <div className="container">
      <figure>
        <Breakpoints.Mobile.Small>
          📱
          <figcaption>I'm small mobile</figcaption>
        </Breakpoints.Mobile.Small>

        <Breakpoints.Mobile.Big>
          📱📱
          <figcaption>I'm big mobile</figcaption>
        </Breakpoints.Mobile.Big>

        <Breakpoints.Tablet>
          📱📱 📱📱
          <figcaption>I'm tablet (sort of)</figcaption>
        </Breakpoints.Tablet>

        <Breakpoints.Desktop>
          💻
          <figcaption>I'm desktop</figcaption>
        </Breakpoints.Desktop>

        <Breakpoints.BigDesktop>
          🖥️
          <figcaption>I'm big desktop</figcaption>
        </Breakpoints.BigDesktop>
      </figure>
    </div>
  )
}

export default Page
