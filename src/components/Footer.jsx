import React from 'react'
import footer from "../assets/footer.png"
import { Socials } from './Local.jsx'

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className='bg-black text-white p-8 mt-8'>
      <div className='w-10/12 m-auto'>
       <div className='grid md:grid-cols-5 grid-cols-1 gap-8'>
        <div>
          <img src={footer} alt='img'/>
          <span>Follow us</span>
          <ul className='flex justify-between items-center '>
          {Socials.map((social) => 
            <li key={social.id}><a href={social.url} target="_blank" rel="noopener noreferrer" className='text-3xl mx-5'>
            {social.name}
            </a></li>)}
            </ul>
        </div>
        <div>
          <h2 className=' font-semibold py-2'>News</h2>
          <ul>
            <li>Top Headline</li>
            <li>Testing</li>
            <li>Tenders</li>
            <li>Web Stories</li>
            <li>Stargazing</li>
          </ul>
        </div>
        <div>
          <h2 className=' font-semibold py-2'>Supplements</h2>
          <ul>
            <li>The Junior Sentinel</li>
            <li>Saturday Fare</li>
            <li>Milange</li>
            <li>Multilingual</li>
          </ul>
        </div>
        <div>
          <h2 className=' font-semibold py-2'>The Sentinel</h2>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Advertise</li>
          </ul>
        </div>
        <div>
          <h2 className='font-semibold py-2'>Language</h2>
          <ul>
            <li>Assamese</li>
            <li>Bengali</li>
            <li>Hindi</li>
            <li>English</li>
            <li>Other</li>
          </ul>
        </div>
       </div>
       <div className=' flex flex-col md:flex-row justify-between items-center text-center md:text-left border-t-2 border-gray-600 mt-8 pt-4'>
        <p> About Us | Contact us | Advertise </p>
        <span>@sentinelassam-english {date}   Powered by Qintype </span>
       </div>
      </div>
    </div>
  )
}

export default Footer
