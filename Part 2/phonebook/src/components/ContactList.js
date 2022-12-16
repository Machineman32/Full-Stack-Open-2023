import React from 'react'
import Contact from "./Contact";

const ContactList = ({persons, search}) => {

    return(
        <div>
            <h2>Numbers</h2>
            <ul>
                {persons.filter((pers) => {
                    return pers.name.toLowerCase() === '' ? pers : pers.name.toLowerCase().includes(search)
                }).map(person => {
                    return <Contact person={person} />
                })}
            </ul>
        </div>
    )
}

export default ContactList