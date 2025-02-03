import Navbar from '@/components/Navbar';
import Navbar2 from '@/components/Navbar2';
import Link from 'next/link';

export default function Login() {

  return (
    <div>
      <Navbar />
      <Navbar2 name='Login' name1='Login' />
      <div className='forms'>
        <form className='login-form space-y-[36px]' action="">
          <h1 className='login-form-h font-semibold'>Login</h1>
          <hr />
          <div>
            <label htmlFor="email"><p className='font-medium'>Email address</p></label>
            <input className='login-form-input-name' type="text" id='email' placeholder='email' />
          </div>
          <div>
            <label htmlFor="password"><p className='font-medium'>Password</p></label>
            <input className='login-form-input-name' type="password" id='password' placeholder='password' />
          </div>

          <div className='login-form-btns '>
            <button className="login-form-btn-one rounded-[15px] border-[1px] border-black">Login</button>
            <button className='login-form-btn-one text-center'><Link href='/account'><p>Visit Sign up page</p></Link></button>
          </div>
        </form>
      </div>
    </div>
  )
  }
