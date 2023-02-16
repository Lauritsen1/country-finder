import React from 'react'
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='bg-slate-900 h-screen px-4'>
      <div className='max-w-7xl mx-auto'>
        <Header />
        <div className='mt-24'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
