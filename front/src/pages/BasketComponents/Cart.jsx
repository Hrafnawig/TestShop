import React from 'react';
import common from '../common.module.scss';
import cart from './Cart.module.scss';
import { useSelector, useDispatch } from "react-redux";
import orange from '../../media/products/orange.jpeg';
import apple from '../../media/products/apple.jpeg';
import grapes from '../../media/products/grapes.jpeg';
import nut from '../../media/products/nut.jpg';
import potato from '../../media/products/potato.jpg';
import watermelon from '../../media/products/watermelon.jpg';
import shopCards from "../HomeComponents/shopCards.module.scss";
const Cart = () => {
    let cartList = useSelector(state => state.cart.products)
    const dispatch = useDispatch();
    const picDictionary = {
        orange,
        apple,
        nut,
        watermelon,
        grapes,
        potato
    }
    return (
        <div className={shopCards.background}>
            {cartList.map((value) => {
                return value.map((value) => {
                    return <div className={common.center}>
                        <div className={`${cart.cardDesign}`}></div>
                    </div>
                })
            })
            }
        </div>
    );
};
export default Cart;