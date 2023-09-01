import Logo from '@/assets/Logo.png'

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quod impedit iure mollitia deleniti ut perferendis fugit nostrum cupiditate ipsam necessitatibus molestiae quaerat minus hic voluptatum, reiciendis natus recusandae itaque?</p>
                <p>© Gym All Rights Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0 '>
                <h4 className='my-5'>Links</h4>
                <p className='my-5'>sdcuhsd dcsdci dncdcs</p>
                <p className='my-5'>sdcuhsd dcsdci dncdcs</p>
                <p>sdcuhsd dncdcs</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0 '>
                <h4 className='my-5'>Contact Us</h4>
                <p className='my-5'>7777 dcsdci dncdcs</p>
                <p>66637-38884-33</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer