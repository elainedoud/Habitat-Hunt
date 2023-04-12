import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return (
        <div class="container">
            <nav class="navbar navbar-expand">
                <div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/listingform" class="nav-link">New Listing Form</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/inprogress" class="nav-link">In Progress</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/notselected" class="nav-link">Not Selected</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/accepted" class="nav-link">Accepted</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar