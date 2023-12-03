
function displayMap(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(fetchData)
    }
    else{
        alert("Somthing problem in your browser");
    }
}
displayMap();

function fetchData(data){
    const latitude = data.coords.latitude;
    const longitude = data.coords.longitude;
    console.log(latitude , longitude)

const divElement = document.getElementById("latLong");
divElement.innerHTML=`<span id="lat">Latitude:${latitude}</span>
                      <span id="long">Longitude:${longitude}</span>`

                      fetchLocation(latitude, longitude);
const mapLocation = document.getElementById("Gmap")

mapLocation.innerHTML = `<iframe id="map" src="https://maps.google.com/maps?q=${latitude}, ${longitude}&output=embed"></iframe>`;
console.log(mapLocation)
}


    const apiKey = "48dff6e4d6cb13b4a30482b24d45c365";
    const baseUrl = "https://api.openweathermap.org/data/2.5";

  
    
    async function fetchLocation(latitude,longitude){
        const endPoint = `${baseUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        try{
            const response = await fetch(endPoint);
            const result = await response.json();

            console.log(result);
            
             renderInBottomUI(result);
        }
        catch(error){
            console.log("Something went wrong");
        }
    }
    const locationDetails = document.getElementById("locationDetails");
    console.log(locationDetails)

    function renderInBottomUI(data){
        const ele2 = document.createElement("div");
        ele2.className = "details";

        ele2.innerHTML = `
        <div class="speed">Location:${data.name}</div>
        <div class="speed">Wind speed:${data.wind.speed}Kmph</div>
        <div class="speed">Humidity :${data.main.humidity}</div>
        <div class="speed">Time Zone :${data.timezone}</div>
        <div class="speed">Pressure:${data.main.pressure}atm</div>
        <div class="speed">Feels Like :${data.main.feels_like}</div> `;

        locationDetails.appendChild(ele2);
    }

