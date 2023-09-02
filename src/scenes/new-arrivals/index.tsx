import HText from '@/shared/HText';
import { NewArrivalType, SelectedPage } from '@/shared/types';
import { motion } from "framer-motion"
import NewArrival from './NewArrival';
import ActionButton from '@/shared/ActionButton';
import SaleImage from "@/assets/saleImage.png"
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

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const NewArrivals = ({ setSelectedPage }: Props) => {
    return (
        <section id="newarrivals" className='mb-5' >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.NewArrivals)}
            >
                <div className='mx-auto min-h-full w-5/6 py-20'>
                    {/* header */}
                    <div className='relative'>
                        <div className='before:absolute before:left-24 before:top-2 before:z-[-1] before:content-newArrivals'>
                            <motion.div
                                className='md:my-5 md:my-3/5'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 }
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
                        viewport={{ once: true, amount: 0.5 }}
                        variants={container}
                    >
                        {arrivals.map((arrival: NewArrivalType) => (
                            <NewArrival
                                key={arrival.title}
                                icon={arrival.icon}
                                title={arrival.title}
                                description={arrival.description}
                            />
                        ))}
                    </motion.div>
                </div>

                <div className='min-h-full bg-gradient-yellow'>

                    <div className="mt-10 justify-between gap-8 md:flex items-center">
                        <motion.div
                            className="relative mt-16 basis-2/5 md:mt-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                                <img
                                    className="w-full"
                                    alt="contact-us-page-graphic"
                                    src={SaleImage}
                                />
                            </div>
                        </motion.div>

                        <div className='z-10 md:basis-1/2 sm:p-8'>
                            {/* headings */}
                            <motion.div 
                                className=''
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
                                        <div className='text-7xl font-bold'>PAYDAY <br/>
                                                SALE NOW 
                                            </div>
                                    </div>
                                </div>

                                <p className='mt-8 text-xl'>
                                Spend minimal $100 get 30% off <br />
                                voucher code for your next purchase
                                </p>
                                <p className='mt-8 text-xl font-bold'>
                                1 June - 10 June 2021
                                </p>
                                <p className='text-xl'>
                                *Terms & Conditions apply
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
                        
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default NewArrivals