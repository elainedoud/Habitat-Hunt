import React, {useState} from 'react';

interface ListingFormProps {
    makeNewCard: {
        description: string;
        (newCard: object): object;
    }
}

function ListingForm({makeNewCard}: ListingFormProps){

    const [buildingName, setBuildingName] = React.useState("")
    const [address, setAddress] = React.useState("")
    const [price, setPrice] = React.useState("")
    const [contactPerson, setContactPerson] = React.useState("")
    const [website, setWebsite] = React.useState("")
    const [comment, setComment] = React.useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        fetch("/inprogress", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: buildingName,
                address: address,
                price: price,
                contact: contactPerson,
                website: website,
                comment: comment,
            })
        })
        .then(res => res.json())
        .then(newCard => makeNewCard(newCard))

    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label form="new-apartment-name">Name of Apartment Complex: </label>
            <input type="text" name="new-apartment-name" value={buildingName} onChange={(e) => setBuildingName(e.target.value)}/>
            <label form="new-apartment-address">Address of Apartment: </label>
            <input type="text" name="new-apartment-address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <label form="new-apartment-price">Price: </label>
            <input type="text" name="new-apartment-price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <label form="new-apartment-contact">Name of Contact Person: </label>
            <input type="text" name="new-apartment-contact" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)}/>
            <label form="new-apartment-website">Website: </label>
            <input type="text" name="new-apartment-website" value={website} onChange={(e) => setWebsite(e.target.value)}/>
            <label form="new-apartment-comment">Comment: </label>
            <input type="text" name="new-apartment-comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
            <button type="submit">Enter</button>
        </form>
        </div>
    )
}


export default ListingForm

// Need to add a submit button to the form
// Encountering errors - something is not working; blank cards are being sent to the page

// Test form out  [New Card Information should appear on InProgress Page]
// If form successfully works, figure out how to remove any extra information from project