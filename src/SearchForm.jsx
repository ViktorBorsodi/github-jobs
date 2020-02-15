import React, { useState } from 'react';
import './SearchForm.css'

const SearchForm = ({handleSubmit}) => {
    const [desc, setDesc] = useState('')
    const [location, setLocation] = useState('')

    return (
        <form onSubmit={e => handleSubmit(e, desc, location)} >
            <label htmlFor="desc">Search for jobs:</label>
            <input type="text" id='desc' required value={desc} onChange={e => setDesc(e.target.value)} />

            <label htmlFor="location">Location:</label>
            <input type="text" id='location' required value={location} onChange={e => setLocation(e.target.value)} />

            <button>Search</button>
        </form>
    );
}

export default SearchForm;