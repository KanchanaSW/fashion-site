import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import HomePageGraphic from '@/assets/catalogue1.png'
import Sponsor1 from '@/assets/Rectangle 36.png'
import Sponsor2 from '@/assets/Rectangle 38.png'
import Sponsor3 from '@/assets/Rectangle 41.png'
import Sponsor4 from '@/assets/Rectangle 43.png'
import Sponsor5 from '@/assets/Rectangle 44.png'
import Sponsor6 from '@/assets/Rectangle 45.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens =useMediaQuery("(min-width:1060px")

  return (
    <section 
        id='home'
        className='gap-16 bg-white py-10 md:h-full md:pb-0'
    >
        {/* image and main header */}
        <motion.div 
            // style={{backgroundColor: "#F4F6F5", margin: '10%'}}
            className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}    
        >
            {/* main header */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* headings */}
                <motion.div 
                    className='md:-mt-20'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0,x:-50},
                        visible:{opacity:1,x:0}
                    }}
                >
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1]'>
                            {/* <img src={HomePageText} alt="home-page-text" /> */}
                            <div className='text-7xl font-bold'>LET'S <br/>
                                EXPLORE <br />
                                UNIQUE <br />
                                CLOTHES. 
                                </div>
                        </div>
                    </div>

                    <p className='mt-8 text-lg'>
                        Live for Influential and Innovative fashion!
                    </p>
                </motion.div>

                {/* actions */}
                <motion.div 
                    className='mt-8 flex items-center gap-8'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{delay:0.2, duration:0.5}}
                    variants={{
                        hidden:{opacity:0,x:-50},
                        visible:{opacity:1,x:0}
                    }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>Shop Now</ActionButton>
                   
                </motion.div>
            </div>
            {/* image */}
            <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-5 md:justify-items-end'>
                <img src={HomePageGraphic} alt="home-pageGraphic" />
            </div>
        </motion.div>

        {/* sponsers */}
        {isAboveMediumScreens && (
            <div className='h-[150px] w-full bg-[#EBD96B] py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-auto items-center justify-evenly gap-8'>
                        <img src={Sponsor1} alt="sponser-1" />
                        <img src={Sponsor2} alt="sponser-2" />
                        <img src={Sponsor3} alt="sponser-3" />
                        <img src={Sponsor4} alt="sponser-4" />
                        <img src={Sponsor5} alt="sponser-5" />
                        <img src={Sponsor6} alt="sponser-6" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home