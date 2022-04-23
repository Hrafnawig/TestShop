import React from 'react';
import common from './common.module.scss';
import main from './shopCards.module.scss';
import {Link} from "react-router-dom";
import useWindowSize from "../../utils/useWindowSize";
const ShopCards = () => {
    const { width } = useWindowSize();
    return (
        <div id="ourHotel" className={common.center}>
            {width > 360 && (
                <>
            <div className={`${common.centerColumn} ${main.MainPic}`}>
                <div className={main.welcomingPhrase}>WELCOME TO BON HOTEL</div>
                <div className={main.mainText}>Good people. Good thinking. Good feeling.</div>
                <Link to="/explore"><div className={`${common.center} ${main.exploreBut}`}>EXPLORE</div></Link>
            </div>
                </>)}
            {width < 360 && (
                <>
                    <div className={`${common.centerColumn} ${main.MainPic}`} >
                        <div className={main.welcomingPhrase}>WELCOME TO BON HOTEL</div>
                        <div className={main.mainText}>Good people. Good thinking</div>
                        <div className={main.mainText}>Good feeling.</div>
                        <Link to="/explore"><div className={`${common.center} ${main.exploreBut}`}>EXPLORE</div></Link>
                    </div>
                </>)}
        </div>

    );
};
export default ShopCards;