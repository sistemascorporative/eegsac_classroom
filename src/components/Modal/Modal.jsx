import React, { Component } from 'react';
import Portal from './Portal';


class Modal extends Component {
  render() {
    const { children, toggle, active } = this.props;

    return (
      <Portal>
        {active && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="relative bg-white rounded-lg shadow-[2px_2px_10px_rgba(0,0,0,0.8)] z-10 min-w-[200px] max-w-[250px] sm:min-w-[520px] sm:max-w-[600px] p-[35px] overflow-y-auto max-h-[500px]">
              <button className="w-[30px] h-[30px] absolute right-[12px] top-[12px] bg-orange-600 text-white rounded-md font-bold" onClick={toggle}>X</button>
              <div className="flex flex-col gap-5">
                { children }
              </div>
            </div>
            <div onClick={toggle} className="absolute w-full h-full top-0 left-0 bg-black opacity-50"/>
          </div>
        )}
      </Portal>
    )
  }
}

export default Modal