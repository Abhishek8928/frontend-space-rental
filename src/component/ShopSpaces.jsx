import axios from "axios";
import React, { useEffect, useState } from "react";
import useShopSpaceList from "../Utils/hook/useShopSpaceList";
import { useDispatch, useSelector } from "react-redux";
import { removeShopSpace } from "../config/slice/shopSpaceSlice";
import RowListCard from "./RowListCard";
import axiosInstance from "../config/axios";
import { Link } from "react-router-dom";

const ShopSpaces = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const spaceList = useSelector((store) => store.shopSpace);
  const [msg, setMsg] = useState({
    message: "",
  });

  useShopSpaceList();

  async function deleteSpaceHandler(id) {
    try {
      const { status, data } = await axiosInstance.delete(`/spaces/${id}`);

      if (status === 200) {
        setMsg({
          message: data?.message,
        });

        dispatch(removeShopSpace(id));
        setTimeout(()=>{
          setMsg({
            message:""
          })
        },3000)
      }
    } catch (error) {
      console.error("Failed to delete space:", error);
      setMsg({
        status: false,
        message: "Failed to delete space: " + error.message,
      });
    }
  }

  if (!spaceList) {
    return <h1>loading</h1>;
  }


  return (
    <div className="w-full h-screen px-[4vw] py-[2vw]">
      
        {
          msg.message && <h1 className="bg-green-600 text-white rounded-md w-1/3 py-2 px-2 text-sm font-semibold">
          {msg.message}
        </h1>
        }
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <i className="ri-arrow-left-line "></i>

          <h2 className="text-lg font-semibold text-zinc-800 ">
            Shop Space Management
          </h2>
        </div>

        <Link to="/create-space" className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-semibold">
          {" "}
          <i className="ri-add-fill"></i> Add Shop Space
        </Link>
      </div>

      <div className="w-full my-8 p-4 border-2 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className=" text-sm text-gray-600 font-medium">
            List of Shop Spaces{" "}
            <span className="text-green-500">({spaceList?.length})</span>
          </h2>

          <select
            name=""
            value={selectedCategory}
            onChange={(e)=> setSelectedCategory(e.target.value)}
            className="text-sm text-gray-600 font-medium border-2 px-2 py-2 w-1/5 rounded "
            id=""
          >
            <option value="all">all</option>
            <option value="self">self</option>
            <option value="hanger">hanger</option>
          </select>
        </div>

        <div className="w-full h-1/2  mt-4 py-2">
          <div className="bg-[#f6f6f6]  rounded-t w-full flex">
            <div className="w-1/5 py-2.5 text-center text-xs text-zinc-600 font-semibold">
              Name
            </div>
            <div className="w-1/5 py-2.5 text-center text-xs text-zinc-600 font-semibold">
              Type(HANGER/SHELF)
            </div>
            <div className="w-1/5 py-2.5 text-center text-xs text-zinc-600 font-semibold">
              Capacity
            </div>
            <div className="w-1/5 py-2.5 text-center text-xs text-zinc-600 font-semibold">
              Occupied Space
            </div>
            <div className="w-1/5 py-2.5 text-center text-xs text-zinc-600 font-semibold">
              Price Per Unit
            </div>
            <div className="w-1/5 py-2.5 text-center text-xs text-zinc-600 font-semibold">
              Action
            </div>
          </div>

          {spaceList.length === 0 ? (
            <>
              <div className="flex justify-center items-center h-full py-6">
                <h1 className="text-sm font-semibold text-zinc-700">
                  no space has found . create a new one
                </h1>
              </div>
            </>
          ) : (
            spaceList.map((item ,index) => (
              <RowListCard key={index} handler={deleteSpaceHandler} {...item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopSpaces;
