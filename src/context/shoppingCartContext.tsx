import React from "react";

const ShoppingCartContext = React.createContext({
  user_id: null,
  shoppingCart: [],
  totalCart: 0,
  hasItems: false,
  isReel: false,
  isDrawer: false,
  isShoppingDrawer: false,
  urlVideo: "",
  handleShoppingCart: (item: any) => console.log("PROVIDER", item),
  handlePatchShoppingCart: (cart: any) => console.log("CART", cart),
  handleRemoveItemShoppingCart: (item: any) => console.log("PROVIDER", item),
  handleHasItems: () => console.log("HAS ITEMS"),
  handleReelVideo: (showReel: any, urlVideo: any) =>
    console.log("URL REEL", showReel, urlVideo),
  handleShoppingDrawer: () => console.log("Shopping Drawer"),
});

export default ShoppingCartContext;
