import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import axiosInstance from "../config/axios";
import { validateCreateSpaceForm } from "../Utils/validate";
import { useSelector } from "react-redux";

function UpdateSpaceForm() {
  const [payload, setPayload] = useState(null);

  const { spaceId } = useParams();

  
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  function clearErrorMessage() {
    setErrorMessage("");
  }

  async function onSubmitHandler(event) {
    try {
      event.preventDefault();

      const result = validateCreateSpaceForm(payload, clearErrorMessage);

      if (result) {
        const res = await axiosInstance.put(`/spaces/${spaceId}`, payload);
        if (res.status === 200) {
          navigate("/");
        }
      }
    } catch (err) {
      console.error(err);
      const errorMessage =
        err?.response?.data || err?.message || "An unexpected error occurred";
      setErrorMessage(errorMessage);
    }
  }

  async function getSpaceDetails(){
    try {
      const res = await axiosInstance.get(`/spaces/${spaceId}`);
      if (res.status === 200) {
        setPayload(res?.data?.data)
      }
    } catch (error) {
      console.error("Failed to fetch space details:", error);
      setErrorMessage("Failed to fetch space details. Please try again.");
    }
  }

  useEffect(()=>{
    getSpaceDetails();

  },[spaceId])

  

  return !payload ? <h1>loading...</h1> : (
    <>
      <div className="w-full  h-screen  flex justify-center left-0 mt-11 ">
        <div className=" w-[80%] md:w-1/2 ml-[4vw]   ">
          <div className="flex items-center gap-3">
            <i
              onClick={() => navigate("/")}
              className="ri-arrow-left-line cursor-pointer "
            ></i>

            <h2 className="text-lg font-semibold text-zinc-800 ">
              Update The Space
            </h2>
          </div>

          {errorMessage && (
            <p className="bg-red-600 text-white font-satoshi py-1.5 px-2 text-sm mt-3  rounded">
              {errorMessage}
            </p>
          )}

          <form onSubmit={onSubmitHandler} className="py-[2vw]">
            <div className=" flex gap-2 justify-center items-center">
              <InputField
                placeholder="Space Name"
                labelName="space name"
                value={payload?.spaceName}
                onChangeHandler={(e) => {
                  setPayload((prev) => ({
                    ...prev,
                    spaceName: e.target.value,
                  }));
                }}
              />

              <div className="w-full mb-4">
                <label
                  className="block text-base font-semibold   pb-1.5 text-zinc-600"
                  htmlFor=""
                >
                  Space type (Shelf / Hanger)
                </label>

                <select
                  value={payload?.type}
                  name="spaceType"
                  className="text-sm text-gray-600 font-medium border-2 px-2 py-2 w-full  rounded "
                  id="spaceType"
                  onChange={(e) => {
                    setPayload((prev) => ({
                      ...prev,
                      type: e.target.value,
                    }));
                  }}
                >
                  <option value="hanger">Hanger</option>
                  <option value="shelf">shelf</option>
                </select>
              </div>
            </div>

            <div className=" flex gap-2">
              <InputField
                type="number"
                placeholder="Capacity "
                labelName="capacity"
                value={payload?.capacity}
                onChangeHandler={(e) => {
                  setPayload((prev) => ({ ...prev, capacity: e.target.value }));
                }}
              />
              <InputField
                type="number"
                placeholder="occupied"
                labelName="occupied Space"
                value={payload?.occupied}
                onChangeHandler={(e) => {
                  setPayload((prev) => ({ ...prev, occupied: e.target.value }));
                }}
              />
            </div>

            <InputField
              placeholder="Price Per Unit"
              type="number"
              value={payload?.pricePerUnit}
              labelName="price per unit"
              onChangeHandler={(e) => {
                setPayload((prev) => ({
                  ...prev,
                  pricePerUnit: e.target.value,
                }));
              }}
            />

            <button className="bg-blue-600 w-full text-sm font-semibold  block rounded-md p-2.5 text-white">
              Create New Space
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export function InputField({
  placeholder,
  labelName,
  onChangeHandler,
  type,
  value,
}) {
  return (
    <div className="input-wrapper w-full mb-4">
      <label
        className="block text-base font-semibold   pb-1.5 text-zinc-600"
        htmlFor=""
      >
        {labelName || "missing label name"}
      </label>
      <input
        value={value && value}
        onChange={onChangeHandler}
        type={type ?? "text"}
        placeholder={placeholder || ""}
        className="p-3 text-black text-sm w-full   bg-primaryDark rounded-md border-[1px]"
      />
    </div>
  );
}

export default UpdateSpaceForm;
