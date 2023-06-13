import React from 'react';

interface ListingFormProps {
    makeNewCard: {
        description: string;
        (newCard: object): object;
    }
}

function ListingForm({makeNewCard}: ListingFormProps){

    const [name, setName] = React.useState("")
    const [address, setAddress] = React.useState("")
    const [price, setPrice] = React.useState("")
    const [contact, setContact] = React.useState("")
    const [website, setWebsite] = React.useState("")
    const [comment, setComment] = React.useState("")


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        fetch("/newinprogress", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                apartment_name: name,
                address: address,
                price: price,
                contact_info: contact,
                website: website,
                comment: comment,
            })
        })
        .then(res => res.json())
        .then(newCard => makeNewCard(newCard));
        setName("");
        setAddress("");
        setPrice("");
        setContact("");
        setWebsite("");
        setComment("");
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label form="new-apartment-name">Name of Apartment Complex: </label>
            <input type="text" name="new-apartment-name" value={name} onChange={(e) => setName(e.target.value)}/>
            <label form="new-apartment-address">Address of Apartment: </label>
            <input type="text" name="new-apartment-address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <label form="new-apartment-price">Price: </label>
            <input type="text" name="new-apartment-price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <label form="new-apartment-contact">Name of Contact Person: </label>
            <input type="text" name="new-apartment-contact" value={contact} onChange={(e) => setContact(e.target.value)}/>
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

// Questions Debugging Have Brought Up
    // Why does the information in the form not disappear when it is submitted?
            // Attempting solutions, but it has not worked yet
    // Why is my post not persisting? It disappears when the page is refreshed

// Test form out  [New Card Information should appear on InProgress Page]
// If form successfully works, figure out how to remove any extra information from project