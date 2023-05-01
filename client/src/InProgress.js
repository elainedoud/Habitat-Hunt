import React from 'react';

function InProgress({inprogresslist}){

    return (
            <div class="col-md-6 p-3">
                <div class="card border-secondary">
                    <div class="card-block">  
                    <div class="card-body bg-light">
                        <h6 class="card-title text-start text-dark">Name: {inprogresslist.apartment_name}</h6>
                        <h6 class="card-text text-start text-dark">Address: {inprogresslist.address}</h6>
                        <h6 class="card-text text-start text-dark">Price: ${inprogresslist.price}</h6>
                        <h6 class="card-text text-start text-dark">Contact: {inprogresslist.contact_info}</h6>
                        <h6 class="card-text text-start text-dark">Website: {inprogresslist.website}</h6>
                        <h6 class="card-text text-start text-dark">Comment: {inprogresslist.comment}</h6>
                    </div>
                    </div>
                </div>
            </div>

    )
}

export default InProgress
