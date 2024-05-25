'use strict';
import React, { useState } from 'react';
import AddTask_btn from './AddTask_btn';
import AddGroup_btn from './AddGroup_btn';

export default function Todo({ taskList, setTaskList, groupSet, setGroupSet, isOnlyShowGroup, taskListGroup, setTaskListGroup }) {
    function GetIncompletedTask(taskList) {
        return taskList.filter((task) => {
            return task.completed == false;
        });
    }

    return (
        <div className="todo-list">
            <p className="title"><b>Upcoming Tasks</b></p>
            <ol id="todo">
                {!isOnlyShowGroup && taskList.map((task) => (
                    <li key={task.TaskID}>
                        <input
                            type="checkbox"
                            className={`task-check-box ${task.TaskID}`}
                            name="task-check-box"
                            onClick={() => {
                                task.completed = true;
                                setTaskList(GetIncompletedTask(taskList));
                                setTaskListGroup(GetIncompletedTask(taskListGroup));
                            }}
                        />
                        <label htmlFor="taskInput" className="task-detail">{task.TaskName}</label>
                        <strong className="date">{task.DueDate}</strong>
                        <button className="detail-btn">Detail</button>
                        {/* <button className="delete-btn">Delete</button> */}
                    </li>
                ))}
                {isOnlyShowGroup && taskListGroup.map((task) => (
                    <li key={task.TaskID}>
                        <input
                            type="checkbox"
                            className={`task-check-box ${task.TaskID}`}
                            name="task-check-box"
                            onClick={() => {
                                task.completed = true;
                                setTaskListGroup(GetIncompletedTask(taskListGroup));
                                setTaskList(GetIncompletedTask(taskList));
                            }}
                        />
                        <label htmlFor="taskInput" className="task-detail">{task.TaskName}</label>
                        <strong className="date">{task.DueDate}</strong>
                        <button className="detail-btn">Detail</button>
                    </li>
                ))}
            </ol>
            <AddTask_btn taskList={taskList} setTaskList={setTaskList} GetIncompletedTask={GetIncompletedTask} />
            <AddGroup_btn taskList={taskList} setTaskList={setTaskList} groupSet={groupSet} setGroupSet={setGroupSet}/>
        </div>
    );
}
