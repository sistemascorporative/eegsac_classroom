import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../api/auth.api';

import menuItems from '../pathMenu/MenuItemsPath';
import { getEstudianteByEmail } from '../api/Estudiante.api';

import { FaRegUserCircle } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';


function SideBarMenu({ logout, isAuthenticated, children }) {
  const navigate = useNavigate();
  const [msgError, setMsgError] = useState('');

  const [isOpen, setIsOpen] = useState(
    JSON.parse(localStorage.getItem("isOpen")) || false
  );
  const [activeItemIndex, setActiveItemIndex] = useState(
    JSON.parse(localStorage.getItem("activeItemIndex")) || 0
  );
  const [userData, setUserData] = useState({ usernom: '', userape: '', usercodosh: '', userpai: '' });

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  const handleItemClick = (index) => setActiveItemIndex(index);

  const logoutUser = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("activeItemIndex", JSON.stringify(activeItemIndex));
    localStorage.setItem("isOpen", JSON.stringify(isOpen));
  }, [isOpen, activeItemIndex]);

  useEffect(() => {
    const loadEstudiante = async () => {
      try {
        const email = localStorage.getItem('email');
        const estudianteData = await getEstudianteByEmail(email);
        setUserData(estudianteData.usuario);
      } catch (error) {
        setMsgError({error});
      }
    };
    loadEstudiante();
  }, []);

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* SideBar  md */}
      <div className={`flex flex-row items-center bg-primary transition-all duration-400 overflow-y-auto 
        p-2 gap-2 md:flex-col md:p-6 md:pt-5 md:gap-6 md:self-stretch 
        ${ isOpen ? "md:w-[210px]" : "md:w-[110px] md:px-[10px] md:gap-[15px]" }`}
      >
        {/* Toggle Button */}
        <div className={`hidden md:flex w-full text-white ${isOpen ? 'justify-end' : 'justify-center'}`}>
          <IoMenu onClick={toggleMenu} className="w-9 h-9"/>
        </div>
        {/* User's personal data  */}
        <div className="hidden md:block md:w-full">
          <div className={`flex flex-col items-center p-3 gap-2 rounded-lg transition-all duration-400
                ${isOpen ? 'border-2 border-white' : 'justify-center'}`}
          >
            <FaRegUserCircle className="text-white w-9 h-9" />
            <div className={`flex flex-col w-full
                  ${!isOpen && 'hidden'}`}
            >
              <p className="text-white">{userData.usernom} {userData.userape}</p>
              <p className="text-white">{userData.userpai}</p>
              <p className="text-white">{userData.usercodosh}</p>
            </div>
          </div>
        </div>
        {/* MenuBar */}        
        <div className={`flex flex-row md:flex-col flex-1 h-auto gap-[5px]
              ${isOpen ? 'items-stretch' : 'items-center'} ${!isOpen && 'w-[90px]'}`}
        >         
          {
            menuItems().map((item, index) => (
              <React.Fragment key={item.name}>                  
                <SidebarItem
                  item={item}
                  isOpen={isOpen}
                  active={index === activeItemIndex}
                  onClick={() => handleItemClick(index)}
                  />
              </React.Fragment>
            ))
          }                                        
        </div>
        {/* Logout */}
        <div className={`md:w-full h-auto flex items-end transition-all duration-1000 ease-in-out
          ${isOpen ? 'justify-end' : 'justify-center'}`}
        >
          <div className="text-white flex flex-row items-center h-auto px-1 py-1 gap-2.5 hover:bg-orange-500 hover:transition-all hover:duration-500 hover:rounded-lg cursor-pointer" onClick={logoutUser}>
            <p className={`text-white ${isOpen ? 'block' : 'hidden'}`}>Cerrar Sesión</p>
            <IoIosLogOut style={{ width:28, height:28 }} />
          </div>
        </div>
      </div>
      <main className="h-screen flex flex-col items-center bg-gray-100 flex-1 self-stretch overflow-y-auto">
        {children}
      </main>
      {/*redirect ? <Redirect to='/' /> : <Fragment></Fragment>*/}
    </div>
    )
};


function SidebarItem({ item, isOpen, active, onClick }) {
  const { path, iconWhite, name } = item;
  const isComponent = item.isComponent || false;
  
  return (
    <NavLink
      to={path}
      className={`sm:w-[80px] md:w-full h-[50px] flex items-center no-underline sm:px-2 md:py-1.5 md:px-4 gap-2 self-stretch transition-all duration-500 rounded-lg transition-all duration-500
        hover:bg-orange-400 hover:transition-all hover:duration-500 hover:rounded-lg cursor-pointer
        ${isOpen ? "" : "h-auto flex flex-col gap-1 py-2 comprimido"}
        ${active ? "bg-orange-700" : ""}`}
      onClick={onClick}
      style={{ justifyContent: isOpen ? "" : "center" }}
      key={name}
    >
      <div className="">
        {iconWhite}
      </div>
      <p className={`text-white ${isOpen ? "" : "text-[10px]"}`}>
        {name}
      </p>
    </NavLink>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(SideBarMenu);