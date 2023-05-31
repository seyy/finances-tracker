import { ImStatsBars } from 'react-icons/im'

function Navbar() {
    return (
        <header className='container max-w-2xl py-6 mx-auto'>
          <div className='flex items-center justify-between'>
          {/*  USER INFO */}
          <div className='flex items-center gap-2'>
            <div className='h-[40px] w-[40px] rounded-full overflow-hidden'>
              <img className='object-cover w-full h-full'
              src='https://thispersondoesnotexist.com/'
              alt='Profile image'/>
            </div>
    
            <small>Hi, Leon!</small>
          </div>
    
          {/* RIGHT SIDE OF NAVBAR */}
          <nav className='flex items-center gap-2'>
            <div>
              <ImStatsBars className="text-2xl" />
            </div>
            <div>
              <button className='btn btn-danger'>
                Sign Out
              </button>
            </div>
          </nav>
          </div>
        </header>
      )
}

export default Navbar