import React , {useState} from "react";

const AddItem=(props)=>{
    if(props.placeholder){
        return(
            <div className="AddItem">
                <div className="poster anim placeholder">

                </div>
                <div className="title anim placeholder">
                    
                </div>
                <div className="tagline anim placeholder">
                    
                </div>
                <div className="footer anim flex">
                    
                </div>
                <div className="anim flex">
                <div className="location anim placeholder">
                    
                </div>
                <div className="stamp anim placeholder">
                    
                </div>
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