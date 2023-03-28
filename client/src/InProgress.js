import React from 'react';

function InProgress({category}){

    return (

    <div>
        {category.category_name.map((category_name) =>{
            return (<div key={category_name.id} category_name={category_name}>
                {category_name.first_category.listings.map((listing) =>{
                    return (<div key={listing.id} listing={listing}>
                        <p>{listing.apartment_name}</p>
                    </div>
        )})}
                    </div>
            )})
    }
    </div>
    )}

    //I don't think category.category_name is an array, which is why it is causing issues
    // Look at information being pulled via useEffect on App, to determine how to parse it
/*
      (  <div>
            <p>Name: {category.listing.apartment_name}</p>
            <p>Address: {category.listing.address}</p>
            <p>Price: ${category.listing.price}</p>
            <p>Contact: {category.listing.contact_info}</p>
            <p>Website: {category.listing.website}</p>
            <p>Comment: {category.listing.comment}</p>*/
            //</div>
            /*category.listings.map((listing) =>{
                return (
                    <div key={listing.id} listing={listing}>
                    <p>{listing.apartment_name}</p>
                </div>)
                }))*/

    

            

export default InProgress



/*category.category_name.map((category_name) =>{
    return (
        <div key={category_name.id} category_name={category_name}>
            <p>{category_name.first_category}</p>
        </div>
    )
})*/