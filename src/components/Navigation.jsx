import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";

const Navigation = () => {
  const nav=[
    {id: 1, name:'Home', url: '#'},
    {id: 2, name:'Live Blog', url: '#'},
    {id: 3, name:'Breaking News', url: '#'},
    {id: 4, name:'Top Headlines', url: '#'},
  ]

  const Cities = ['Guwahati', 'Dibrugarh', 'Jorhat', 'Tezpur', 'Silchar'];
  const NENews = ['Assam', 'Arunachal Pradesh', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim', 'Tripura'];
  const SocialMedia = ['Sentinel Tv', 'Web Stories']
  const Sports = ['Football', 'Cricket', 'Tennis', 'Badminton'];
  const Education = ['Results', 'Exaninations', 'Admissions', 'Syllabus'];
  const Jobs = ['Government Jobs', 'Private Jobs', 'Walk-in-Interviews', 'Latest Jobs'];


  const moreNav = [
    {id: 1, name: 'Cities', url: [Cities]},
    {id: 2, name: 'NE News', url: [NENews]},
    {id: 3, name: 'Social Media', url: [SocialMedia]},
    {id: 4, name: 'Sports', url: [Sports]},
    {id: 5, name: 'Education', url: [Education]},
    {id: 6, name: 'Jobs', url: [Jobs]},
  ]
  
  return (
    <div className='bg-black text-white'>
      <ul className='flex justify-center items-center overflow-x-scroll shadow-2xl font-bold h-12 space-x-8 text-sm lg:text-base'>
        {nav.map((nav) => 
        <li className="cursor-pointer hover:bg-white hover:text-black p-2 active:opacity-1" key={nav.id}>
        {nav.name}
        </li>
        )}
        {moreNav.map((nav) => 
        <li className="flex justify-center items-center cursor-pointer hover:bg-white hover:text-black p-2 active:opacity-1" key={nav.id}>
        {nav.name} <MdOutlineKeyboardArrowDown size={25}/>
        </li>
        )}

        <li><HiDotsHorizontal /></li>
      </ul>
    </div>
  )
}

export default Navigation
