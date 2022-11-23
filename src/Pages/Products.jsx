import React from 'react'
import ProductCard from '../components/ProductCard'
import styles from '../styles/Product.module.css'
import data from "../assets/data"
const Products = () => {
  return (
    <div className={styles.product_container}>{
      data.map(c=><ProductCard key={c.id} id={c.id} name={c.name} description={c.description} img={c.image_url} price={c.price} stock={c.stock} cName={c.companyName} qty={c.qty}/>)
    }</div>
  )
}

export default Products