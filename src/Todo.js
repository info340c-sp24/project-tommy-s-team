'use strict';
import React, {useState} from 'react';
import AddTask_btn from './AddTask_btn';
export default function Todo({taskList, setTaskList}) {
    function GetIncompletedTask(taskList) {
        return taskList.filter((task) => {
            return task.completed == false;
        });  
    }

    return (
        <div className="todo-list">
            <p className="title"><b>Upcoming Tasks</b></p>
            <ol id="todo">
                {taskList.map((task) => (
                    <li key={task.TaskID}>
                        <input type="checkbox" className={`task-check-box ${task.TaskID}`} name="task-check-box" 
                        onClick={() => {
                            task.completed = true;
                            setTaskList(GetIncompletedTask(taskList));
                        }}
                        />
                        <label htmlFor="taskInput" className="task-detail">{task.TaskName}</label><strong className="date">{task.DueDate}</strong> <button className="detail-btn"> Detail </button> <button className="delete-btn">Delete</button>
                    </li>
                ))}   
            </ol>
            <AddTask_btn taskList = {taskList} setTaskList={setTaskList} GetIncompletedTask={GetIncompletedTask}/>
        </div>

    );
}