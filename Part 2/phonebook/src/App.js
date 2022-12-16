import {useEffect, useState} from 'react'
import Search from './components/Search'
import Add from './components/Add'
import ContactList from "./components/ContactList";
import personService from './services/persons'

const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        personService
            .getAll()
            .then(response => {
                setPersons(response.data)
            })
    }, [])


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


        const personObject = {
            name: newName,
            number: newNumber,
            id: `${persons.length + 1}`
        }

        console.log(personObject)

        for(let i in persons){
            const addedName = persons[i].name

            if(addedName === newName) {
                if(window.confirm(`${addedName} is already added to phonebook. Replace the old number with a new one?`)) {
                    personService.updateContact(persons[i].id, personObject)
                }
                return persons[i] = ''
            }
        }

        personService
            .create(personObject)
            .then(response => {
                setPersons(persons.concat(personObject))
                setNewName('')
            })
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