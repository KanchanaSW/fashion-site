import {motion} from "framer-motion"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const childVariant ={
    hidden:{opacity:0,scale:0.9},
    visible:{opacity:1,scale:1}
}

type Props = {
    icon: string;
    title:string;
    description:string;
}

const NewArrival = ({icon,title,description}: Props) => {
  return (
    <motion.div 
        className='mt-5 px-5 py-16'
        variants={childVariant}
    >
        <div className='mb-4 flex justify-center'>
            <div className=''>
                <img src={icon} alt={`${icon}`} />
            </div>
        </div>

        <h4 className='font-bold'>{title}</h4>
        {/* <p className='my-3'>{description} ➡ </p>         */}
        <AnchorLink 
            className='text-sm font-bold text-[#7F7F7F] underline hover:text-secondary-500'
        >
            <p>{description}</p>
        </AnchorLink>
    </motion.div>
  )
}

export default NewArrival