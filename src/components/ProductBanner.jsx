import React, { useContext, useState } from "react";
import styles from "../styles/ProductBanner.module.css";
import { AiFillDelete } from "react-icons/ai";
import CartContext from "../context/Cart/CartContext";
const ProductBanner = ({
  id,
  name,
  description,
  img,
  qty,
  stock,
  price,
  cName,
  no,
}) => {
  console.log(qty);
  const { deleteItemfromCart, addToCart } = useContext(CartContext);
  return (
    <div className={styles.ProductBanner}>
      <div>
        <img src={img} alt={name} />
      </div>
      <div title={name} className={styles.title}>{`${name.substr(
        0,
        60
      )}...`}</div>
      <div>{`₹${price}`}</div>
      <div>
        <select
          value={qty}
          onChange={(e) => {
            addToCart(2, {
              id,
              name,
              description,
              image_url: img,
              qty: Number(e.target.value),
              stock,
              price,
              companyName: cName,
            });
          }}
        >
          {[...Array(stock).keys()].map((c) => (
            <option value={c + 1} key={c + 1}>
              {c + 1}
            </option>
          ))}
        </select>
      </div>
      <div>
        <AiFillDelete
          size={20}
          style={{ cursor: "pointer" }}
          onClick={() => deleteItemfromCart(id)}
        />
      </div>
    </div>
  );
};

export default ProductBanner;
