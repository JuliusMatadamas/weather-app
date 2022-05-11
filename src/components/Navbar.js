import React from "react";
import FormSearch from "./FormSearch";

const Navbar = ({title, search, getSearchValue, consultWeather}) => {
    return (
        <nav className="navbar navbar-dark bg-dark text-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#!">{ title }</a>
                <div className="d-flex align-items-center">
                    <span className="px-3 me-2">
                        City name:
                    </span>
                    <FormSearch
                        search = {search}
                        getSearchValue = {getSearchValue}
                        consultWeather = {consultWeather}
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;