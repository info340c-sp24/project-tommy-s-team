'use strict';
import React from 'react'
import Sorting_Dropdown from './Sorting_Dropdown'
export default function sorting() {
    return (
        <div className="menu"> 
            <div className="sort-box">
                    <input type="checkbox" id="sort-check-box" name="sort-check-box" />
                    <label htmlFor="sort-check-box" className="task-detail">Date</label>

                    <input type="checkbox" id="sort-check-box" name="sort-check-box" />
                    <label htmlFor="sort-check-box" className="task-detail">Priority Level</label>

                    <input type="checkbox" id="sort-check-box" name="sort-check-box" />
                    <label htmlFor="sort-check-box" className="task-detail">Name</label>

                    <Sorting_Dropdown />
            </div>
            </div>

    )
}