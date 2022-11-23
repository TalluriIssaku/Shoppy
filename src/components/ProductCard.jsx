import React,{useContext} from "react";
import styles from "../styles/ProductCard.module.css"
import {HiOutlineShoppingCart} from "react-icons/hi"
import CartContext from "../context/Cart/CartContext";
import {Link } from "react-router-dom"
const ProductCard = ({ id,name, description, img, stock, price,cName,qty }) => {
  const {addToCart,cartIds}=useContext(CartContext)
  return (
    <div className={styles.container}>
      <img src={img} alt={name} />
      <div className={styles.content}>
        <p>{cName}</p>
        <p title={name}>{`${name.substr(0, 65)}...`}</p>
        <p>₹{price}</p>
      </div>
      {cartIds[id]? <Link to="/cart"> <div className={styles.activeCardFooter} >
        <HiOutlineShoppingCart size={22}/> <span>ADDED TO CART</span>
      </div></Link>:  <div className={styles.cardFooter} onClick={()=>addToCart(1,{id,name,description,image_url:img,price,companyName:cName,stock,qty})}>
        <HiOutlineShoppingCart size={22}/> <span>ADD TO CART</span>
      </div>}
    
    </div>
  );
};

export default ProductCard;
