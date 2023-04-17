import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return (
        <div class="container d-flex align-items-center justify-content-center">
            <nav class="navbar navbar-expand">
                <div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/listingform" class="nav-link text-primary">New Listing Form</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/inprogress" class="nav-link text-primary">In Progress</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/notselected" class="nav-link text-primary">Not Selected</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/accepted" class="nav-link text-primary">Accepted</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar