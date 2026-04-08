import React from 'react';


const TopBar = () => {
  return (
    <header className="w-full flex flex-col sm:flex-row px-5 py-5 gap-3 bg-white shadow-lg justify-between">
      <img
        className="mx-auto sm:mx-0 w-[150px] h-auto"
        src="/logo/logoSafety.png"
        alt="eeegsac"
      />        
      <div className="mx-auto sm:mx-0 flex flex-row items-center gap-1">
        <a href="https://eegsac.com/" className="p-2 rounded-lg border border-primary">
          <span className="text-primary text-sm">Página web</span>
        </a>
        {/*<a href="https://eegsac.com/contactanos/" className="bg-primary rounded-lg text-white p-2">
          <span className="text-white text-sm">Contáctanos</span>
        </a>*/}
      </div>
    </header>
  );
};

export default TopBar;