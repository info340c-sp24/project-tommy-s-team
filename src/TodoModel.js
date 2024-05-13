'use strict';
import React, {useState} from 'react'

const [TaskInput, setTaskInput] = useState('');
const [DescInput, setDesc] = useState('');
const [DueDateInput, SetDueDateInput] = useState('');
const [TaskList, setTaskList] = useState([{}]);

export function handleTaskInput(event) {
    setTaskInput(event.target.value);
}
export function handleDescInput(event) {
    setDesc(event.target.value);
}
export function handleDateInput(event) {
    SetDueDateInput(event.target.value);
}
export function handleAdd() {
    setTaskList(...TaskList, {TaskID: TaskList.length + 1, TaskName: TaskInput, DueDate:DueDateInput, DescText: DescInput, completed: false});
}

export function GetIncompletedTask() {
    return TaskList.filter((task) => {
        return task.completed == false;
    });  
}