import React from 'react'
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='bg-slate-900 px-4'>
      <div className='max-w-7xl mx-auto min-h-screen flex flex-col'>
        <Header />
        <h1 className='text-5xl font-extrabold text-white text-center my-12'>COUNTRY FINDER</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
