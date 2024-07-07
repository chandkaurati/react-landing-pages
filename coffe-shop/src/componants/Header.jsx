import React from "react";
import heroimage from "../../public/cofee.jpg";
import Button from "./Button";
function Header() {
  return (
    <div className="w-full  lg:flex lg:justify-between">
      <div className="left_section
       xl:flex xl:flex-col xl:justify-center
       xl:gap-3
       ">
        <h1  className="font-bold xl:text-6xl ">A ROSTED</h1>
        <h1  className="font-bold xl:text-6xl ">COFFEE FOR YOU</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor <br />
          obcaecati blanditiis inventore consequuntur fugiat repellendus?
        </p>
        <Button title={"Shop now"} classes={"bg-black text-white w-40 p-2"}/>
      </div>
      <div className="image_Container w-1/2">
        <img className="w-[35rem]" src={heroimage} alt="" />
      </div>
    </div>
  );
}

export default Header;
