/* eslint-disable */ 
import { brands, wix } from "../assets"
const WhyUs = () => {

  const cards = ({logo,title, desc}) => {
    return (
      <div className="w-[24rem] h-[20.75rem] shrink-0 rounded-[5px] px-[1.87rem] py-[2.5rem] border-[1px] 
            border-solid border-[#EDEDED] bg-transparent bg-opacity-80 hover:bg-white hover:shadow-xl hover:filter "
        >
          <div className="flex pb-4 gap-[10px] ">
            <img src={logo} alt="logo" className="w-[1.75rem] h-[1.75rem]"/>
            <h3 className="hover:text-white text-[#313131] text-[1.375rem] leading-[2rem] font-[400]">
              {title}
            </h3>
          </div>
          <p className="text-pText leading-[1.66rem] text-[1.25rem]">
            {desc}
          </p>
          <p className="text-primary pt-[1.87rem] underline">Read More</p>
      </div>
    )
  }
  return (
    <section className="flex flex-col items-center justify-center pt-[5rem]">
      <div>
        <img src={brands} alt="brands" className="" />
      </div>
      <div className="pt-[5rem] md:pt-[7rem]">
        <h3 className=" text-pText md:text-[1.125rem] text-center">
          What we do?
        </h3>
        <h1 className=" text-pText text-[2.81rem] font-[400] text-center">
          Our Specialization
        </h1>
        {/* card */}
        <div className=" gap-4">
          <div className="md:flex gap-12 md:pb-8">
            {cards
                ({title: 'Webflow Development',
                  logo: wix,
                  desc: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.'
                })
            }
            {cards
                ({title: 'Shopify Development',
                  logo: wix,
                  desc: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.'
                })
            }
          </div>
          <div className="md:flex gap-12">
            {cards
                ({title: 'Figma Web Designing',
                  logo: wix,
                  desc: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.'
                })
            }
            {cards
                ({title: 'Php Development',
                  logo: wix,
                  desc: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.'
                })
            }
          </div>
        </div>
      </div>
      <a href='#Contact-us' className='w-[10rem] h-[3.6rem] bg-primary filter drop-shadow-lg flex items-center justify-center rounded-[5px] text-white mt-8'>
            Load More
      </a>
    </section>
  )
}

export default WhyUs