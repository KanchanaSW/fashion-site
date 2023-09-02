import {  NewArrivalType, SelectedPage } from '@/shared/types'
import {motion} from "framer-motion"
import Image1 from '@/assets/favorite1.png'
import Image2 from '@/assets/favorite2.png'
import HText from '@/shared/HText'
import NewArrival from '../new-arrivals/NewArrival'

const arrivals: Array<NewArrivalType> = [
    {
        icon: Image1,
        title: "Trending on instagram",
        description: "Explore Now!"
    },
    {
        icon: Image2,
        title: "All Under $40",
        description: "Explore Now!"
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value:SelectedPage) => void
}

const Favorite = ({setSelectedPage}: Props) => {
  return (
    <section id='favorite' className='w-full mt-12'>
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Favorite)}
        >
            <div className='mx-auto min-h-full w-5/6 py-20'>
                    {/* header */}
                    <div className='relative'>
                        <div className='before:absolute before:left-36 before:top-2 before:z-[-1] before:content-newArrivals'>
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
                                <HText>YOUNG'S FAVORITES</HText>
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
        </motion.div>
    </section>
  )
}

export default Favorite