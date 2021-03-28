import React , {useState} from "react";

const AddItem=(props)=>{
    if("placeholder" in props){
        return(
            <div className="AddItem">
                <div className="poster placeholder">

                </div>
                <div className="title placeholder">
                    
                </div>
                <div className="tagline placeholder">
                    
                </div>
                <div className="footer flex">
                    
                </div>
                <div className="location placeholder">
                    
                </div>
                <div className="stamp placeholder">
                    
                </div>
            </div>
        );
    }
    return(
        <div className="AddItem">

        </div>
    );
}
export default AddItem;