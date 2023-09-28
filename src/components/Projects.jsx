/* eslint-disable */ 
import { furniture, service, fitness, lifestyle } from "../assets"


const Projects = () => {

  const cards = ({img, title}) => {
    return (
      <div className="w-[22rem] h-[19rem]">
        <img src={img} alt="image" />
        <div className="flex pt-4 gap-8">
          <h2 className="text-[1rem] font-[400]">
            {title}
          </h2>
          <a className="text-primary text-right font-[500]">View Details</a>
        </div>
      </div>
    )
  }  
  return (
    <section className="flex flex-col items-center justify-center " id="Projects">
      <div className="pt-[2rem]">
        <h3 className=" text-pText md:text-[1.125rem] text-center">
          Our Works
        </h3>
        <h1 className=" text-pText text-[2.81rem] font-[400] text-center">
          Our Portfolio
        </h1>
        {/* imgs */}
        <div className="pt-12 flex flex-col md:flex-row">
          {cards({
            img: furniture,
            title: 'Fashion Landing page'
          })}
          {cards({
            img: service,
            title: 'IT provider Landing page'
          })}
        </div>
        <div className="pt-4 flex flex-col md:flex-row ">
          {cards({
            img: fitness,
            title: 'Fashion Landing page'
          })}
          {cards({
            img: lifestyle,
            title: 'IT provider Landing page'
          })}
        </div>
        
      </div>
      <a href='#Contact-us' className='w-[10rem] h-[3.6rem] bg-primary filter drop-shadow-lg flex items-center justify-center rounded-[5px] text-white mt-8'>
        All Projects
      </a>
    </section>
  )
}

export default Projects