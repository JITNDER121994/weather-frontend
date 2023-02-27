import React from "react";
 const From =(props)=>{
    return(
        <div>
            <div>
          <h1>Weather</h1>
           
            <from onSubmit={props.Weather}></from>
            <input type="text"className="country" placeholder="Enter ciy name"/>
            <button>Submit</button>
            </div>
        </div>



    );
 };
 export default From;