/* eslint-disable */ 
import Nav from './Nav'
import { snailia, perfumeSite, skinSite } from '../assets'

const Header = () => {
  return (
    <div className='h-[100vh] bg-hero-bg'>
      <Nav />
      <header className='flex flex-col md:flex-row mt-4 lg:justify-center'>
        <div className='absolute z-0 lg:left-0'>
          <div className='bg-primary w-[9rem] h-[4rem] lg:relative lg:left-8'></div>
          <img src={snailia} alt="snalia"  className='hidden lg:flex absolute top-[1px] z-10'/>
          <div className='bg-primary w-[4em] h-[12rem] lg:relative lg:left-12'></div>
          <img src={perfumeSite} alt="perfume site" className='hidden lg:flex absolute top-[100px] left-[7rem] z-10'/>
          <img src={skinSite} alt="skin site"  className='hidden absolte lg:flex z-10 relative bottom-[2rem]'/>
        </div>
        <div className='flex flex-col items-center z-10 lg:pt-[1.2rem]'>
          <h1 className='text-[1.875rem]  md:text-[4.875rem] lg:text-[4rem] font-[800] lg:leading-[5rem] text-center lg:w-[30rem] '>
            We Develop <span className='text-primary'>Amazing</span> sites
          </h1>
          <p className='px-[1.3rem] md:w-[30rem] text-center text-pText'>
            Slingback fabric heels. Thin wraparound ankle strap. Squared heel and toe. 
            Pointed toes. Padded insole with geometrical design. 
          </p>
          <div className='flex grow flex-col gap-[1rem] mt-4 lg:flex-row lg:items-center'>
            <a href='#Contact-us' className='w-[10rem] h-[3.6rem] bg-primary filter drop-shadow-lg flex items-center justify-center rounded-[5px] text-white'>
              Contact Us
            </a>
            <p className='underline text-[1.12rem] text-pText text-center'>Watch Video</p>
          </div>
        </div>
        <div className='absolute right-0 hidden lg:block'>
          <div className='bg-primary w-[6rem] h-[10rem] z-0 relative left-[5rem]'></div>
          <img src={snailia} alt="snalia"  className='hidden lg:flex absolute z-10 right-0 -top-[20px] mr-[5px]'/>
          <div className='bg-primary w-[13rem] h-[5rem] relative z-0'></div>
          <img src={perfumeSite} alt="perfume site" className='hidden lg:flex absolute z-10 top-[30px] right-[8rem]'/>
          <img src={skinSite} alt="skin site"  className='hidden lg:flex absolute z-10 top-[270px] right-[4rem]'/>
        </div>
      </header>
    </div>
  )
}

export default Header