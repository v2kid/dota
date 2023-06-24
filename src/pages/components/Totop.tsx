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
         <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
         <div>
           <a title="Buy me a beer"  target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
             <img onClick={handleScroll} className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
           </a>
         </div>
       </div>
        // <button
        //   onClick={handleScroll}
        //   className='scroll-to-top-button'
        //   style={{
        //     position: 'fixed',
        //     bottom: '50px',
        //     right: '50px',
        //     height: '50px',
        //     width: '50px',
        //     fontSize: '50px'
        //   }}
        // >
        //   Up
        // </button>
      )}
    </>
  )
}

export default ScrollToTop
