import React from 'react'

function SearchForm(props){
    // console.log(props.searchTerm)
    return (
        <form>
            <input type="text" placeholder="name" value={props.searchTerm} onChange={props.handleSearchForm}/>
        </form>
        )
}

export default SearchForm