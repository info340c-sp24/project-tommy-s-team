'use strict';
import React, { useState } from 'react';
import AddTask_btn from './AddTask_btn';
import AddGroup_btn from './AddGroup_btn';
import Detail_btn from './Detail_btn';

export default function Todo({ taskList, setTaskList, groupSet, setGroupSet, isOnlyShowGroup, taskListGroup, setTaskListGroup, isOnlyShowSearch, taskListSearch, setTaskListSearch}) {
    function GetIncompletedTask(taskList) {
        return taskList.filter((task) => {
            return task.completed == false && task.display == true;
        });
    }

    return (
        <div className="todo-list">
            <p className="title"><b>Upcoming Tasks</b></p>
            <ol id="todo">
                {!isOnlyShowGroup && !isOnlyShowSearch && taskList.map((task) => (
                    <li key={task.TaskID}>
                        <input
                            type="checkbox"
                            className={`task-check-box ${task.TaskID}`}
                            name="task-check-box"
                            onClick={() => {
                                task.completed = true;
                                setTaskList(GetIncompletedTask(taskList));
                                // setTaskListGroup(GetIncompletedTask(taskListGroup));
                            }}
                        />
                        <label htmlFor="taskInput" className="task-detail">{task.TaskName}</label>
                        <strong className="date">{task.DueDate}</strong>
                        <Detail_btn taskList={taskList} setTaskList={setTaskList} isOnlyShowGroup={isOnlyShowGroup} taskListGroup={taskListGroup} setTaskListGroup={setTaskListGroup} isOnlyShowSearch={isOnlyShowSearch} taskListSearch={taskListSearch} setTaskListSearch={setTaskListSearch} task={task}/>
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
                        <Detail_btn taskList={taskList} setTaskList={setTaskList} isOnlyShowGroup={isOnlyShowGroup} taskListGroup={taskListGroup} setTaskListGroup={setTaskListGroup} isOnlyShowSearch={isOnlyShowSearch} taskListSearch={taskListSearch} setTaskListSearch={setTaskListSearch} task={task}/>
                    </li>
                ))}

                {isOnlyShowSearch && taskListSearch.map((task) => (
                    <li key={task.TaskID}>
                        <input
                            type="checkbox"
                            className={`task-check-box ${task.TaskID}`}
                            name="task-check-box"
                            onClick={() => {
                                task.completed = true;
                                setTaskListSearch(GetIncompletedTask(taskListSearch));
                                setTaskList(GetIncompletedTask(taskList));
                            }}
                        />
                        <label htmlFor="taskInput" className="task-detail">{task.TaskName}</label>
                        <strong className="date">{task.DueDate}</strong>
                        <Detail_btn taskList={taskList} setTaskList={setTaskList} isOnlyShowGroup={isOnlyShowGroup} taskListGroup={taskListGroup} setTaskListGroup={setTaskListGroup} isOnlyShowSearch={isOnlyShowSearch} taskListSearch={taskListSearch} setTaskListSearch={setTaskListSearch} task={task}/>
                    </li>
                ))}
            </ol>
            <AddTask_btn taskList={taskList} setTaskList={setTaskList} GetIncompletedTask={GetIncompletedTask} />
            <AddGroup_btn taskList={taskList} setTaskList={setTaskList} groupSet={groupSet} setGroupSet={setGroupSet}/>
        </div>
    );
}
