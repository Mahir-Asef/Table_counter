import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg  bg-primary">
                <div className="container-fluid">
                    {/*<a className="navbar-brand text-light active" href="#">Navbar</a>*/}
                    <button className="btn btn-primary fs-4" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Side Bar
                    </button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link  text-light fs-4" aria-current="page" to="/">Counter</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light fs-4" to="/form">Form</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light fs-4" to="/list">List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
                 aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Side Bar Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body ">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link  text-info fs-4" aria-current="page" to="/">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info fs-4" to="/form">Form</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info fs-4" to="/list">List</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;