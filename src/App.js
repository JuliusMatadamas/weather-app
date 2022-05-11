import React, { Fragment, useState } from "react";
import Navbar from './components/Navbar';
import swal from "sweetalert";
import './App.css';

function App() {

    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=4ec872599ec0cbd4560d3cf1d4ad8768

    const [search, getSearchValue] = useState({
        cityname : ''
    });

    const consultWeather = async () => {
        const id = '4ec872599ec0cbd4560d3cf1d4ad8768';
        const c = search.cityname.trim().replace(" ","+");
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${id}`

        const response = await fetch(url);
        const result = await response.json();

        if (result.cod == 404)
        {
            swal("City not found!", "Click the button to continue.", "error");
        }
        else
        {
            console.log(result)
        }
    }

  return (
      <Fragment>
        <Navbar
            title='Weather App'
            search = {search}
            getSearchValue = {getSearchValue}
            consultWeather = {consultWeather}
        />
      </Fragment>
  );
}

export default App;
