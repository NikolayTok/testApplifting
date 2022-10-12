import { Link, Outlet } from 'react-router-dom';
import { useRef, useContext } from 'react';

import { GlobalContext } from './context/globalContext';

const Header = () => {
  const { token } = useContext(GlobalContext);
  const menuRef = useRef<HTMLUListElement>(null);

  const toogleMenu = () => {
    menuRef.current?.classList.toggle('hidden');
    menuRef.current?.classList.toggle('block');
  };

  return (
    <>
      <header className='bg-zinc-100 py-2 hidden md:block mb-[60px]'>
        <nav className='container mx-auto pl-3 pr-4'>
          <ul
            id='nav-mobile'
            className='items-center text-gray-500 justify-between hidden md:flex'
          >
            <li className='flex-none pr-[40px]'>
              <Link to='/'>
                <img src='../images/icons/logo.svg' alt='icons logo' />
              </Link>
            </li>
            <li className='flex-none pr-[40px] hover:text-black active:text-black-'>
              <Link to='/'>Recent Articles</Link>
            </li>
            <li className='flex-1 w-64 hover:text-black active:text-black'>
              <Link to='/about'>About</Link>
            </li>
            {!token ? (
              <li className='text-right text-blue-500 hover:text-black active:text-blue-300'>
                <Link to='/login'>Log in</Link>
              </li>
            ) : (
              <div className='flex justify-between items-center'>
                <li className='hover:text-black active:text-black pr-[40px]'>
                  <Link to='/myarticles'>My Articles</Link>
                </li>
                <li className='text-right text-blue-500 hover:text-black active:text-blue-300 pr-[40px]'>
                  <Link to='/createarticles'>Create Article</Link>
                </li>
                <li className='text-right text-blue-500 hover:text-black active:text-blue-300 max-w-[32px]'>
                  <Link to='/login'>
                    <img
                      src='../images/icons/userIcon.svg'
                      alt='icons user'
                      className='rounded-full w-[50px] h-[50px]'
                    />
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </nav>
        <Outlet />
      </header>

      <header className='bg-zinc-100 flex items-right py-2 constainer pl-3 pr-4 md:hidden mb-[60px]'>
        <div className='w-full'>
          <div className='wrap flex justify-between'>
            <Link to='/'>
              <img src='../images/icons/logo.svg' alt='icons logo' />
            </Link>
            <button className='md:hidden' onClick={toogleMenu}>
              Menu
            </button>
          </div>
          <nav
            className='bg-zinc-100 pl-3 pr-4 hidden absolute right-0 left-0 p-4 z-10'
            ref={menuRef}
          >
            <ul className='text-center text-gray-500 flex-col lg:hidden'>
              <li className='hover:text-black active:text-black  border-b'>
                <Link to='/' className='p-2 block'>
                  Recent Articles
                </Link>
              </li>
              <li className='hover:text-black active:text-black border-b'>
                <Link to='/about' className='p-2 block'>
                  About
                </Link>
              </li>

              {!token ? (
                <li className='text-blue-500 hover:text-black active:text-blue-300 border-b'>
                  <Link to='/login' className='p-2 block'>
                    Log in
                  </Link>
                </li>
              ) : (
                <div className='flex items-center flex-col text-center '>
                  <li className='hover:text-black active:text-blac border-b w-full'>
                    <Link to='/myarticles' className='p-2 block'>
                      My Articles
                    </Link>
                  </li>
                  <li className='text-blue-500 hover:text-black active:text-blue-300 border-b w-full'>
                    <Link to='/createarticles' className='p-2 block'>
                      Create Article
                    </Link>
                  </li>
                  <li className='text-blue-500 mt-3 hover:text-black active:text-blue-300 max-w-[32px]'>
                    <Link to='/login' className='block'>
                      <img
                        src='../images/icons/userIcon.svg'
                        alt='icons user'
                        className='rounded-full w-[50px] h-[50px]'
                      />
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </nav>
        </div>
        <Outlet />
      </header>
    </>
  );
};

export default Header;
