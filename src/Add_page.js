'use strict';
import React from 'react'

function markComplete(task) {
    task.completed = true;
}

export function element(TaskList) {
    TaskList.map((task) => (
        <li key={task.id}>
            <input type="checkbox" className="task-check-box" name="task-check-box" onClick={markComplete(task)}/>
            <label htmlFor="taskInput" className="task-detail">{task.TaskName}</label><strong className="date">{task.DueDate}</strong> <button className="detail-btn"> Detail </button> <button className="delete-btn">Delete</button>
        </li>
    ))
}