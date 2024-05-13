'use strict';
import React from 'react'
import Sorting_Dropdown from './Sorting_Dropdown'
export default function sorting() {
    return (
            <div>
                    <input type="checkbox" id="sort-check-box" name="sort-check-box" />
                    <label htmlFor="sort-check-box" className="task-detail">Date</label> <br></br>

                    <input type="checkbox" id="sort-check-box" name="sort-check-box" />
                    <label htmlFor="sort-check-box" className="task-detail">Priority Level</label> <br></br>

                    <input type="checkbox" id="sort-check-box" name="sort-check-box" />
                    <label htmlFor="sort-check-box" className="task-detail">Name</label> <br></br>

                    <Sorting_Dropdown />
            </div>
    )
}