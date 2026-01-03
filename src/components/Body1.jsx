import React from 'react'
import { FaBoltLightning } from "react-icons/fa6";
import home from '../assets/home.png';
import { SiGooglenews } from "react-icons/si";
import {News} from "./Local.jsx"

const Body1 = () => {

  const myButton = (
  <button className='m-auto my-40px border-1 border-gray-800 p-2 px-6 flex justify-center items-center rounded-4xl text-blue-500'> 
  <FaBoltLightning/> &nbsp; Guwahati 
  </button>
  )
  return (
    <div className='w-9/12 m-auto'>
      <div className='flex justify-center items-center m-auto h-[20vh]'>
        <h2>Discover more {myButton}</h2>
      </div>
      <div className='grid md:grid-cols-6 grid-cols-1 gap-6'>
        <div className='col-span-4'> 
        <button className='bg-black text-white p-2 font-semibold'>Editorial</button>
          <h1 className='lg:text-6xl md:text-3xl sm:text-xl font-semibold'>Will economics and elections shape the common man's hopes in Budget 2026/27?</h1>
          <p className='text-gray-500 italic lg:text-2xl md:text-xl  '>Each year, Indians eagerly await February 1 with anticipation. It is a fact that this year’s Union Budget is far more significant than usual.</p>
          <img src={home} alt='home' />
          <h3 className='font-semibold md:text-xl py-2'>Sentinel Digital Desk</h3>
          <span>Published on: 03 Jan 2026, 6:29am</span>
          <p className='flex items-center py-4 font-semibold'>Follow us &nbsp; <SiGooglenews color='blue' size={30}/></p>

          <p className='font-semibold md:text-xl'>
            The Union Budget 2026–27 has been drafted at a time when political considerations are at play, with Assembly elections due in Assam, West Bengal and Kerala. Inevitably, these factors will influence the government’s budgetary priorities – Lata Moni Das
            <br/>
            {myButton}
            <br/>
            Each year, Indians eagerly await February 1 with anticipation. It is a fact that this year’s Union Budget is far more significant than usual. Economic and political uncertainty is heightened as a result of U.S. tariffs on imported goods, a weaker rupee against the dollar, declining foreign direct investment, and stubbornly high domestic unemployment. Compounding these economic challenges is a politically charged year, with crucial Assembly elections scheduled in Assam, Kerala, and West Bengal. The budget is therefore not merely a financial statement but a major challenge to the government’s economic resolve and political sensitivity.
            <br/>
            <br/>
            Across the nation, households are seeking tangible relief, including job creation, income stability, fiscal support, and meaningful income tax concessions. With the new tax regime set to take effect with greater force, expectations are particularly high, with hopes that it will simplify compliance while offering a measure of equity across the income spectrum. It is essential to assess how much relief this budget will provide to people across all income groups.
            <br/>
            {myButton}
            <br/>
            Trump’s tariffs in 2025 negatively affected Indian exports, but the economy rebounded rapidly afterwards. With talks progressing, 2026 may be the year for a trade reset. Thus, the upcoming budget plays a crucial role in meeting India’s development goals by 2047. It is recommended that the Union Budget 2026–27 serve as both a stabiliser and a growth catalyst, while focusing on boosting investment. Through targeted incentives and reforms, in addition to fiscal discipline and investor confidence, it pushed for stronger public capital expenditures to drive infrastructure-driven growth.
            <br/>
            <br/>
            With the upcoming Union Budget 2026-27, India’s GDP growth rate of 8.2% will be balanced with long-term macroeconomic stability. The plan will be expected to protect the economy from global uncertainties, ensure liquidity, and attract steady foreign direct investment. In addition, targeted incentives will be used to boost flagship initiatives like ‘Make in India’ and ‘Aatmanirbhar Bharat’, while laying the fiscal foundation for Viksit Bharat 2047. In the budget for 2026-27, significant allocations are expected to lay the groundwork for new infrastructure—digital (AI, semiconductors), physical (logistics, energy transition), and social (healthcare, education). Research and development, renewable energy, and skills development initiatives will be crucial amidst global uncertainties.
             <br/>
            {myButton}
            <br/>
            In addition, market participants closely monitor the Budget for indicators regarding tax reforms, growth-orientated policies, and sector-specific measures that may influence investor sentiment. In the run-up to the Union Budget, broking firms and asset management companies have had to repeatedly recalibrate their business strategies amid frequent regulatory changes, underscoring the need for greater policy stability and clarity to support long-term growth in the financial sector. In the world market, the low cost of China’s exports and dumping strategies have adversely impacted Indian competitiveness, not only in the US, but also in the UAE, UK, Germany, Italy, Australia, South Africa, Brazil, and South Korea as well. As India prepares its Union Budget 2026–27, to remain competitive in global markets, the Budget must prioritise efficient and well-managed capital expenditures to maximise returns and support long-term growth in exports. This will help establish a strong foundation for sustainable growth and competitiveness in the global economy.
            <br/>
            <br/>
            There are also critical expectations regarding the end of the 7th Pay Commission on December 31, 2025, and the potential announcement of the 8th Pay Commission. As nearly 2.5 crore employees and pensioners wait for clarity on salary and pension adjustments, the decision will have significant fiscal implications, potentially adding 3.7–3.9 lakh crore to state and central expenditures annually. A revised TDS system is expected to simplify personal income tax in the Union Budget 2026–27. Household consumption would increase as a result of such measures, as they would enhance take-home pay and increase household take-home pay. 
            <br/>
            {myButton}
            <br/>
            The Union Budget 2026–27 has been drafted at a time when political considerations are at play, with Assembly elections due in Assam, West Bengal and Kerala. Inevitably, these factors will influence the government’s budgetary priorities. Voters will likely place a greater emphasis on welfare spending, tax relief for middle-income groups, and targeted support for rural households.
            <br/>
            <br/>
            It is expected that the government will follow the fiscal discipline framework in the budget, but it may be geared towards calibrated spending increases and phased announcements of policy to permit flagship schemes to be highlighted during election campaigns. During such an election year, continued subsidies and incentives for agriculture, job creation, and higher resource transfers to states will likely remain central issues.
            <br/>
            <br/>
            The public expects fiscal discipline not to come at the expense of growth in the Union Budget 2026–27. As a grassroots perspective, citizens want assurance that the budget will address both global economic realities and local anxieties. A significant reduction in rates, a safe job, higher take-home salaries, and a parallel effort to expand employment are expected to simplify the personal income tax system. Boosting household consumption and ensuring families can manage rising living costs would guarantee sustainable, inclusive, and stable macroeconomic growth. Moreover, India’s union budget is open for public consultation, which helps to develop an inclusive budget that serves the nation’s needs and public interest. As the Union Budget for 2026 is being finalized, it will be crucial to observe how tariffs and electoral strategies are incorporated into the fiscal policies. The present budget is expected to lay the groundwork for possible reforms and economic initiatives that may influence the forthcoming elections.  
           </p>
          {myButton}
          

        </div>
        <div className='col-span-2'>
        <h1 className='lg:text-5xl md:text-3xl sm:text-xl font-semibold'>Top News</h1>
          {
            News.map((News) =>
             <div key={News.id} className='grid grid-cols-3 gap-2 my-4 border-b-2 pb-4'>
            <div className='col-span-1'>
            <img className='w-[60] h-[120]' src={News.image} alt='image'/>
            </div>
            <div className='col-span-2'>
            <h3 className='font-semibold md:text-xl py-2'>{News.name}</h3>
            <p>Sentinel Digital Desk</p>
            <span>{News.hour}</span>
            </div>
            </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Body1
