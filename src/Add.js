'use strict';
import React from 'react'

export default function Add() {
    return (
        <div className="add-box">
            <div className="name-bar">
                <input type="text" placeholder="Task name"/>
            </div>

            <div className="due-date-bar">
                <input type="text" placeholder="Due Date"/>
            </div>

            <div className="description-bar">
                <textarea id="task-desc" type="text" placeholder="Description" rows="5" cols="20"></textarea>
            </div>

            <div className="priority">
                <label htmlFor="priority-select"></label>
                <select name="priority-level" id="pet-select">
                <option value="">Choose a priority level</option>
                <option value="l1">Level 1</option>
                <option value="l2">Level 2</option>
                <option value="l3">Level 3</option>
                </select>
            </div>

            <button onclick="location.href = 'https://info340c-sp24.github.io/project-tommy-s-team/';" id="add-btn" className="add-btn">Add</button>
        </div>
    )
}