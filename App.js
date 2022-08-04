import {  Alert } from 'react-native';
import * as Location from 'expo-location'
import Loading from './Loading';
import Weather from './Weather';
import React from 'react';
import axios from 'axios';


const API_KEY = 'be8d63b1160104719b8f3ca321bf3e4d'


export default class extends React.Component {


  state = {
    isLoading : true
  }
  

  getWeather = async (latitude,longitude) => {


    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({
      isLoading : false ,
      temp: data.main.temp ,
      pressure: data.main.pressure , 
      condition: data.weather[0].main,
      temp_max: data.main.temp_max ,
      temp_min: data.main.temp_min ,
    }) ;


  }

  getLocation = async () =>{
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude,longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
      this.setState({isLoading : false}) ;
    } catch (error) {
      Alert.alert('Не могу определить местоположение!',':(');
    }
  
  }


  componentDidMount(){
      this.getLocation();
  }
  
  
  render(){
    const {isLoading, temp, pressure, condition, temp_max, temp_min} = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp_min={temp_min} temp_max={temp_max} temp={Math.round(temp)} pressure={Math.round(pressure)} condition={condition}/>
      
    );
  }
 

}


