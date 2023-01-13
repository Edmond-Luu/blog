import React from 'react'
import { useLocation } from 'react-router-dom'

// This component allows will auto-scroll the page back to the top when the route has been changed.

export default function ScrollToTop() {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}
