import React,{useEffect} from 'react';
import common from './common.module.scss';
import shopCards from './shopCards.module.scss';
import { useSelector, useDispatch } from "react-redux";
import {getProducts} from "../../connection/shopSlice";
const ShopCards = () => {
    const dispatch = useDispatch();
    const postStatus = useSelector(state => state.shop.status)
    useEffect( () => {
        if (postStatus === 'idle') {
             dispatch(getProducts())
        }
    }, [postStatus, dispatch])
    console.log(useSelector(state=>state))
    return (
        <div className={`${common.center} ${shopCards.background}`}>
            <div className={shopCards.cardDesign}>
                k
            </div>
        </div>

    );
};
export default ShopCards;