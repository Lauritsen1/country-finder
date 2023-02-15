import Header from "../components/Header";
import SearchInput from "../components/SearchInput";

const Home: React.FC = () => {
  return (
    <div className="h-screen px-4 max-w-7xl mx-auto">
      <Header />
      <div className="flex flex-col items-center">
        <p className='text-5xl font-extrabold text-white text-center my-12'>COUNTRY FINDER</p>
        <SearchInput />
      </div>
    </div>
  );
};

export default Home;
