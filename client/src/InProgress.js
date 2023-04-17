import React from 'react';

function InProgress({inprogresslist}){

    return (<div class="card">   
            <div class="card-body bg-light">
                <h6 class="card-title text-start">Name: {inprogresslist.apartment_name}</h6>
                <h6 class="card-text text-start">Address: {inprogresslist.address}</h6>
                <h6 class="card-text text-start">Price: ${inprogresslist.price}</h6>
                <h6 class="card-text text-start">Contact: {inprogresslist.contact_info}</h6>
                <h6 class="card-text text-start">Website: {inprogresslist.website}</h6>
                <h6 class="card-text text-start">Comment: {inprogresslist.comment}</h6>
            </div>
            </div>

    )
}

export default InProgress
