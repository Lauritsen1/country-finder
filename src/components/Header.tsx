import githubLogo from '../assets/github-icon.svg'

import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center py-4'>
      <nav className='space-x-5'>
        <Link className='text-white text-lg font-semibold' to='/'>Home</Link>
        <Link className='text-white text-lg font-semibold' to='/searchindex'>Index</Link>
      </nav>

      <div className='rounded-full p-1 bg-white w-max'>
        <img className='w-6 h-6' src={githubLogo} alt='github logo' />
      </div>
    </header>
  );
};

export default Header;
