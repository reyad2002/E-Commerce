import React from "react";
export default function Loading() {
    
  return (
    <div className=" bg-bwhite text-center absolute top-0 left-0 w-full h-[100vh] z-50">
      <div className="loader absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] "></div>
    </div>
  );
}
