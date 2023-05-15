import React from "react";

const ShoppingCartContext = React.createContext({
  user_id: null,
  shoppingCart: [],
  totalCart: 0,
  hasItems: false,
  isReel: false,
  urlVideo: "",
  handleShoppingCart: (item: any) => console.log("PROVIDER", item),
  handleRemoveItemShoppingCart: (item: any) => console.log("PROVIDER", item),
  handleHasItems: () => console.log("HAS ITEMS"),
  handleReelVideo: (showReel: any, urlVideo: any) =>
    console.log("URL REEL", showReel, urlVideo),
});

export default ShoppingCartContext;
