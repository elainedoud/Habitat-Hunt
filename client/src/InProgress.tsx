import React from 'react';

interface CardProps{
  inprogresslist: object;
}

interface CustomInputProps {
    apartment_name: string;
    address: string;
    price: string;
    contact_info: string;
    website: string;
    comment: string;
}

class CustomInput extends React<CustomInputProps> {
    render() {
      return <input name={this.props.apartment_name} />;
    }
  }



const InProgress = ({inprogresslist}: CardProps, {CustomInputProps}: ) =>

    {return (
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

// Does not seem like "class" can be fixed, but maybe the project will compile anyway. 
// Now trying to fix apartment.name, address, ect.