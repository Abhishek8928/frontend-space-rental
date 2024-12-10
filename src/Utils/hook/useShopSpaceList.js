import { useDispatch } from "react-redux";
import axiosInstance from "../../config/axios";
import { useEffect } from "react";
import { addShopSpaceList } from "../../config/slice/shopSpaceSlice";

function useShopSpaceList(selectedCategory) {

  const dispatch = useDispatch();

  async function getShopSpaceList() {
    try {
      const { data } = await axiosInstance.get(
        `/spaces?selectedCategory=${selectedCategory}`
      );
      dispatch(addShopSpaceList(data.data));
    } catch (error) {
      console.error("Failed to fetch shop space list:", error);
    }
  }

  useEffect(() => {
    getShopSpaceList();
  }, [selectedCategory]);
}

export default useShopSpaceList;
