// going to contact page when pressing on contact
let contactPage = document.getElementById("contactPage").addEventListener("click",function(){
  window.open("/contact.html" , "_self");
})
// going to main page when pressing on the logo
let logo =document.querySelector(".logo").addEventListener("click" , function(){
  window.open("/index.html" , "_self");
})
// get the written text from the input field and assign it to a variable
let text = document.getElementById("cityInput");
// set variable for day 1
let locationn =document.querySelector(".forcast-content .location");
let datee = document.querySelector(".forecast-today .date");
let degreeElement = document.querySelector('.degree .num');
let custom = document.querySelector(".custom");
let secSpan = document.querySelector(".sec-span");
let imgge = document.querySelector(".forcast-content .first-img img");
let day1 = document.querySelector(".day1");
let date1 = document.querySelector(".date1");
// set variable for day 2
let day2 =document.querySelector(".day2");
let image2 = document.querySelector(".forcast-content .sec-img img")
let degreeElement2 = document.querySelector('.degree .max-num2');
let degreeElement22 = document.querySelector(".degree .min-num2");
let custom2 = document.querySelector(".custom2");
// set variable for day 3
let day3 =document.querySelector(".day3");
let image3 = document.querySelector(".forcast-content .imag2 img")
let degreeElement3 = document.querySelector('.degree .max-num3');
let degreeElement33 = document.querySelector(".degree .min-num3");
let custom3 = document.querySelector(".custom3");
// get the written text from the input field while writing
 text.addEventListener("input" , function(){
   let res = text.value;  
   getWeather(res);
})
// api function
async function getWeather(theRes){
   let apiResponse = await fetch (`https://api.weatherapi.com/v1/search.json?key=f7299b21b90c452ab59153431233112&q=${theRes}`);
   let final = await apiResponse.json();
   for (let i = 0 ; i < final.length ; i++){
      if(final[i].name.toLowerCase() === theRes.toLowerCase()) {
        let currentApiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f7299b21b90c452ab59153431233112&q=${final[i].name}&days=3`);
        let currentData = await currentApiResponse.json();
        
        // the icon 1
        let currentImg = currentData.current.condition.icon;
        imgge.src=currentImg;


        // date 1
        let currentDate = currentData.location.localtime;
        function getDayName(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { weekday: 'long' });
        }
        const dateString =currentDate ;
        const dayName = getDayName(dateString);
        day1.innerHTML = dayName;

        // month 1
        let currentDay = currentData.location.localtime;
        function getDayNumber(day) {
            const date = new Date(dateNumber);
            return date.toLocaleDateString('en-US', { 
                month: 'long' ,
                day: 'numeric'
               });
        }
        const dateNumber =currentDay ;
        const dayNum = getDayNumber(dateNumber);
        date1.innerHTML = dayNum;


        // the country 1
        locationn.innerHTML = currentData.location.country;


        // the temprature 1
        let currentTemp = currentData.current.temp_c;
        degreeElement.innerHTML = currentTemp +`<sub class="sub">o</sub> C` ;
        

        // the state of the weahther 1
        let currentSate = currentData.current.condition.text;
        custom.innerHTML = currentSate;

        // the speed of the wind 1
        let currentWind = currentData.current.wind_kph;
        secSpan.innerHTML = `<span class="fir-span">
        <img src="wind.png" alt="">
        ${currentWind} km/h
      </span>`;

    // ***************************************

        // the day2
        let secDate = currentData.forecast.forecastday[1].date;
        function getDay2Name(date2String) {
            const date2 = new Date(date2String);
            return date2.toLocaleDateString('en-US', { weekday: 'long' });
        }
        const date2String =secDate ;
        const day2Name = getDay2Name(date2String);
        day2.innerHTML = day2Name;
        // console.log(day2Name);

        // the icon 2
         let currentImg2 = currentData.forecast.forecastday[1].day.condition.icon;
         image2.src=currentImg2;

          // the max temprature 2
        let maxTemp2 = currentData.forecast.forecastday[1].day.maxtemp_c;
        degreeElement2.innerHTML = maxTemp2 +`<sub class="sub">o</sub> C` ;



        // the min temprature 2
         let minTemp2 = currentData.forecast.forecastday[1].day.mintemp_c;
          degreeElement22.innerHTML = minTemp2 +`<sub class="sub">o</sub> C` ;
     
         // the state of the weahther 1
        let sectSate = currentData.forecast.forecastday[1].day.condition.text;
        custom2.innerHTML = sectSate;

        // *************************

         // the day3
         let secDate3 = currentData.forecast.forecastday[2].date;
         function getDay2Name(date3String) {
             const date3 = new Date(date3String);
             return date3.toLocaleDateString('en-US', { weekday: 'long' });
         }
         const date3String =secDate3 ;
         const day3Name = getDay2Name(date3String);
         day3.innerHTML = day3Name;




           // the icon 3
           let currentImg3 = currentData.forecast.forecastday[2].day.condition.icon;
           image3.src=currentImg3;
  
            // the max temprature 3
          let maxTemp3 = currentData.forecast.forecastday[2].day.maxtemp_c;
          degreeElement3.innerHTML = maxTemp3 +`<sub class="sub">o</sub> C` ;
  
  
  
          // the min temprature 3
           let minTemp3 = currentData.forecast.forecastday[2].day.mintemp_c;
            degreeElement33.innerHTML = minTemp3 +`<sub class="sub">o</sub> C` ;
       
           // the state of the weahther 3
          let sectSate3 = currentData.forecast.forecastday[2].day.condition.text;
          custom3.innerHTML = sectSate3;
      }
   }
   
}


getWeather("cairo")