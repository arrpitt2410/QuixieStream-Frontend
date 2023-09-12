import React, { useContext } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import { Context } from '../main'
import Faq from './Faq'
import { Link } from 'react-router-dom'

const Home = () => {
  const { isAuthenticated } = useContext(Context)

  return (
    <div>
        <nav>
            <Navbar />
        </nav>
        { isAuthenticated ? (
          // <Link to="/newstream" className='btn btn-primary text-black'>Start Streaming</Link>
          <h1 className='text-center text-5xl'>Coming Soon</h1>
        ) : (
          <div>
            <div>
          <Hero />
      </div>
      {/* <div>
        <Faq />
      </div> */}
      {/* <div>
          <Footer />
      </div> */}
             </div>
        ) }
    </div>
  )
}

export default Home