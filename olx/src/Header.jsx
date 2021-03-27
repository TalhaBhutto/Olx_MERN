import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";

const Header=()=>{
    return(
        <div className="header fixed flex aic">
            <div className="logo">
            <img src={"logo.svg"}></img>
            </div>
            <div className="location rel flex aic">
                <SearchIcon className="icon-search ico s24" />
                <input className="label s15 font" placeholder="Your Location" value="Pakistan" />
                <button className="arrow"><KeyboardArrowDownIcon/></button> 
            </div>
            <div className="search flex aic">
                <input type="text" placeholder="Find Cars, Mobile Phonrs and more..." className="query font s15" />
                <button className="icon-search go"><SearchIcon/></button>
            </div>
            <div className="actions flex aic">
                <Link href="/account/signin" className="fontb s15">Sign in</Link>
                <button className="sell">
                    <AddIcon/>
                    <h2 className="s15 font">Sell</h2>
                </button>
            </div>
        </div>
    );
}
export default Header;