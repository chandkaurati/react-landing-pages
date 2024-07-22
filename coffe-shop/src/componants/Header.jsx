import React from "react";
import heroimage from "../../public/cofee.jpg";
import coffesplash from "../../public/coffesplash.png"
import papercup from  "../../public/papercup.png"
import Button from "./Button";
function Header() {
  return (
    <div className="w-full  lg:flex lg:justify-between lg:p-5">
      {/* LEFT  */}
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
        <Button title={"Shop now"} classes={"bg-black text-white w-40 p-2 rounded-full"}/>
      </div>
      {/*  right image container */}
      <div className="image_Container  flex flex-col justify-center p-0 items-center w-1/2">
        <img className="w-[15rem]" src={coffesplash} alt="" /> 
        <img className="w-[21rem]" src={papercup} alt="" /> 
      </div>

    </div>
  );
}

export default Header;
