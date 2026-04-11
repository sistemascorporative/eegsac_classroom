import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp, FaTelegramPlane, FaFacebookF, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";


const Header = () => {
  return (
    <div className="hidden sm:block w-full bg-white shadow-md px-5 py-5">
      <div className='flex flex-row justify-between items-center'>
        <div className="flex flex-row items-center">
          <img src="/logo/logoIcon.png" alt="logo eegsac" style={{height:60}} />
          <p className="uppercase font-bold text-[18px]">Expert Engineers Group SAC</p>
        </div>
        {/* Social Share */}
        <div className="">
          <div className="flex gap-1 items-center">
            <span className="bg-whatsapp p-1.5 rounded-lg transform transition-transform hover:scale-110">
              <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp">
                <FaWhatsapp color="white" style={{width:20, height:20}}/>
              </a>
            </span>
            <span className="bg-telegram p-1.5 rounded-lg transform transition-transform hover:scale-110">
              <a href="https://t.me/Oshainstitute" target="_blank" title="Telegram">
                <FaTelegramPlane color="white" style={{width:20, height:20}}/>
              </a>
            </span>
            <span className="bg-facebook p-1.5 rounded-lg transform transition-transform hover:scale-110">
              <a href="https://www.facebook.com/OSHAINSTITUTE" target="_blank" title="Facebook">
                <FaFacebookF color="white" style={{width:20, height:20}}/>
              </a>
            </span>
            <span className="bg-linkedin p-1.5 rounded-lg transform transition-transform hover:scale-110">
              <a href="https://www.linkedin.com/company/occupationalsafetyhealthadministration" target="_blank" title="LinkedIn">
                <FaLinkedin color="white" style={{width:20, height:20}}/>
              </a>
            </span>
            <span className="bg-twitter p-1.5 rounded-lg transform transition-transform hover:scale-110">
              <a href="https://twitter.com/Oshainst?t=PJGZ6VMgSFrA1Vo0bVGoIQ&amp;s=09" target="_blank" title="Twitter">
                <FaTwitter color="white" style={{width:20, height:20}}/>
              </a>
            </span>
            <span className="bg-instagram p-1.5 rounded-lg transform transition-transform hover:scale-110">
              <a href="https://instagram.com/osha.institute?igshid=MTIzZWQxMDU=" target="_blank" title="Instagram">
                <FaInstagram color="white" style={{width:20, height:20}}/>
              </a>
            </span>
            <span className="pl-1">
              <a href="" className="flex flex-row gap-1 items-center text-sm">
                <HiOutlineMail style={{color:'var(--primary)', width:20, height:20}}/>
                <span className="text-grisOscuro">info@eegsac.com</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export { Header };