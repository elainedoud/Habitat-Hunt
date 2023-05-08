import React from 'react';

function NotSelected({notselectedlist}){
    return (
        <div class="col-md-6 p-3">
            <div class="card border-secondary">
                <div class="card-block">
                    <div class="card-body bg-light">
                        <h6 class="card-title text-start text-dark">Name: {notselectedlist.apartment_name}</h6>
                        <h6 class="card-text text-start text-dark">Address: {notselectedlist.address}</h6>
                        <h6 class="card-text text-start text-dark">Price: ${notselectedlist.price}</h6>
                        <h6 class="card-text text-start text-dark">Contact: {notselectedlist.contact_info}</h6>
                        <h6 class="card-text text-start text-dark">Website: {notselectedlist.website}</h6>
                        <h6 class="card-text text-start text-dark">Comment: {notselectedlist.comment}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NotSelected