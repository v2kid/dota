import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  const [showButton, setShowButton] = useState(false)
  const [buttonPosition, setButtonPosition] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
      {showButton && (
        <button
          onClick={handleScroll}
          className='scroll-to-top-button'
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            height: '50px',
            width: '50px',
            fontSize: '50px'
          }}
        >
          Up
        </button>
      )}
    </>
  )
}

export default ScrollToTop
