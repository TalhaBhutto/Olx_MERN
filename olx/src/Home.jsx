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
        <div>
            <div className="home-page">
            <h3>Fresh Recomendations</h3>
            <div className="AddList flex">
                {list}
        </div>
            <button className="Load-More fontb c333 anim s16">Load More</button>
            
        </div>
        <div className="app-ribbon flex aic">
        <img src="https://statics.olx.com.pk/external/base/img/phone-app.png" alt="" className="img"/>
        <div className="meta">
        <h2 className="title fontb s30 color">TRY THE OLX APP</h2>
        <h2 className="title fontb s18 color">Buy, sell and find just about anything using the app on your mobile.</h2>
        </div>
        <div className="links">
            <h2 className="title fontb s14 color">Get Your App Today.</h2>
            <div className="flex as">
            <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" alt="ios-app-store" className="noul b" style={{width:"120px",height:"40px",padding:"5px"}} />
            <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" alt="android-app-store" className="noul b"style={{width:"120px",height:"40px",padding:"5px"}}></img>
            </div>
        </div>
        </div>
        </div>
    );
}
export default HomePage;