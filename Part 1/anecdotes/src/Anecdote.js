import React, {useState} from "react";

const Anecdote = ({anecdotes, selected, votes}) => {

    return(
        <div>
            {anecdotes[selected]}
            <p>has {votes} votes</p>
        </div>
    )
}

export default Anecdote