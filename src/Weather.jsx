import {  useState } from "react";

function Weather() {
    const [search,setSearch]=useState('');
    const [weather,setWeather]=useState(null)
    const API_KEY= `4f8a5f500c5577e6920cff99c3f571f5`;
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`

    const wetho =async()=>{
        const response =await fetch(url);
        const data= await response.json();
        setWeather(data)
    }
  
  return (
    <>
    <h1>Weather App</h1>
    <h4>Ente and search weather according to your choice.</h4>

<div className="flex justify-center items-center mt-[20px]">
<input
            type="text"
            placeholder="Enter city"
            className="px-[20px] py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="px-4 py-1 rounded-md bg-blue-500 text-white"
            onClick={wetho}
          >
            Search
          </button>
</div>
<div className="flex justify-center items-center">
{weather && (
            <>
            <div className="bg-slate-200 p-4 w-96 flex justify-center items-center flex-col rounded-xl mt-[30px]">
            <h2 className="text-3xl font-bold">{weather.name}</h2>
            <div className="flex justify-center items-center gap-1">
                <h2 className="font-bold">Temprature in Celcius:</h2>
                <span className="border-[1px] border-black p-1 rounded-lg">{weather.main.temp}°C</span>
            </div>
            <div className="flex justify-center items-center gap-1 mt-4">
                <h2 className="font-bold">Temprature in Fahrenheit:</h2>
                <span className="border-[1px] border-black p-1 rounded-lg">{((weather.main.temp * 9/5) + 32).toFixed(2)}°F</span>
            </div>
            </div>
            </>

        )}
</div>
</>
  )
}

export default Weather