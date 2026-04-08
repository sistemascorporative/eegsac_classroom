import React, { createContext, useContext, useRef, useEffect, useState } from "react";

import { ChevronDown } from "react-feather";
import { RiBarcodeBoxFill } from "react-icons/ri";
import { PiBooksFill } from "react-icons/pi";
import { MdGrade } from "react-icons/md";
import { FaCentercode } from "react-icons/fa";


const AccordianContext = createContext()


function AccordianExamProgram({children, value, onChange, ...props}) {

  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
};


function AccordianItem({ children, value, cod, codosh, nompro, promedio, ...props }) {
  
  const { selected, setSelected } = useContext(AccordianContext)
  const open = selected === value
  const ref = useRef(null)

  return (
    <li className="rounded-lg shadow-lg border-b bg-white" {...props}>
      {/* Header del accordian */}
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex flex-col lg:flex-row gap-4 justify-between p-4 font-medium"
      >
        <span className="flex gap-4 items-center">
          <span className="flex gap-1 items-center text-sm">
            <RiBarcodeBoxFill style={{color:'var(--primary)', width:25, height:25}}/>
            <p className="text-gray-500">{cod}</p>
          </span>
          <span className='flex gap-1 items-center text-sm'>
            <FaCentercode style={{color:'var(--primary)', width:24, height:24}}/>
            <p className='text-gray-500'>{codosh}</p>
          </span>
          <span className='flex gap-1 items-center text-sm'>
            <PiBooksFill style={{color:'var(--primary)', width:25, height:25}}/>
            <h4>{nompro}</h4>
          </span>
        </span>
        <div className='flex items-center justify-end gap-5'>
          <span className='flex gap-2 items-center p-2 bg-primary rounded-lg'>
            <MdGrade style={{color:'var(--secondary)', width:20, height:20}}/>
            <p className='text-white text-xs'>Calificación promedio: <span className="font-bold text-sm">{promedio}</span></p>
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>
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