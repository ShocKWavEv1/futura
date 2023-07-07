export const getUser = (user_id: any) => {
    const getUserById = async () => {
      const response = await fetch(`/api/users/getUser?user_id=${user_id}`, {
        method: "GET",
      });
      return response.json();
    };
    const userById = getUserById().then((data: any) => {
      return data.message;
    });
    return userById;
  };
 
  export const patchRemove = (
    shoppingCart: any,
    user_id: any,
    item: any,
    handleRemoveItemShoppingCart: (item: any) => void,
    handleToast: () => void
  ) => {
    const newArr = shoppingCart.filter((cart: any) => cart.slug.current !== item.slug.current);
    const updateUser = async () => {
      const data = {
        user_id: user_id,
        items: newArr,
      };
      const response = await fetch("/api/users/updateUser", {
        method: "PATCH",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    updateUser().then((data: any) => {
      handleRemoveItemShoppingCart(item);
      handleToast();
      return data.message;
    });
    return newArr;
  };
 
  export const patchCart = (
    shoppingCart: any,
    user_id: any,
    handlePatchShoppingCart: (item: any) => void,
    handleLoading: (val: boolean) => void,
    handleShoppingDrawer: () => void,
  ) => {
      const updateUser = async () => {
        const data = {
          user_id: user_id,
          items: shoppingCart,
        };
        const response = await fetch("/api/users/updateUser", {
          method: "PATCH",
          body: JSON.stringify(data),
        });
        return response.json();
      };
      updateUser().then((data: any) => {
        handlePatchShoppingCart(shoppingCart);
        handleLoading(false);
        handleShoppingDrawer();
        return data.message;
      });
      return shoppingCart;
  };
 
  export const patchUser = (
    shoppingCart: any,
    user_id: any,
    item: any,
    handleShoppingCart: (item: any) => void,
    handleToast: () => void,
    handleLoading: (val: boolean) => void,
    handleShoppingDrawer: () => void,
  ) => {
    const slugArr: any = [];
    const currentArr: any = [];
    shoppingCart.forEach((cart: any) => {
      slugArr.push(cart.slug.current);
      currentArr.push(cart);
    });
    if (slugArr.includes(item.slug.current)) {
      handleToast();
    } else {
      currentArr.push(item);
      handleLoading(true);
      const updateUser = async () => {
        const data = {
          user_id: user_id,
          items: currentArr,
        };
        const response = await fetch("/api/users/updateUser", {
          method: "PATCH",
          body: JSON.stringify(data),
        });
        return response.json();
      };
      updateUser().then((data: any) => {
        handleShoppingCart(item);
        handleLoading(false);
        handleShoppingDrawer();
        return data.message;
      });
      return currentArr;
    }
  };
 
  export const createUser = async (
    user_id: any, 
    item: any, 
    handleShoppingCart: (item: any) => void, 
    handleToast: () => void, 
    handleHasItems: () => void, 
    handleLoading: (val: boolean) => void, 
    handleShoppingDrawer: () => void) => {
    const createNewUser = async () => {
      handleLoading(true);
      const data = {
        user_id: user_id,
        items: [item],
      };
      const response = await fetch("/api/users/createUser", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    const newUser = createNewUser().then((data: any) => {
      handleHasItems();
      handleShoppingCart(item);
      handleLoading(false);
      handleShoppingDrawer();
      return data.message;
    });
    return newUser;
  };
 
  export const cartExists = (
    shoppingCart: any,
    user_id: any,
    item: any,
    hasItems: any,
    handleShoppingCart: (item: any) => void,
    handleToast: () => void,
    handleHasItems: () => void,
    handleLoading: (val: boolean) => void,
    handleShoppingDrawer: () => void,
  ) => {
    if (hasItems) {
      patchUser(shoppingCart, user_id, item, handleShoppingCart, handleToast, handleLoading, handleShoppingDrawer);
    } else {
      createUser(user_id, item, handleShoppingCart, handleToast, handleHasItems, handleLoading, handleShoppingDrawer);
    }
  };