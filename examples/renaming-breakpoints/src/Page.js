import React from 'react'
import { Breakpoints } from 'react-match-breakpoints'

import './Page.css'

function Page() {
  return (
    <div className="container">
      <figure>
        <Breakpoints.IsMobile>
          📱
          <figcaption>I'm mobile</figcaption>
        </Breakpoints.IsMobile>

        <Breakpoints.IsTablet>
          📱📱 📱📱
          <figcaption>I'm tablet (sort of)</figcaption>
        </Breakpoints.IsTablet>

        <Breakpoints.IsDesktop>
          💻
          <figcaption>I'm desktop</figcaption>
        </Breakpoints.IsDesktop>

        <Breakpoints.IsBigDesktop>
          🖥️
          <figcaption>I'm big desktop</figcaption>
        </Breakpoints.IsBigDesktop>
      </figure>
    </div>
  )
}

export default Page
