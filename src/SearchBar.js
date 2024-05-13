'use strict';
import React from 'react'

export default function SearchBar() {
    return (
        <form action="http://127.0.0.1:8080/" method="get" className="SearchBarForm">
            <label htmlFor="search-text"></label>
            <input type="text"/>
            <button id="search-btn" className="search-btn">Search</button>
        </form>
    )
}