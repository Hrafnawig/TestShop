import React, {useEffect} from 'react';
import common from '../common.module.scss';
import shopCards from './shopCards.module.scss';
import { useSelector, useDispatch } from "react-redux";
import {getProducts} from "../../connection/shopSlice";
import {addProduct} from "../../connection/cartSlice";
import orange from '../../media/products/orange.jpeg';
import apple from '../../media/products/apple.jpeg';
import grapes from '../../media/products/grapes.jpeg';
import nut from '../../media/products/nut.jpg';
import potato from '../../media/products/potato.jpg';
import watermelon from '../../media/products/watermelon.jpg';
const ShopCards = () => {
    const dispatch = useDispatch();
    let productList = useSelector(state => state.shop.list)
    const cartList = useSelector(state => state.cart.products)
    useEffect( () => {
             dispatch(getProducts())
    }, [dispatch])
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
            {productList.map((value) => {
               return value.data.map((value) => {
                    return <div className={common.center}>
                        <div className={`${shopCards.cardDesign} ${shopCards.infoPosition}`}>
                            <img className={shopCards.resize} src={picDictionary[value.name]} alt=''/>
                            <div className={shopCards.txt}> {value.name}</div>
                            <div className={shopCards.txt}>{value.price}$</div>
                            <div className={cartList.some(cart => cart.id === value.id)? shopCards.disable:shopCards.btn}
                                 onClick={() =>{
                                     dispatch(addProduct({
                                         id: value.id,
                                         name: value.name,
                                         price: value.price,
                                         amount: 1
                                     }))
                                 }}>
                                {cartList.some(cart => cart.id === value.id)? 'Added to Cart':'BUY'}
                            </div>
                        </div>
                    </div>
                })
            })}
        </div>
    );
};
export default ShopCards;