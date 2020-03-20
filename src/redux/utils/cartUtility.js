export const addItemToCart = (cartItems, currentItem) => {
    const existingCartItem = cartItems.find(item => item.id === currentItem.id);

    if(existingCartItem){
        return cartItems.map((item) => {
            return (item.id === currentItem.id) ? { ...currentItem, quantity: item.quantity + 1 } : { ...item } 
        })
    }

    return [ ...cartItems, { ...currentItem, quantity: 1}]
}

export const increaseQuantity = (cartItems, currentItem) => {
    return cartItems.map(item => item.id === currentItem.id ? { ...item, quantity: item.quantity + 1 } : { ...item })
}

export const decreaseQuantity = (cartItems, currentItem) => {
    return cartItems.map(item => {
        if(item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }
        } else {
            return  { ...item }
        }
    })
}