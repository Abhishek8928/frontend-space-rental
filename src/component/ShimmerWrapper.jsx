import React from "react";


const myArray = new Array(10).fill(null);
const ShimmerWrapper = () => {
  return (
    <>
      <div className="w-full h-1/2  mt-4 py-2">
        {
          myArray.map((item,index)=>{
            return <RowShimmer key={index}/>
          })
        }
      </div>
    </>
  );
};



const RowShimmer = () => {
  return (
    <div className="flex border-b-2 mb-2 gap-2">
          <div className="w-1/5 flex bg-[#eee] justify-center items-center py-2.5 text-center text-xs text-black font-semibold"></div>
          <div className="w-1/5 bg-[#eee] py-2.5 flex justify-center items-center text-center text-xs text-black font-semibold">
            
          </div>
          <div className="w-1/5 bg-[#eee] py-2.5 flex justify-center items-center text-center text-xs text-black font-semibold">
           
          </div>
          <div className="w-1/5 bg-[#eee] py-2.5 flex justify-center items-center text-center text-xs text-black font-semibold">
           
          </div>
          <div className="w-1/5 bg-[#eee] py-2.5 flex justify-center items-center text-center text-xs text-black font-semibold">
            
          </div>
          <div className="w-1/5 bg-[#eee] py-2.5 text-center gap-2 flex justify-center text-xs text-zinc-600 font-semibold"></div>
        </div>
  )
}








export default ShimmerWrapper;
