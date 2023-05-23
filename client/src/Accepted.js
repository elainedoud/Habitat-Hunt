import React from 'react';

function Accepted({acceptedlist}){
    return (
        <div class="col-md-6 p-3">
        <div class="card border-secondary border-3">
            <div class="card-block shadow-lg">
                <div class="card-body bg-light">
                    <h6 class="card-title text-start text-dark"><span class="Light-text">Name: </span>{acceptedlist.apartment_name}</h6>
                    <h6 class="card-text text-start text-dark"><span class="Light-text">Address: </span>{acceptedlist.address}</h6>
                    <h6 class="card-text text-start text-dark"><span class="Light-text">Price: </span>${acceptedlist.price}</h6>
                    <h6 class="card-text text-start text-dark"><span class="Light-text">Contact: </span>{acceptedlist.contact_info}</h6>
                    <h6 class="card-text text-start text-dark"><span class="Light-text">Website: </span>{acceptedlist.website}</h6>
                    <h6 class="card-text text-start text-dark"><span class="Light-text">Comment: </span>{acceptedlist.comment}</h6>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Accepted 