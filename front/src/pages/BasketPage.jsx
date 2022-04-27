import React from 'react';
import CartNavbar from './BasketComponents/CartNavbar'
import Cart from "./BasketComponents/Cart";

const BasketPage = () => {
    return (
        <div>
            <CartNavbar/>
            <Cart/>
        </div>
    );
};

export default BasketPage;