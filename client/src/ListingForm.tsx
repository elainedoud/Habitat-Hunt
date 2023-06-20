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
        <div className="col-md-5 p-3">
        <div className="card border-secondary border-3">
        <div className="card-block shadow-lg">
        <div className="card-body bg-light">
        <form onSubmit={handleSubmit}>
            <label form="new-apartment-name" className="Theform">Name of Apartment Complex: </label>
            <input type="text" name="new-apartment-name"className="Theform" value={name} onChange={(e) => setName(e.target.value)}/>
            <label form="new-apartment-address" className="Theform">Address of Apartment: </label>
            <input type="text" name="new-apartment-address" className="Theform" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <label form="new-apartment-price" className="Theform">Price: </label>
            <input type="text" name="new-apartment-price" className="Theform" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <label form="new-apartment-contact" className="Theform">Name of Contact Person: </label>
            <input type="text" name="new-apartment-contact" className="Theform" value={contact} onChange={(e) => setContact(e.target.value)}/>
            <label form="new-apartment-website" className="Theform">Website: </label>
            <input type="text" name="new-apartment-website" className="Theform" value={website} onChange={(e) => setWebsite(e.target.value)}/>
            <label form="new-apartment-comment" className="Theform">Comment: </label>
            <input type="text" name="new-apartment-comment" className="Theform" value={comment} onChange={(e) => setComment(e.target.value)}/>
            <button type="submit" className="Theform">Enter</button>
        </form>
        </div>
        </div>
        </div>
        </div>
    )
}


export default ListingForm