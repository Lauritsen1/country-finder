import SearchInput from '../components/SearchInput';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-5xl font-extrabold text-white text-center mb-12'>COUNTRY FINDER</h1>
      <SearchInput />
    </div>
  );
};

export default Home;
