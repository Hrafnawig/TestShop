import React,{useEffect} from 'react';
import common from './common.module.scss';
import shopCards from './shopCards.module.scss';
import { useSelector, useDispatch } from "react-redux";
import {getProducts} from "../../connection/shopSlice";
const ShopCards = () => {
    const dispatch = useDispatch();
    let productList = useSelector(state => state.shop.list)
    const postStatus = useSelector(state => state.shop.status)
    useEffect( () => {
        if (postStatus === 'idle') {
             dispatch(getProducts())
        }
    }, [postStatus, dispatch])
    return (
        <div className={shopCards.background}>
            {productList.map((value) => {
               return value.data.map((value) => {
                    return <div className={common.center}>
                        <div className={shopCards.cardDesign}>{value.price}</div>
                    </div>
                })
            })}
        </div>

    );
};
export default ShopCards;