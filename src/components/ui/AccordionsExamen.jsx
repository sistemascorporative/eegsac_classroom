import React, { createContext, useContext, useRef, useEffect, useState } from "react";

import { ChevronDown } from "react-feather";
import { RiBarcodeBoxFill } from "react-icons/ri";
import { PiBooksFill } from "react-icons/pi";
import { FaCentercode } from "react-icons/fa";


const AccordianContext = createContext()


function AccordianExamProgram({children, value, onChange, ...props}) {
  
  const [selected, setSelected] = useState(value);
  
  useEffect(() => {
    onChange?.(selected)
  }, [selected]);
  
  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
};


function AccordianItem({ children, value, cod, codosh, nompro, ...props }) {
  
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;
  const ref = useRef(null);

  return (
    <li className="rounded-lg shadow-lg border-b bg-white" {...props}>
      {/* Header del accordian */}
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-medium"
      >
        <span className='flex gap-7 items-center'>
          <span className='flex gap-1 items-center'>
            <RiBarcodeBoxFill style={{color:'var(--primary)', width:25, height:25}}/>
            <h4 className='text-gray-500'>{cod}</h4>
          </span>
          <span className='flex gap-1 items-center'>
            <FaCentercode style={{color:'var(--primary)', width:25, height:25}}/>
            <h4 className='text-gray-500'>{codosh}</h4>
          </span>
          <span className='flex gap-1 items-center'>
            <PiBooksFill style={{color:'var(--primary)', width:25, height:25}}/>
            <h3>{nompro}</h3>
          </span>
        </span>
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      {/* Content */}
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pr-3 pl-3 pb-3" ref={ref}>
          <div className='p-5 bg-grisFondo rounded-lg'>
            {children}
          </div>
        </div>
      </div>
    </li>
  )
}

export { AccordianExamProgram, AccordianItem}