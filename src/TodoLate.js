import React from 'react'

export default function TodoLate() {
    return (
        <div class="todo-list-over-due">
                <p class="title"><b>Over Due Date Tasks</b></p>
                <div class="task">
                    <ol id="todo">
                        <li><input type="checkbox" id="task-check-box" name="task-check-box" />
                        <label for="taskInput" class="task-detail">Info 340 Reading</label><strong class="date">03-19</strong><button class="detail-btn">Detail</button><button class="delete-btn">Delete</button></li>

                        <li><input type="checkbox" id="task-check-box" name="task-check-box" />
                        <label for="taskInput" class="task-detail">Info 340 Problem Set</label><strong class="date">03-20</strong><button class="detail-btn">Detail</button><button class="delete-btn">Delete</button></li>
                        
                        <li><input type="checkbox" id="task-check-box" name="task-check-box" />
                        <label for="taskInput" class="task-detail">Info 340 Project and Group Meetting</label><strong class="date">03-20</strong><button class="detail-btn">Detail</button><button class="delete-btn">Delete</button></li>
                        
                        <li><input type="checkbox" id="task-check-box" name="task-check-box" />
                            <label for="taskInput" class="task-detail">This is a very long long long long long long long long task for testing</label><strong class="date">03-20</strong><button class="detail-btn">Detail</button><button class="delete-btn">Delete</button></li>

                    </ol>
                </div>
            </div>
    )
}