import { List } from "@material-ui/core";
import React , {useEffect,useState} from "react";
import AddItem from "./AddItem";

const HomePage=()=>{
    const [list,setList]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        if(loading){
            let _List=[];
            for(let i=0;i<12;i++){
                _List.push(<AddItem placeholder="true"/>);
            }
            setList(_List);
        }
    },list)
    
    return(
        <><div className="home-page">
            <div className="AddList flex">
                {list}
        </div>
            <button className="Load-More fontb c333 anim">Load More</button>
        </div>
        <div className="app-ribbon">
        <h2 className="title fontb s30 color">TRY THE OLX APP</h2>
        <h2 className="title fontb s18 color">Buy, sell and find just about anything using the app on your mobile.</h2>
        </div>
        </>
    );
}
export default HomePage;