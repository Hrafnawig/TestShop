import React, {useEffect, useState} from 'react';
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
    const [clicked, setClick] = useState([]);
    const dispatch = useDispatch();
    let productList = useSelector(state => state.shop.list)
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
                            <div className={clicked.includes(value.id)? shopCards.disable:shopCards.btn}
                                 onClick={() =>{setClick(clicked.concat(value.id));
                                     dispatch(addProduct({
                                         id: value.id,
                                         name: value.name,
                                         value: value.price,
                                         amount: 1
                                     }))
                                 }}>
                                {clicked.includes(value.id)? 'Added to Cart':'BUY'}
                            </div>
                        </div>
                    </div>
                })
            })}
        </div>
    );
};
export default ShopCards;