'use strict';
import React, {useState} from 'react'

export default function Sorting_Dropdown() {
    const [show, setShow] = useState(false);
    function clickDropdown() {
        if (show === false) {
            setShow(true);
        } else {
            setShow(false);
        }
    }
    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={clickDropdown}>
                Categories
            </button>
            {show === true && (
                <div>
                    <input type="checkbox" id="cat-check-box" name="cat-check-box" />
                    <label htmlFor="taskInput">Category 1</label>
                    <br />
                    <input type="checkbox" id="cat-check-box" name="cat-check-box" />
                    <label htmlFor="taskInput">Category 2</label>
                    <br />
                    <input type="checkbox" id="cat-check-box" name="cat-check-box" />
                    <label htmlFor="taskInput">Category 3</label>
                    <br />
                </div>
            )}
            
        </div>
    )
}