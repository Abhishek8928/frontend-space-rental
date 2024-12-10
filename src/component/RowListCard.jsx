


import React from 'react'
import { Link } from 'react-router-dom'

const RowListCard = ({_id , capacity ,type, occupied , spaceName , handler , pricePerUnit}) => {
  return (
    <div className="flex border-b-2">

          <div className="w-1/5 flex justify-center items-center py-2.5 text-center text-xs text-black font-semibold">
              {spaceName}
            </div>
            <div className="w-1/5 py-2.5 flex justify-center items-center text-center text-xs text-black font-semibold">
              {type}
            </div>
            <div className="w-1/5 py-2.5 flex justify-center items-center text-center text-xs text-black font-semibold">
              {capacity}
            </div>
            <div className="w-1/5 py-2.5 flex justify-center items-center text-center text-xs text-black font-semibold">
              {occupied}
            </div>
            <div className="w-1/5 py-2.5 flex justify-center items-center text-center text-xs text-black font-semibold">
            ₹ {pricePerUnit}
            </div>
            <div className="w-1/5 py-2.5 text-center gap-2 flex justify-center text-xs text-zinc-600 font-semibold">
              <button onClick={()=> handler(_id)} className="bg-red-500 text-white  text-xs px-4 py-1.5 rounded">Delete</button>
              <Link to={`/update-space/${_id}`} className="bg-green-500 text-white  text-xs px-4 py-1.5 rounded">Update</Link>
            </div>

          </div>
  )
}

export default RowListCard