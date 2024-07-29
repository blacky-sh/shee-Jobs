import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="bg-custom-brown py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-custom-yellow sm:text-5xl md:text-6xl"
          >
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Become a React Dev',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Become a Social Media Manager',
        1000,
        'Become a Back-End Dev',
        1000,
        'Become a Tester',
        1000,
        'Become Employed!',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
          </h1>
          
          <p className="my-4 text-xl text-white">
            Find the React job that fits your skills and needs
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero