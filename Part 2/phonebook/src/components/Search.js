import React from 'react'

const Search = ({search, searchHandler}) => {
    return (
        <div>
            Search contact
            <form>
                <input
                    value={search}
                    onChange={searchHandler}
                />
            </form>
        </div>
    )
}

export default Search