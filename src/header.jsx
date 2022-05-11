import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Header = () =>
{
    return(
        <>
                    <nav class="navbar navbar-expand-lg navbar-light bg-color px-4 p-3">
                    <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                            <img className="header-logo" src="img/7.PNG" alt="" width="150" />
                    </Link>
                      
                        <div class="float-end d-none d-md-block" id="">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item px-3">
                            <a class="nav-link text-white active" aria-current="page" href="#">About Us</a>
                            </li>
                            <li class="nav-item px-3">
                            <a class="nav-link text-white" href="#">Products</a>
                            </li>
                            <li class="nav-item px-3">
                            <a class="nav-link text-white" href="#">Legacy</a>
                            </li>
                            <li class="nav-item px-3">
                            <a class="nav-link text-white" href="#">Career</a>
                            </li>
                            <li class="nav-item px-3">
                            <Link class="nav-link text-white" to="./contact">Contact Us</Link>
                            </li>
                            <li class="nav-item px-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <a class="nav-link text-white" href="#"><i class="fa-solid fa-envelope"></i></a>
                            </li>
                            {/* <li class="nav-item dropdown">
                            <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li> */}
                        </ul>
                        </div>
                    </div>
                    </nav>
        </>
    )
}
export default Header;