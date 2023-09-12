import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero py-20 text-black">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Connect, Create, Captivate!</h1>
        <p className="py-8 text-xl">"Experience the Ultimate Creative Freedom as You Connect Seamlessly with Your Audience, Create Stunning Content, and Captivate the World's Attention, All Through Our Cutting-Edge All-in-One Live Streaming Platform!</p>
        <Link to="/signup"><button className="btn btn-primary text-black">Get Started</button></Link>
      </div>
    </div>
  </div>
  )
}

export default Hero