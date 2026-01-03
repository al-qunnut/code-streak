import Logo from '../assets/logo.png';
import { Socials } from './Local.jsx';
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <div>
    <div className='w-11/12 m-auto'>
      <div className='h-15 flex justify-between items-center '>
        <div className='text-xl hidden lg:block'>ePaper</div>
        <div className='md:hidden'><FiMenu /></div>
        <div className='m-auto'>
          <img src={Logo} alt="logo" className='md:w-70 w-40'/>
        </div>
        <div className='hidden lg:block'>
          <ul className='flex justify-between items-center '>
            {Socials.map((social) => 
            <li key={social.id}><a href={social.url} target="_blank" rel="noopener noreferrer" className='text-3xl mx-5'>
            {social.name}
            </a></li>)}
          </ul>
        </div>
      </div>
   </div>
   </div>
  )
}

export default Header
