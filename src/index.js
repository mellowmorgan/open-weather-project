import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$("#b").click(function(){
  
  let city=$("#city-input").val();

  let request = new XMLHttpRequest();
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f7948f210798d69c370707542b10744`;
  request.onreadystatechange = function(){
    if(this.readyState===4 && this.status ===200){
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  };
  request.open("GET", url, true);
  request.send();
  function getElements(response){
    $('.showTemp').text(`The temperature in ${response.main.temp} degree.`);

  }

});
