import React,{useContext} from 'react'
import styles from '../styles/Appbar.module.css'
import {FaShoppingCart} from 'react-icons/fa'
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from '../context/Cart/CartContext'
import {Link,useLocation } from 'react-router-dom'
const Appbar = () => {
    const {cartItems}=useContext(CartContext)
    const location = useLocation()
  return (
    <div className={styles.appbar}>
      <div className={styles.logo}>
        <h1>Shoppy</h1>
        <Link to="/">
          <div style={{ fontWeight: location.pathname === "/" && "bolder" }}>
            Home
          </div>{" "}
        </Link>
      </div>
      <Link to="/cart">
        <div className={styles.icons}>
          {location.pathname === "/cart" ? (
            <FaShoppingCart size={24} />
          ) : (
            <AiOutlineShoppingCart size={24} />
          )}
          {cartItems.length > 0 && (
            <div className={styles.badge}>
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default Appbar