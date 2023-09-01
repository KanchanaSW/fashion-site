import HText from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types';
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from '@heroicons/react/24/solid';
import {motion} from "framer-motion"
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "Stat of art facilities",
        description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "Stat of art facilities2",
        description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Stat of art facilities3",
        description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
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

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* header */}
        <motion.div 
            className='md:my-5 md:my-3/5'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0,x:-50},
                visible:{opacity:1,x:0}
            }}
        >
            <HText>MORE THAN JUST GYM</HText>
            <p className='my-5 text-sm'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, culpa id fugiat minus cupiditate nobis laudantium, cum, ipsa deserunt maxime iusto! A eius ut impedit animi facilis quod vitae at.
            </p>
        </motion.div>

            {/* benefits */}
        <motion.div 
            className='md:flex items-center justify-between gap-8 mt-5'
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:true,amount:0.5}}
            variants={container}
        >
            {benefits.map((benefit:BenefitType) => (
                <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
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

export default Benefits