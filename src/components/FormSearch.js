import React, { useState } from "react";
import swal from 'sweetalert';

const FormSearch = ({search, getSearchValue, consultWeather}) => {

    // state del formulario
    const { cityname } = search;

    const handleChange = e => {
        getSearchValue({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (cityname.trim().length == 0)
        {
            swal("Input the city name!", "Click the button to continue.", "error");
        }
        else
        {
            consultWeather();
        }
    }

    return (
        <form className="d-flex" onSubmit={handleSubmit}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Input the city name"
                aria-label="Search"
                name="cityname"
                id="cityname"
                value={cityname}
                onChange={handleChange}
            />

            <button
                className="btn btn-outline-light"
                type="submit"
            >Search</button>
        </form>
    );
}

export default FormSearch;