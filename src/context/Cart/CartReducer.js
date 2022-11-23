const CartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      if (action.payload.id === 1) {
        console.log(action);
        const existItem = state.cartItems.find(
          (i) => i.id === action.payload.item.id
        );

        console.log(existItem, " hi");

        if (existItem) {
          const items = state.cartItems.filter(
            (c) => c.id !== action.payload.item.id
          );
          const ids = { ...state.cartIds, [action.payload.item.id]: 0 };
          console.log(items);
          localStorage.setItem("items", JSON.stringify(items));
          localStorage.setItem("ids", JSON.stringify(ids));
          return {
            ...state,
            cartItems: items,
            cartIds: ids,
          };
        } else {
          const items = [...state.cartItems, action.payload.item];
          const ids = { ...state.cartIds, [action.payload.item.id]: 1 };
          localStorage.setItem("items", JSON.stringify(items));
          localStorage.setItem("ids", JSON.stringify(ids));
          return {
            ...state,
            cartItems: items,
            cartIds: ids,
          };
        }
      } else {
        const items = state.cartItems.map((c) =>
          c.id === action.payload.item.id ? action.payload.item : c
        );
        localStorage.setItem("items", JSON.stringify(items));
        return {
          ...state,
          cartItems: items,
        };
      }

    case "emptyCart":
      if (localStorage.items) localStorage.removeItem("items");
      return { ...state, cartItems: [] };
      case "deleteItem":
        const items=state.cartItems.filter(c=>c.id!==action.payload)
        const ids={...state.cartIds,[action.payload]:0}
            localStorage.setItem("items", JSON.stringify(items));
            localStorage.setItem("ids", JSON.stringify(ids));
        return {...state,cartItems:items,cartIds:ids}
    default:
      return state;
  }
};
export default CartReducer;
