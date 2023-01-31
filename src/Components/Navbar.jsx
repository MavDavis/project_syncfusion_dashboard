import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BiChatLeft } from "react-icons/bi";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../Contexts/ContextProvider";
import { BsChatLeft } from "react-icons/bs";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent position="BottomCenter" content={title}>
      <button
        type="button"
        style={{ color }}
        onClick={customFunc}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ backgroundColor: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        >
          {icon}
        </span>
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  function handleClick(item) {
    console.log(item);
    setIsClicked((prev) => ({ ...initialState, [item]: true }));
  }
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, initialState, setScreenSize, screenSize } =
    useStateContext();
    useEffect(()=>{
      const handleResize = ()=>{
        setScreenSize(window.innerWidth)
      } 
      window.addEventListener('resize', handleResize)
      handleResize();
      return ()=>window.removeEventListener('resize', handleResize)
       },[])
       useEffect(()=>{
if(screenSize <= 900){
  setActiveMenu(false)
}else{
  setActiveMenu(true)

}
       },[screenSize])
  return (
    <div className="flex justify-between p-2 md:mx-6 relative ">
      <NavButton
        title={"Menu"}
        customFunc={() => {
          setActiveMenu((prev) => !prev);
        }}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title={"Cart"}
          customFunc={() => {
            handleClick("cart");
          }}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title={"Chat"}
          customFunc={() => {
            handleClick("chat");
          }}
          dotColor="#03c9df"
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title={"Notification"}
          customFunc={() => {
            handleClick("notification");
          }}
          dotColor="#03c9df"
          color="blue"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent position="BottomCenter" content={"Profile"}>
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="w-8 h-8 rounded-full" />

            <p>
              <span className="text-gray-400 text-14">Hi,</span>
              {""}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />}
        {isClicked.chat && <Chat />}
      </div>
    </div>
  );
};

export default Navbar;
