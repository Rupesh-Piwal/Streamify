import React from "react";
import { FaHeadphones } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#0E1011] text-[#F2F2F2] font-semibold font-sans text-[26px] border-2 border-[#161D26] py-4">
      <h2 className="px-[100px] flex flex-row gap-2 items-center">
        <span>
          <FaHeadphones style={{ color: "#14BD95" }} />
        </span>{" "}
        Stremify
      </h2>
    </div>
  );
};

export default Header;
