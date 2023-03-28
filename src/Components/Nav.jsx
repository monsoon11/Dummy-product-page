import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import search from "../assets/images/search.svg";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
const Nav = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="navbar h-10 w-full bg-white text-black text-[20px] flex flex-row items-center justify-between px-10">
        <div className="logo h-10 w-3/8 overflow-hidden md:order-1">
          <img src={Logo} alt="" />
        </div>
        <div className="navcontent md:order-2 hidden md:block">
          <ul className="list-styled flex flex-row gap-10 justify-start items-center">
            <li className="nav-items cursor-pointer min-w-[3rem] p-1">Store</li>
            <li className="nav-items cursor-pointer min-w-[3rem] p-1">Buy</li>
            <li className="nav-items cursor-pointer min-w-[3rem] p-1">Cart</li>
            <li className="nav-items cursor-pointer min-w-[3rem] p-1">
              SignUp
            </li>
            <li className="nav-items cursor-pointer min-w-[3rem] p-1">
              Support
            </li>
            <li className="nav-items cursor-pointer min-w-[3rem] p-1">
              <img src={search} alt="" />
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            setVisible((visible) =>
              visible == false ? true : visible === true ? false : true
            );
          }}
          className="md:hidden">
          {!visible ? (
            <RxHamburgerMenu size={25} className="cursor-pointer md:hidden" />
          ) : (
            <RxCross2 size={25} className="cursor-pointer md:hidden" />
          )}
        </div>
        {visible && (
          <div className="navcontent md:hidden bg-black/90 text-white flex flex-row items-start justify-center absolute top-0 left-0 h-full w-[15rem] py-1">
            <ul className="list-styled flex flex-col gap-3 justify-center items-start relative">
              <li className="nav-items cursor-pointer min-w-[3rem] p-1  ">
                Store
              </li>
              <li className="nav-items cursor-pointer min-w-[3rem] p-1 ">
                Buy
              </li>
              <li className="nav-items cursor-pointer min-w-[3rem] p-1 ">
                Cart
              </li>
              <li className="nav-items cursor-pointer min-w-[3rem] p-1 ">
                SignUp
              </li>
              <li className="nav-items cursor-pointer min-w-[3rem] p-1 ">
                Support
              </li>
              <li className="nav-items cursor-pointer min-w-[3rem] p-1 ">
                <BsSearch size={20} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
