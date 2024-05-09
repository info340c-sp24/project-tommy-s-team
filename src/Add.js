import React from 'react'

export default function Add() {
    return (
        <div class="add-box">
            <div class="name-bar">
                <input type="text" placeholder="Task name"/>
            </div>

            <div class="due-date-bar">
                <input type="text" placeholder="Due Date"/>
            </div>

            <div class="description-bar">
                <textarea id="task-desc" type="text" placeholder="Description" rows="5" cols="20"></textarea>
            </div>

            <div class="priority">
                <label for="priority-select"></label>
                <select name="priority-level" id="pet-select">
                <option value="">Choose a priority level</option>
                <option value="l1">Level 1</option>
                <option value="l2">Level 2</option>
                <option value="l3">Level 3</option>
                </select>
            </div>

            <button onclick="location.href = 'https://info340c-sp24.github.io/project-tommy-s-team/';" id="add-btn" class="add-btn">Add</button>
        </div>
    )
}