import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function convertToFah(temp){
  return (parseInt(temp)-273.15)*(9/5)+32;
}

$("#b").click(function(){
  
  let city=$("#city-input").val();

  let request = new XMLHttpRequest();
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.MY_API_KEY}`;
  request.onreadystatechange = function(){
    if(this.readyState===4 && this.status ===200){
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  };
  request.open("GET", url, true);
  request.send();
  function getElements(response){
    $('.showTemp').text(`The temperature in ${city} is ${response.main.temp} Kelvin degrees.`);
    const fahTemp = (response.main.temp-273.15)*(9/5)+32;
    $('.showTempFahrenheit').text(`The temperature in ${city} is ${fahTemp} Fahrenheit degrees.`);
    $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%.`);
    $('.showTempMinFahrenheit').text(`The temperature high in ${city} is ${convertToFah(response.main.temp_max)} Fahrenheit degrees.`);
    $('.showTempMaxFahrenheit').text(`The temperature low in ${city} is ${convertToFah(response.main.temp_min)} Fahrenheit degrees.`);

    $('.showWindSpeed').text(`The wind speed in ${city} is ${response.wind.speed} mph.`);
    $('.showClouds').text(`The cloudiness in ${city} is ${response.clouds.all}%.`);
  }

});