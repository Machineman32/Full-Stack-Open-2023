import React from "react";
import personService from '../services/persons'

const Contact = ({person}) => {

    const deleteContact = () => {
        if(window.confirm('Do you really want to delete the contact?')) {
            personService
                .deleteContact(person.id, person)
        }
    }

    return (
        <div>
            <p>{person.name} {person.number}</p>
            <button onClick={deleteContact}>Delete</button>
        </div>
    )
}

export default Contact