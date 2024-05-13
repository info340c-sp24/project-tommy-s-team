'use strict';
import React from 'react'

export default function TodoLate() {
    return (
        <div className="todo-list-over-due">
                <p className="title"><b>Over Due Date Tasks</b></p>
                <div className="task">
                    <ol id="todo">
                        <li><input type="checkbox" id="task-check-box" name="task-check-box" />
                        <label htmlFor="taskInput" className="task-detail">Info 340 Reading</label><strong className="date">03-19</strong><button className="detail-btn">Detail</button><button className="delete-btn">Delete</button></li>

                        <li><input type="checkbox" id="task-check-box" name="task-check-box" />
                        <label htmlFor="taskInput" className="task-detail">Info 340 Problem Set</label><strong className="date">03-20</strong><button className="detail-btn">Detail</button><button className="delete-btn">Delete</button></li>
                        
                        <li><input type="checkbox" id="task-check-box" name="task-check-box" />
                        <label htmlFor="taskInput" className="task-detail">Info 340 Project and Group Meetting</label><strong className="date">03-20</strong><button className="detail-btn">Detail</button><button className="delete-btn">Delete</button></li>
                        
                        <li><input type="checkbox" id="task-check-box" name="task-check-box" />
                            <label htmlFor="taskInput" className="task-detail">This is a very long long long long long long long long task for testing</label><strong className="date">03-20</strong><button className="detail-btn">Detail</button><button className="delete-btn">Delete</button></li>

                    </ol>
                </div>
            </div>
    )
}