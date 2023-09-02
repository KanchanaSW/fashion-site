import Logo from '@/assets/LogoFooter.png'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className='my-5 text-[#8E8E8E]'>
                    Complete your style with awesome clothes from us.
                </p>
                <p className='text-[#8E8E8E]'>© Fashion All Rights Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0 '>
                <h4 className='my-5'>Links</h4>
                <p className='my-5 text-[#8E8E8E]'>Share location</p>
                <p className='my-5 text-[#8E8E8E]'>Order Tracking</p>
                <p className='my-5 text-[#8E8E8E]'>Size Guide</p>
                <p className='text-[#8E8E8E]'>FAQs</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0 '>
                <h4 className='my-5'>Contact Us</h4>
                <p className='text-[#8E8E8E]'>66637-38884-33</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer