import React from 'react';

function Search(props) {
    return (
        <div className="md-form mt-0 search-container">
            <p className="search-header">Search by First Name</p>
            
            <input className="form-control search-box" type="text" placeholder="Search" aria-label="Search" onChange={props.onChange}/>
        </div>
    )
}

export default Search;