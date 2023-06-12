import React from 'react';

interface InProgressProps{
  inprogresslist: {
    apartment_name: string;
    address: string;
    price: string;
    contact_info: string;
    website: string;
    comment: string;
  }
}


function InProgress ({inprogresslist}: InProgressProps){

    return (
            <div class="col-md-6 p-3">
                <div class="card border-secondary border-3">
                    <div class="card-block shadow-lg">  
                    <div class="card-body bg-light">
                        <h6 class="card-title text-start text-dark"><span class="Light-text">Name: </span>{inprogresslist.apartment_name}</h6>
                        <h6 class="card-text text-start text-dark"><span class="Light-text">Address: </span>{inprogresslist.address}</h6>
                        <h6 class="card-text text-start text-dark"><span class="Light-text">Price:</span> ${inprogresslist.price}</h6>
                        <h6 class="card-text text-start text-dark"><span class="Light-text">Contact: </span>{inprogresslist.contact_info}</h6>
                        <h6 class="card-text text-start text-dark"><span class="Light-text">Website: </span>{inprogresslist.website}</h6>
                        <h6 class="card-text text-start text-dark"><span class="Light-text">Comment: </span>{inprogresslist.comment}</h6>
                    </div>
                    </div>
                </div>
            </div>

    )
    }


export default InProgress

// Is there a way to fix class?
// If not, will my application compile anyway?