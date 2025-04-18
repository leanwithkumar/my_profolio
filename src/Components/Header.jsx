import React from 'react';

function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className='text-white fixed top-0 left-0 z-50 flex justify-between w-full bg-[#272930] py-5 sm:pb-5 px-4 sm:px-6 md:px-10'>
        
        <div
          onClick={scrollToTop}
          className='text-3xl sm:text-2xl md:text-2xl cursor-pointer hover:underline transition'
        >
          Abhay Kumar
        </div>

        <div
          onClick={scrollToBottom}
          className='text-3xl sm:text-2xl md:text-2xl cursor-pointer hover:underline transition'
        >
          Let's Connect
        </div>

      </div>
    </>
  );
}

export default Header;
