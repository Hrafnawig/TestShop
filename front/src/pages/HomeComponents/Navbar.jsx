import React from 'react';
import common from '../common.module.scss';
import navbar from './navbar.module.scss';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
const CartNavbar = () => {
    return (
        <div className={common.center}>
            <div className={navbar.nav}>
                <div className={navbar.cartLocation}>
                    <div className={navbar.navTxt}>Some Shop</div>
                    <Link to= "/cart">
                        <ShoppingBasketIcon style={{ fontSize: 45 }} className={navbar.cartIcon}/>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default CartNavbar;