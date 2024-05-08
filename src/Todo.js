import React from 'react'

export default function Todo() {
    return (
        <div class="todo-list">
                <p class="title"><b>Upcoming Tasks</b></p>
                <div class="task">
                    <ol id="todo">
                        <li><input type="checkbox" id="task-check-box" name="task-check-box"/>
                        <label for="taskInput" class="task-detail">Info 340 Reading</label><strong class="date">04-19</strong><button class="detail-btn">Detail</button><button class="delete-btn">Delete</button></li>

                        <li><input type="checkbox" id="task-check-box" name="task-check-box"/>
                        <label for="taskInput" class="task-detail">Info 340 Problem Set</label><strong class="date">04-20</strong><button class="detail-btn">Detail</button><button class="delete-btn">Delete</button></li>
                        
                        <li><input type="checkbox" id="task-check-box" name="task-check-box"/>
                        <label for="taskInput" class="task-detail">Info 340 Project and Group Meetting</label><strong class="date">04-20</strong><button class="detail-btn">Detail</button><button class="delete-btn">Delete</button></li>
                        
                        <li><input type="checkbox" id="task-check-box" name="task-check-box"/>
                            <label for="taskInput" class="task-detail">This is a very long long long long long long long long task for testing</label><strong class="date">04-20</strong><button class="detail-btn">Detail</button><button class="delete-btn">Delete</button></li>
                    </ol>
                </div>
                <form action="https://info340c-sp24.github.io/project-tommy-s-team/add.html" method="get" class="AddForm"><button style={{ fontSize: '14px' }} id="add-btn"><i class='fas fa-plus'></i> Add Task</button></form>
        </div>
    )
}