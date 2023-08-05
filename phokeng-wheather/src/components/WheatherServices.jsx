import React, { useEffect, useState } from 'react';

const APIKey = '08c9bc536f3e3f33ac4a40679f9cadec';


async function fetchWeatherData(lat, lon) {
  const url = `https://api.opensensemap.org/boxes?model=homeWifi`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
function showPosition() {
    navigator.geolocation.getCurrentPosition(showMap, error);
  }
  
  function showMap() {
    // Get location data
    var mylat = -25.654448;
    var mylon = + 27.255854;
  
    // Set Google map source url
    var mapLink = `https://maps.googleapis.com/maps/api/staticmap?center="${mylat+mylon}"&size=200x200`;
  
    // Create and insert Google map
    document.getElementById("embedMap").innerHTML = "<img alt='Map Holder' src='" + mapLink + "'>";
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  


function WeatherApp() {
const [weatherData, setWeatherData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    showPosition()
// Function to get the user's geolocation
function getUserGeolocation() {
    if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
        (position) => resolve(position.coords),
        (error) => reject(error)
        );
    });
    } else {
    return Promise.reject(new Error('Geolocation is not supported by this browser.'));
    }
}
// Call the function to get the user's geolocation and then fetch weather data
getUserGeolocation()
    .then((coords) => {
    const lat = coords.latitude;
    const lon = coords.longitude;
    // Now, call the fetchWeatherData function with the obtained latitude and longitude
    fetchWeatherData(lat, lon)
    .then((data) => {
      if (data) {
        setWeatherData(data);
        setLoading(false); // Data retrieval successful, stop loading
      } else {
        console.log('Failed to fetch weather data.');
        setLoading(false); // Data retrieval failed, stop loading
      }
    })
        .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error(error);
        setLoading(false);
        });
    })
    .catch((error) => {
    // Handle geolocation error (e.g., user denied location access)
    console.error(error);
    setLoading(false);
    });
}, []);

return (
<div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {weatherData ? (
            <div>
<pre>{JSON.stringify(weatherData, null, 2)}</pre>

            </div>
            
          ) : (
            <div><div id="embedMap"></div> <p>Failed to fetch weather data.</p></div>
           
          )}
        </div>
      )}
    </div>
);
}

export default WeatherApp;
