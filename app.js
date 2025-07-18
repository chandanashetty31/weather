
const apiUrl="https://api.openweathermap.org/data/2.5/weather?appid=6e08a19079676ca2cf9fd4a5c4be223d&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl+city);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{

        var data=await response.json();

        console.log(data);
        
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="./images/clouds.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="./images/rain.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="./images/mist.jpg";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="./images/sun.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="./images/drizzle.png";
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
 }


searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})