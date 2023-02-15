import githubLogo from '../assets/github-icon.svg'

const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center pt-4'>
      <nav className='space-x-5'>
        <a className='text-white text-lg font-semibold' href=''>Home</a>
        <a className='text-white text-lg font-semibold' href=''>Index</a>
      </nav>

      <div className="rounded-full p-1 bg-white w-max">
        <img className='w-6 h-6' src={githubLogo} alt="github logo" />
      </div>
    </header>
  );
};

export default Header;
