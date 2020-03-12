export const addItemToCart = (cartItems, currentItem) => {
    const existingCartItem = cartItems.find(item => item.id === currentItem.id);

    if(existingCartItem){
        return cartItems.map((item) => {
            return (item.id === currentItem.id) ? { ...currentItem, quantity: item.quantity + 1 } : { ...item } 
        })
    }

    return [ ...cartItems, { ...currentItem, quantity: 1}]
}