'use strict';
import React, {useState} from 'react';

export default function SearchBar({taskList, setTaskList, onlyShowSearch, isOnlyShowSearch, setIsOnlyShowSearch, setTaskListSearch}) {
    const [searchContent, setSearchContent] = useState("");
    function search() {
        if (searchContent === "") {
            setIsOnlyShowSearch(false);
        } else {
            setIsOnlyShowSearch(true);
            setTaskListSearch(onlyShowSearch(searchContent));
        }
        setSearchContent("");
    }
    return (
        <div className="SearchBarForm">
            <label htmlFor="search-text"></label>
            <input type="text" value={searchContent} onChange={(event) => setSearchContent(event.target.value)}/>
            <button id="search-btn" className="search-btn" onClick={search}>Search</button>
        </div>
            

    )
}