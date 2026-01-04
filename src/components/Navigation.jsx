import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { navs } from './Local.jsx';

const Navigation = () => {
  const [ allNavs, setAllNavs ] = useState(navs);

  const handleToggle = (id) => {
    const upDatedArray = navs.map((nav) => {
      return nav.id === id ? {...nav, isOpen: !nav.isOpen} : nav;
    });
    setAllNavs(upDatedArray);
  };
  return (
    <div className='bg-black text-white '>
      <ul className={`flex justify-center items-start overflow-x-scroll shadow-2xl font-bold space-x-8 text-sm lg:text-base`}>
        {allNavs.map((nav) => 
        <div key={nav.id}>
        <li onClick={() => handleToggle(nav.id)} className="relative flex items-center cursor-pointer hover:bg-white text-nowrap hover:text-black p-2 active:opacity-1" key={nav.id}>
        {nav.name} {Array.isArray(nav.url) && <MdOutlineKeyboardArrowDown size={25}/>}
        </li>
          <ul className="absolute z-10">
          {(Array.isArray(nav.url) && nav.isOpen) && nav.url.map((subNav, index) => (
            <li key={index} className={`text-white bg-black p-2 hover:bg-gray-200`}>{subNav}</li>
          ))}
        </ul>
        </div>
        )}
      </ul>
    </div>
  )
}

export default Navigation
