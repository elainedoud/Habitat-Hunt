import React from 'react';

function NotSelected({notselectedlist}){
    return (
        <div class="col-md-6 p-3">
            <div class="card border-secondary border-3">
                <div class="card-block shadow-lg">
                    <div class="card-body bg-light">
                        <h6 class="card-title text-start text-dark"><span class="Light-text">Name: </span>{notselectedlist.apartment_name}</h6>
                        <h6 class="card-text text-start text-dark"><span class="Light-text">Address: </span>{notselectedlist.address}</h6>
                        <h6 class="card-text text-start text-dark"><span class="Light-text">Price:</span> ${notselectedlist.price}</h6>
                        <h6 class="card-text text-start text-dark"><span class="Light-text">Contact: </span>{notselectedlist.contact_info}</h6>
                        <h6 class="card-text text-start text-dark"><span class="Light-text">Website: </span>{notselectedlist.website}</h6>
                        <h6 class="card-text text-start text-dark"><span class="Light-text">Comment: </span>{notselectedlist.comment}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NotSelected