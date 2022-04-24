import React from 'react';
import common from './common.module.scss';
import shopCards from './shopCards.module.scss';
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
const ShopCards = () => {
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