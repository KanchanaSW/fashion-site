import HText from '@/shared/HText';
import { NewArrivalType, SelectedPage } from '@/shared/types';
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from '@heroicons/react/24/solid';
import {motion} from "framer-motion"
import NewArrival from './NewArrival';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Image1 from '@/assets/NW-Image1.png'
import Image2 from '@/assets/NW-Image2.png'
import Image3 from '@/assets/NW-Image3.png'

const arrivals: Array<NewArrivalType> = [
    {
        icon: Image1,
        title: "Hoodies & Sweetshirt",
        description: "Explore Now!"
    },
    {
        icon: Image2,
        title: "Coats & Parkas",
        description: "Explore Now!"
    },
    {
        icon: Image3,
        title: "Tees & T-Shirt",
        description: "Explore Now!"
    },
]

const container={
    hidden: {},
    visible:{
        transition: {staggerChildren:0.2}
    }
}

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const NewArrivals = ({setSelectedPage}: Props) => {
  return (
    <section id="newarrivals" className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.NewArrivals)}
        >
            {/* header */}
            <div className='relative'>
                <div className='before:absolute before:left-24 before:top-2 before:z-[-1] before:content-newArrivals'>
                <motion.div
                    className='md:my-5 md:my-3/5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0,x:50},
                        visible:{opacity:1,x:0}
                    }}
                >
                    <HText>NEW ARRIVALS</HText>
                </motion.div>
                </div>

            </div>

            {/* new arrivals */}
            <motion.div 
                className='md:flex items-center justify-between gap-8 mt-5'
                initial="hidden"
                whileInView={"visible"}
                viewport={{once:true,amount:0.5}}
                variants={container}
            >
                {arrivals.map((arrival:NewArrivalType) => (
                    <NewArrival 
                        key={arrival.title}
                        icon={arrival.icon}
                        title={arrival.title}
                        description={arrival.description}
                    />
                ))}
            </motion.div>

        {/* grapihs and description */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
            {/* graphic */}
            <img className='mx-auto' src={BenefitsPageGraphic} alt="benefits-page-graphic" />

            {/* description */}
            <div>
                {/* title */}
                <div className='relative'>
                    <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                    <motion.div
                        className='md:my-5 md:my-3/5'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount:0.5}}
                        transition={{duration:0.5}}
                        variants={{
                            hidden:{opacity:0,x:50},
                            visible:{opacity:1,x:0}
                        }}
                    >
                        <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                            <span className='text-primary-500'>FIT</span>
                        </HText>
                    </motion.div>
                    </div>

                </div>

                {/* description */}
                <motion.div
                    className='md:my-5 md:my-3/5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{delay:0.2,duration:0.5}}
                    variants={{
                        hidden:{opacity:0,x:50},
                        visible:{opacity:1,x:0}
                    }}
                >
                    <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam enim excepturi consequatur. Reprehenderit eos exercitationem autem dolorem adipisci odit voluptates odio, suscipit magni quibusdam quis voluptatibus maxime minima et.</p>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptates dolorum rerum quidem, minima consequatur quaerat excepturi ducimus earum distinctio facere. At error vitae nostrum animi corporis, reprehenderit qui hic!</p>
                </motion.div>

                {/* button */}
                <div className='relative mt-16'>
                    <div className='before:absolute before-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>    
    </section>
  )
}

export default NewArrivals