import React from 'react'

const Add = ({addContact, newName, nameHandler, newNumber, numberHandler}) => {
    return (
        <div>
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
        </div>
    )
}

export default Add