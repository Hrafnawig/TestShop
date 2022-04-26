import React,{useEffect} from 'react';
import common from './common.module.scss';
import shopCards from './shopCards.module.scss';
import { useSelector, useDispatch } from "react-redux";
import orange from '../../media/products/orange.jpeg';
import apple from '../../media/products/apple.jpeg';
import grapes from '../../media/products/grapes.jpeg';
import nut from '../../media/products/nut.jpg';
import potato from '../../media/products/potato.jpg';
import watermelon from '../../media/products/watermelon.jpg';
const ShopCards = () => {
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
        <div>
            k
        </div>

    );
};
export default ShopCards;