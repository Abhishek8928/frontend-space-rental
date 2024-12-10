import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import axiosInstance from "../../config/axios";
import { useEffect } from "react";
import { addShopSpaceList } from "../../config/slice/shopSpaceSlice";

function useShopSpaceList() {
  const dispatch = useDispatch();

  async function getShopSpaceList() {
    try {
      const { data } = await axiosInstance.get("/spaces?selectedCategory=");
      dispatch(addShopSpaceList(data.data));
    } catch (error) {
      console.error("Failed to fetch shop space list:", error);
    }
  }

  useEffect(() => {
    getShopSpaceList();
  },[]);
}


export default useShopSpaceList;
