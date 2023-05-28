import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

const Qty = ({ item }) => {
  const { handleSelect } = useContext(CartContext);
  return (
    <div className="flex gap-x-6 items-center text-primary">
      {
        <select
          onChange={(e) => handleSelect(e, item._id)}
          value={item.amount}
          className="p-2 rounded-lg w-[100px] h-12 outline-none text-primary"
        >
          <option value="1">1</option>
          <option value="2">1</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      }
    </div>
  );
};

export default Qty;