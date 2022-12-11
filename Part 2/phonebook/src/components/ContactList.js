import React from 'react'

const ContactList = ({persons, search}) => {
    return(
        <div>
            <h2>Numbers</h2>
            <ul>
                {persons.filter((pers) => {
                    return pers.name.toLowerCase() === '' ? pers : pers.name.toLowerCase().includes(search)
                }).map(person => {
                    return <p>{person.name} {person.number}</p>
                })}
            </ul>
        </div>
    )
}

export default ContactList