import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { customCursor } from "./constants";
import ShoppingCartContext from "@/context/shoppingCartContext";
const Cursor = () => {
  const router = useRouter();

  const { isDrawer, isShoppingDrawer } = useContext(ShoppingCartContext);

  useEffect(() => {
    setTimeout(() => {
      customCursor();
    }, 4100);
  }, []);

  useEffect(() => {
    customCursor();
  }, [router, isDrawer, isShoppingDrawer]);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text">View</span>
    </div>
  );
};

export default Cursor;
