import React from 'react'

export default function SearchBar() {
    return (
        <form action="http://127.0.0.1:8080/" method="get" class="SearchBarForm">
            <label for="search-text"></label>
            <input type="text"/>
            <button id="search-btn" class="search-btn">Search</button>
        </form>
    )
}