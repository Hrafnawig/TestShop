import React,{useEffect} from 'react';
import common from './common.module.scss';
import shopCards from './shopCards.module.scss';
import { useSelector, useDispatch } from "react-redux";
import {getProducts} from "../../connection/shopSlice";
import orange from '../../media/products/orange.jpeg';
import apple from '../../media/products/apple.jpeg';
import grapes from '../../media/products/grapes.jpeg';
import nut from '../../media/products/nut.png';
import potato from '../../media/products/potato.jpg';
import watermelon from '../../media/products/watermelon.jpg';
const ShopCards = () => {
    const dispatch = useDispatch();
    let productList = useSelector(state => state.shop.list)
    const postStatus = useSelector(state => state.shop.status)
    useEffect( () => {
        if (postStatus === 'idle') {
             dispatch(getProducts())
        }
    }, [postStatus, dispatch])
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
                        <div className={`${shopCards.cardDesign} ${common.centerColumn}`}>
                            {value.price}
                        </div>
                    </div>
                })
            })}
        </div>

    );
};
export default ShopCards;