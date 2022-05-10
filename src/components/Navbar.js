import React from "react";

const Navbar = ({title}) => {
    return (
        <nav className="navbar navbar-dark bg-dark text-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#!">{ title }</a>
                <div className="d-flex align-items-center">
                    <span className="px-3 me-2">
                        City name:
                    </span>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Input the city name"
                            aria-label="Search"
                        />

                        <button
                            className="btn btn-outline-light"
                            type="submit"
                        >Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;