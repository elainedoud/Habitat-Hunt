import React from 'react';

function InProgress({inprogresslist}){

    return (        
            <div>
                <p>Name: {inprogresslist.apartment_name}</p>
                <p>Address: {inprogresslist.address}</p>
                <p>Price: ${inprogresslist.price}</p>
                <p>Contact: {inprogresslist.contact_info}</p>
                <p>Website: {inprogresslist.website}</p>
                <p>Comment: {inprogresslist.comment}</p>
            </div>

    )
}

export default InProgress
