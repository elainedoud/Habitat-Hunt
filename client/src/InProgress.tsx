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

function InProgress ({inprogresslist}: InProgressProps) {

    return (
            <div className="col-md-6 p-3">
                <div className="card border-secondary border-3">
                    <div className="card-block shadow-lg">  
                    <div className="card-body bg-light">
                        <h6 className="card-title text-start text-dark"><span className="Light-text">Name: </span>{inprogresslist.apartment_name}</h6>
                        <h6 className="card-text text-start text-dark"><span className="Light-text">Address: </span>{inprogresslist.address}</h6>
                        <h6 className="card-text text-start text-dark"><span className="Light-text">Price:</span> ${inprogresslist.price}</h6>
                        <h6 className="card-text text-start text-dark"><span className="Light-text">Contact: </span>{inprogresslist.contact_info}</h6>
                        <h6 className="card-text text-start text-dark"><span className="Light-text">Website: </span>{inprogresslist.website}</h6>
                        <h6 className="card-text text-start text-dark"><span className="Light-text">Comment: </span>{inprogresslist.comment}</h6>
                    </div>
                    </div>
                </div>
            </div>

    )
    }


export default InProgress