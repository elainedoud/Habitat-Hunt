import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return (
        <div>
            <nav>
                <div>
                    <ul>
                        <li>
                            <Link to="/listingform">New Listing Form</Link>
                        </li>
                        <li>
                            <Link to="/inprogress">In Progress</Link>
                        </li>
                        <li>
                            <Link to="/notselected">Not Selected</Link>
                        </li>
                        <li>
                            <Link to="/accepted">Accepted</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar