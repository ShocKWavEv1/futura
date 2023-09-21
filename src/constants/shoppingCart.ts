import { formatCurrency } from "./formatCurrency"

export const getPriceSingleItem = (item: any) => {
    const totalSingleItem = item.price * item.currentQuantity
    return formatCurrency(totalSingleItem);
}

export const getTotalPrices = (cart: any) => {
    let sum = 0;
    console.log(cart)
    cart.forEach((item: any) => {
        const singleItemPrice = item.price * item.currentQuantity
        sum = sum + singleItemPrice
    })
    return formatCurrency(sum)
}