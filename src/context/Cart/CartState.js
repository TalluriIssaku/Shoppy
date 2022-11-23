import CartContext from "./CartContext";
import CartReducer from "./CartReducer"
import {useReducer} from "react"
const CartState=(props)=>{
    const initialState = {
      cartItems: localStorage.items
        ? JSON.parse(localStorage.getItem("items"))
        : [],
      cartIds: localStorage.items
        ? JSON.parse(localStorage.getItem("ids"))
        : {},
    };
const [state,dispatch] = useReducer(CartReducer,initialState)
const addToCart=(id,item)=>{
dispatch({type:'addToCart',payload:{id:id,item:item}})
}
const deleteItemfromCart=(id)=>{
    console.log(id)
    dispatch({type:'deleteItem',payload:id})
}
return (<CartContext.Provider value={{addToCart,cartItems:state.cartItems,cartIds:state.cartIds,deleteItemfromCart}}>{props.children}</CartContext.Provider>)
}
export default CartState