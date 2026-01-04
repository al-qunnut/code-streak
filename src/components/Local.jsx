import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGooglenews } from "react-icons/si";
import img1 from "../assets/01.png"
import img2 from "../assets/02.png"
import img3 from "../assets/03.png"
import img4 from "../assets/04.png"

export const Socials = [
    { id: 1, name: <FaFacebookSquare style={{ color: 'blue' }} />, url: 'https://web.facebook.com/thesentinel.assam/?_rdc=1&_rdr#z' },
    { id: 2, name: <FaInstagramSquare style={{ color: 'pink' }} />, url: 'https://www.instagram.com/thesentineldigital/' },
    { id: 3, name: <FaSquareYoutube style={{ color: 'red' }} />, url: 'https://www.youtube.com/channel/UC1b9a3Rk0aJ643armkHW2ZA' },
    { id: 4, name: <FaSquareXTwitter style={{ color: 'blue' }} />, url: 'https://x.com/sentinel_assam/' },
    { id: 5, name: <SiGooglenews style={{ color: 'blue' }} />, url: 'https://news.google.com/publications/CAAqLQgKIidDQklTRndnTWFoTUtFWE5sYm5ScGJtVnNZWE56WVcwdVkyOXRLQUFQAQ?ceid=IN:en&oc=3&hl=en-IN&gl=IN' },
  ];

  export const News = [
    { 
      id: 1, 
      name: '14 Naxalites Killed in Twin Encounters in Chhattisgarh Bastar Region', 
      hour: '6 hours ago', 
      image: img1,
    },
    { 
      id: 2, 
      name: 'Assam Eviction Drive to Continue, Says CN Sarma', 
      hour: '7 hours ago', 
      image: img2,
    },   
    { 
      id: 3, 
      name: 'Arunachal CM Congratulates Subi on Ramnath Geonka Sahitya Samman win', 
      hour: '8 hours ago', 
      image: img3,
    },
    { 
      id: 4, 
      name: 'RailTel Bags Rs. 56.71 Cr Contract to Implement HMIS in Seven Assam Medical College Hospitals', 
      hour: '9 hours ago', 
      image: img4,
    },
  ]

export const navs = [
    {id: 1, name:'Home', url: '#', isOpen: false},
    {id: 2, name:'Live Blog', url: '#', isOpen: false},
    {id: 3, name:'Breaking News', url: '#', isOpen: false},
    {id: 4, name:'Top Headlines', url: '#', isOpen: false},
    {id: 5, name: 'Cities', url: ['Guwahati', 'Dibrugarh', 'Jorhat', 'Tezpur', 'Silchar'], isOpen: false},
    {id: 6, name: 'NE News', url: ['Assam', 'Arunachal Pradesh', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim', 'Tripura'], isOpen: false},
    {id: 7, name: 'Social Media', url: ['Sentinel Tv', 'Web Stories'], isOpen: false},
    {id: 8, name: 'Sports', url: ['Football', 'Cricket', 'Tennis', 'Badminton'], isOpen: false},
    {id: 9, name: 'Education', url: ['Results', 'Exaninations', 'Admissions', 'Syllabus'], isOpen: false},
    {id: 10, name: 'Jobs', url: ['Government Jobs', 'Private Jobs', 'Walk-in-Interviews', 'Latest Jobs'], isOpen: false},
  ]
