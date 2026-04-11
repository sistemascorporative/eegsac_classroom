import React, { createContext, useContext, useRef, useEffect, useState } from "react";
import { ChevronDown } from "react-feather";


const AccordianContext = createContext();

function Accordian({ children, value, onChange, ...props }) {
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
  )
};

function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext)
  const open = selected === value

  const ref = useRef(null)

  return (
    <li {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-3 font-medium rounded-r-lg border-l-4 border-green-600 border"
      >
        <p className="font-bold text-orange-700">{trigger}</p>
        <ChevronDown
          size={20}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="mt-2 overflow-y-hidden transition-all rounded-lg bg-gray-100"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="p-4 border-t border-gray-300" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}

export { Accordian, AccordianItem}