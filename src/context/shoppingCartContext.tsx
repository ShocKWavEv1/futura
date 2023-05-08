import React from "react";

const ShoppingCartContext = React.createContext({
  user_id: null,
  shoppingCart: [],
  totalCart: 0,
  hasItems: false,
  handleShoppingCart: (item: any) => console.log("PROVIDER", item),
  handleRemoveItemShoppingCart: (item: any) => console.log("PROVIDER", item),
  handleHasItems: () => console.log("HAS ITEMS"),
});

export default ShoppingCartContext;
