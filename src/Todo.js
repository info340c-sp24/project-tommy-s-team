'use strict';
import React, { useEffect, useState } from 'react';
import AddTask_btn from './AddTask_btn';
import AddGroup_btn from './AddGroup_btn';
import Detail_btn from './Detail_btn';
import { getDatabase, ref, push, onValue, set, remove } from 'firebase/database';

export default function Todo({ taskList, setTaskList, groupSet, setGroupSet, isOnlyShowGroup, taskListGroup, setTaskListGroup, isOnlyShowSearch, taskListSearch, setTaskListSearch, uid}) {
    function GetIncompletedTask(taskList) {
        return taskList.filter((task) => {
            return task.completed == false && task.display == true;
        });
    }
    
    useEffect(() => {
        const db = getDatabase();
        const taskRef = ref(db, uid+"/Tasks");
        onValue(taskRef, (snapshot) => {
            const AllTaskObjs = snapshot.val();
            if (AllTaskObjs != null) {
                const keyArray = Object.keys(AllTaskObjs);
                const TaskArray = keyArray.map((key) => {
                    const transform = AllTaskObjs[key];
                    transform.firebaseKey = key;
                    return transform;
                })
                const newTaskList = taskList.concat(TaskArray);
                setTaskList(GetIncompletedTask(newTaskList));
                let tempSet = new Set();
                TaskArray.map((task) => {
                    if (task.Group != "") {
                        tempSet.add(task.Group);
                    }
                })
                setGroupSet(tempSet);
            }  
        })
    }, [])
    console.log(taskList)
    function MarkComplete(task) {
        const db = getDatabase();
        const taskRef = ref(db, uid+"/Tasks");
        onValue(taskRef, (snapshot) => {
            const AllTaskObjs = snapshot.val();
            if (AllTaskObjs != null) {
                for (let key in AllTaskObjs) {
                    const value = AllTaskObjs[key];
                    if (task.TaskID == value['TaskID']) {
                        const completedTaskRef = ref(db, uid+"/Tasks/"+key);
                        remove(completedTaskRef);
                    }
                }
            } 
        })
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
                                MarkComplete(task);
                                task.completed = true;
                                setTaskList(GetIncompletedTask(taskList));
                                setTaskListGroup(GetIncompletedTask(taskListGroup));
                            }}
                        />
                        <label htmlFor="taskInput" className="task-detail">{task.TaskName}</label>
                        <strong className="date">{task.DueDate}</strong>
                        <Detail_btn taskList={taskList} setTaskList={setTaskList} isOnlyShowGroup={isOnlyShowGroup} taskListGroup={taskListGroup} setTaskListGroup={setTaskListGroup} isOnlyShowSearch={isOnlyShowSearch} taskListSearch={taskListSearch} setTaskListSearch={setTaskListSearch} task={task} uid={uid}/>
                    </li>
                ))}
                {isOnlyShowGroup && taskListGroup.map((task) => (
                    <li key={task.TaskID}>
                        <input
                            type="checkbox"
                            className={`task-check-box ${task.TaskID}`}
                            name="task-check-box"
                            onClick={() => {
                                MarkComplete(task);
                                task.completed = true;
                                setTaskListGroup(GetIncompletedTask(taskListGroup));
                                setTaskList(GetIncompletedTask(taskList));
                            }}
                        />
                        <label htmlFor="taskInput" className="task-detail">{task.TaskName}</label>
                        <strong className="date">{task.DueDate}</strong>
                        <Detail_btn taskList={taskList} setTaskList={setTaskList} isOnlyShowGroup={isOnlyShowGroup} taskListGroup={taskListGroup} setTaskListGroup={setTaskListGroup} isOnlyShowSearch={isOnlyShowSearch} taskListSearch={taskListSearch} setTaskListSearch={setTaskListSearch} task={task} uid={uid}/>
                    </li>
                ))}

                {isOnlyShowSearch && taskListSearch.map((task) => (
                    <li key={task.TaskID}>
                        <input
                            type="checkbox"
                            className={`task-check-box ${task.TaskID}`}
                            name="task-check-box"
                            onClick={() => {
                                MarkComplete(task);
                                task.completed = true;
                                setTaskListSearch(GetIncompletedTask(taskListSearch));
                                setTaskList(GetIncompletedTask(taskList));
                            }}
                        />
                        <label htmlFor="taskInput" className="task-detail">{task.TaskName}</label>
                        <strong className="date">{task.DueDate}</strong>
                        <Detail_btn taskList={taskList} setTaskList={setTaskList} isOnlyShowGroup={isOnlyShowGroup} taskListGroup={taskListGroup} setTaskListGroup={setTaskListGroup} isOnlyShowSearch={isOnlyShowSearch} taskListSearch={taskListSearch} setTaskListSearch={setTaskListSearch} task={task} uid={uid}/>
                    </li>
                ))}
            </ol>
            <AddTask_btn taskList={taskList} setTaskList={setTaskList} GetIncompletedTask={GetIncompletedTask} uid={uid} />
            <AddGroup_btn taskList={taskList} setTaskList={setTaskList} groupSet={groupSet} setGroupSet={setGroupSet} uid={uid}/>
        </div>
    );
}
