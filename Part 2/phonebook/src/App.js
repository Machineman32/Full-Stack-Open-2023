import { useState } from 'react'
import Search from './components/Search'
import Add from './components/Add'
import ContactList from "./components/ContactList";

const App = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')

    const numberHandler = (e) => {
        e.preventDefault()
        setNewNumber(e.target.value)
    }

    const nameHandler = (e) => {
        e.preventDefault()
        setNewName(e.target.value)
    }

    const searchHandler = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const addContact = (e) => {
        e.preventDefault()

        for(let i in persons){
            const addedName = persons[i].name

            if(addedName === newName) {
                alert(`${addedName} is already added to phonebook`)
                return persons[i] = ''
            }
        }

        const personObject = {
            name: newName,
            number: newNumber,
            id: Date.now()
        }

        setPersons(persons.concat(personObject))
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Search
                search={search}
                searchHandler={searchHandler}
            />
            <Add
                addContact={addContact}
                newName={newName}
                nameHandler={nameHandler}
                newNumber={newNumber}
                numberHandler={numberHandler}
            />
            <ContactList
                persons={persons}
                search={search}
            />
        </div>
    )
}

export default App