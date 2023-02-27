import React from "react";

const Weather=(props)=>{
    return(
        <div className="container">
            {/* <h1>Weather app</h1> */}
            {/* <input type={"search"} placeholder="Enter city name" ></input> */}
            <h2>{props.city},{props.country}</h2>
            <p>{props.temp_celsius}&deg;</p>
            {(props.temp_min,props.temp_max)}
            <p>{props.description}</p>
            <p></p>
            <p></p>

        </div>
    );
}
export default Weather;