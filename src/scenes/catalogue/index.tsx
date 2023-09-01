import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import HomePageGraphic from '@/assets/catalogue1.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const Catalogue = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens =useMediaQuery("(min-width:1060px")

  return (
    <section 
        id='catalogue'
        className='gap-16 bg-white py-10 md:h-full md:pb-0'
    >
        {/* image and main header */}
        <motion.div 
            className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
            onViewportEnter={() => setSelectedPage(SelectedPage.Catalogue)}    
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
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] '>
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
            <div className='h-[150px] w-full bg-primary-100 py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center justify-between gap-8'>
                        <img src={SponsorRedBull} alt="redbull-sponser" />
                        <img src={SponsorForbes} alt="forbes-sponser" />
                        <img src={SponsorFortune} alt="forture-sponser" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Catalogue