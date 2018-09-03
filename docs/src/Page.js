import React from 'react'
import { withBreakpoints, Breakpoints } from 'react-match-breakpoints'



const Page = ( {breakpoints} ) => {
    return (
        <div>
            <p>HOC test</p>
            {
                breakpoints.isMobile
                    ? <p>is Mobile</p>
                    : <p> is not Mobile</p>
            }
            <p>----------------------------</p>

            Component test

            <Breakpoints.IsMobile>
                <p>isMobile</p>
            </Breakpoints.IsMobile>

            <Breakpoints.IsTablet>
                <p>isTablet</p>
            </Breakpoints.IsTablet>

            <Breakpoints.IsDesktop>
                <p>isDesktop</p>
            </Breakpoints.IsDesktop>
        </div>
    )
}

export default withBreakpoints(Page)