import React,{useContext} from 'react'
import ProductBanner from '../components/ProductBanner'
import CartContext from '../context/Cart/CartContext'
import styles from "../styles/Cart.module.css"
import {Link} from "react-router-dom"
const Cart = () => {
  const {cartItems}=useContext(CartContext)
  return (
    <div className={styles.container}>
      <h1>Shopping Cart</h1>{" "}
      <div className={styles.gridcontainer}>
        {cartItems.length > 0 ? (
          <>
            <div className={styles.cartContainer}>
              {cartItems.map((c, index) => (
                <ProductBanner
                  key={c.id}
                  id={c.id}
                  no={index}
                  name={c.name}
                  description={c.description}
                  img={c.image_url}
                  price={c.price}
                  stock={c.stock}
                  cName={c.companyName}
                  qty={c.qty}
                />
              ))}
            </div>
            <div className={styles.checkout}>
              <h2>{`Total (${cartItems.length}) Items`}</h2>
              <p>
                {`₹${cartItems.reduce((acc, curr) => {
                  return acc + curr.price * curr.qty;
                }, 0)}`}
              </p>
              <hr />
              <button>Proceed to checkout</button>
            </div>
          </>
        ) : (
          <center>
            <p>Your cart is Empty, <Link to="/">Please shop here</Link></p>
          </center>
        )}
      </div>
    </div>
  );
}

export default Cart