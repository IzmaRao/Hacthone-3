import Image from 'next/image'
import bgimg from '../../public/Rectangle 1.png'
import logo from '../../public/Meubel House_Logos-05.png'

interface name{
    name: string
    name1: string
}
function Navbar2(props: name) {
  return (
    <div className='navbar-two '>
        <div className='navbar-two-img '>
            <Image width={1440} height={316}  src={bgimg} alt=''/>
        </div>
        <div className='navbar-two-content'>
            <Image src={logo} alt=''/>
            <h2 className='navbar-two-content-h font-medium'>{props.name1}</h2>
            <p className='navbar-two-content-p font-medium'>Home {'>'} {props.name}</p>
        </div>        
    </div>
  )
}

export default Navbar2