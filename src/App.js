import React, { Component } from 'react';
import './App.css';
import From from './app_component/from';

import Weather from './app_component/weather';
// const Api_key ="07e0adf19115687929675ecdf580ff44";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false
    };
   
  }
  calTemp(temp){
    let cell= Math.floor(temp-273.15);
    return cell;

  }
  getWeather=async(e)=>{
    e.preventdefault();
    // const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=58ff3fe46e3960c24086fa81329264df`);
    const response = await api_call.json();
    console.log(response);
    this.setState({
      city:response.sys.name,
      country:response.sys.country,
      celsius:this.calTemp(response.main.temp),
      temp_max:this.calTemp(response.main.temp_max),
      temp_min:this.calTemp(response.main.temp_min),
      description:response.weather[0].description,
    })
  }

  state={}
  render(){
    return(
      <div className="App">
        <From   loadW={this.getWeather}/>
    <Weather city={this.state.city} country={this.state.country} temp_celsius={this.state.celsius}
    temp_max={this.state.temp_max}
    temp_min={this.state.temp_min}
    description={this.state.description}/>
    </div>
    );
  }
}


export default App;
