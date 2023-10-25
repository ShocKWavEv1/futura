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
  handleToast: () => void,
  handleLoader: () => void,
  handleShoppingDrawer: () => void
) => {
  handleLoader();
  const newArr = shoppingCart.filter(
    (cart: any) => cart.slug.current !== item.slug.current
  );
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
    handleLoader();
    return data.message;
  });
  return newArr;
};

export const patchRemoveAll = (
  user_id: any,
  handleShoppingDrawer: () => void,
  handleRemoveAllShoppingCart: () => void,
  handleLoader: () => void
) => {
  handleLoader();
  const updateUser = async () => {
    const data = {
      user_id: user_id,
      items: [],
    };
    const response = await fetch("/api/users/updateUser", {
      method: "PATCH",
      body: JSON.stringify(data),
    });
    return response.json();
  };
  updateUser().then((data: any) => {
    handleRemoveAllShoppingCart();
    handleLoader();
    return data.message;
  });
  return [];
};

export const patchCart = (
  shoppingCart: any,
  user_id: any,
  handlePatchShoppingCart: (item: any) => void,
  handleLoading: (val: boolean) => void,
  handleShoppingDrawer: () => void
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
  handleToastSuccess: () => void,
  handleLoading: (val: boolean) => void,
  handleShoppingDrawer: () => void
) => {
  const slugArr: any = [];
  const currentArr: any = [];
  shoppingCart.forEach((cart: any) => {
    slugArr.push(cart.slug.current);
    currentArr.push(cart);
  });
  if (slugArr.includes(item.slug.current)) {
    handleShoppingDrawer();
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
      handleToastSuccess();
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
  handleToastSuccess: () => void,
  handleHasItems: () => void,
  handleLoading: (val: boolean) => void,
  handleShoppingDrawer: () => void
) => {
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
    handleToastSuccess();
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
  handleToastSuccess: () => void,
  handleHasItems: () => void,
  handleLoading: (val: boolean) => void,
  handleShoppingDrawer: () => void
) => {
  if (hasItems) {
    patchUser(
      shoppingCart,
      user_id,
      item,
      handleShoppingCart,
      handleToast,
      handleToastSuccess,
      handleLoading,
      handleShoppingDrawer
    );
  } else {
    createUser(
      user_id,
      item,
      handleShoppingCart,
      handleToast,
      handleToastSuccess,
      handleHasItems,
      handleLoading,
      handleShoppingDrawer
    );
  }
};
