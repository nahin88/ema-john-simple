import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

const getShoppingCart = () => {
    let shoppingCart = {};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

//add data to local storage
const addToDb = (id) => {
    let shoppingCart = getShoppingCart();
    const quantity = shoppingCart[id];
    //add to db
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

//remove data from local storage
const removeFromDb = (id) => {
    let shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

// delete full 
const deleteFromDb = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    getShoppingCart,
    addToDb,
    removeFromDb,
    deleteFromDb
}