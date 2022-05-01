import React from 'react';
import common from '../common.module.scss';
import cart from './Cart.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../connection/cartSlice";
import orange from '../../media/products/orange.jpeg';
import apple from '../../media/products/apple.jpeg';
import grapes from '../../media/products/grapes.jpeg';
import nut from '../../media/products/nut.jpg';
import potato from '../../media/products/potato.jpg';
import watermelon from '../../media/products/watermelon.jpg';
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
        <div className={cart.background}>
            {cartList.map((value) => {
                    return <div className={cart.blockPositions}>
                        <div className={`${cart.cartDesign} ${cart.infoPosition}`}>
                            <img className={cart.resize} src={picDictionary[value.name]} alt=''/>
                            <div className={common.centerColumn}>
                                <div className={cart.txt}>{value.name}</div>
                                <div className={cart.txt}>{value.price}$</div>
                            </div>
                            <div className={common.center}>
                                <div className={cart.btn}
                                onClick={() => dispatch(increment(value))}>+</div>
                                <div className={cart.txt}>{value.amount}</div>
                                <div className={cart.btn}
                                     onClick={() => dispatch(decrement(value))}>-</div>
                            </div>
                        </div>
                    </div>
            })
            }
            <div className={cart.formDesign}>
                k
            </div>
        </div>
    );
};
export default Cart;