import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';

const Header=()=>{
    return(
        <div className="header fixed">
            <div className="logo">
            <img src={"logo.svg"}></img>
            </div>
            <div className="location rel">
                <SearchIcon/>
                <input className="label" placeholder="Your Location" value="Pakistan" />
                <button className="icon-search"><KeyboardArrowDownIcon/></button> 
            </div>
            <div className="search flex aic">
                <input type="text" placeholder="Find Cars, Mobile Phonrs and more..." className="query" />
                <button className="icon-search"><SearchIcon/></button>
            </div>
            <div className="actions flex aic">
                <button>
                    <AddIcon/>
                </button>
            </div>
        </div>
    );
}
export default Header;