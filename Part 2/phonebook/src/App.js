import { useState } from 'react'

const App = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const numberHandler = (e) => {
        e.preventDefault()
        setNewNumber(e.target.value)
    }

    const nameHandler = (e) => {
        e.preventDefault()
        setNewName(e.target.value)
        console.log(newName)
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

        for (let i in personObject) {
            console.log(personObject[i])
        }

        setPersons(persons.concat(personObject))
    }

    return (
        <div>
            <h2>Phonebook</h2>
            Search contact <input/>
            <h2>Add number</h2>
            <form onSubmit={addContact}>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={nameHandler}
                    />
                </div>
                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={numberHandler}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                    {persons.map(person => {
                        return <p>{person.name} {person.number}</p>
                    })}
            </ul>
        </div>
    )
}

export default App