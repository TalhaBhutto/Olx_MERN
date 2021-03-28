import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Link} from "react-router-dom";
import { Label } from "@material-ui/icons";

const Header=()=>{
    const nav=[{ID:1 ,Label:"Mobile Phones"},{ID:2 ,Label:"Cars"},{ID:3 ,Label:"Motorcycles"},{ID:4 ,Label:"Houses"},{ID:5 ,Label:"TV-Video-Audio"},{ID:6 ,Label:"Tablets"},{ID:7 ,Label:"Land & Plots"}]
    return(
        <React.Fragment>
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
                <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="query font s15" />
                <button className="go s24 cfff"><SearchIcon/></button>
            </div>
            <div className="actions flex aic">
                <Link href="/account/signin" className="colour fontb s16 noulh noul">Sign in</Link>
                <button className="sell flex aic">
                    <img src="sell.jpeg" style={{height:"50px",width:"90px",border:"none"}}/>
                </button>
            </div>
        </div>
        <div className="hnav fixed flex aic">
            <button className="view-cate flex aic color">
                <h2 className="s18 font">All Catagories</h2>
                <KeyboardArrowDownIcon className="arrow s24"/>
            </button>
            {
                nav.map(items=>{
                    return(
                        <Link to={"/browser/"+ items.ID} className="noul noulh color fontb s13">{items.Label}</Link>
                    )
                })
            }
        </div>
        </React.Fragment>
    );
}
export default Header;