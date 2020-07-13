export const addItemToCart = (cartItems, itemToAdd) => {
    const item = cartItems.find(item => item.id === itemToAdd.id);
    if (!item) {
        return [...cartItems, { ...itemToAdd, quantity: 1 }];
    }
    const newCartItems = cartItems.map(item => {
        if (item.id !== itemToAdd.id) return item;
        return { ...item, quantity: item.quantity + 1 };
    });

    return newCartItems;

}