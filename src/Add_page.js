'use strict';
import React, {useState} from 'react';

export default function Add_page({taskList, setTaskList, GetIncompletedTask}) {
    const [TaskInput, setTaskInput] = useState('');
    const [DescInput, setDesc] = useState('');
    const [DueDateInput, SetDueDateInput] = useState('');
    const [Priority, SetPriority] = useState(0);
    
    //function handleAdd() {
    //    const newTask = taskList.concat({TaskID: taskList.length + 1, TaskName: TaskInput, DueDate: DueDateInput, Priority: Priority, DescText: DescInput, completed: false});
    //    setTaskList(GetIncompletedTask(newTask));
    //    setTaskInput('');
    //   setDesc('');
     //   SetDueDateInput('');
    //    SetPriority('');
    //}

    function handleAdd() {
        const newTask = {
            TaskID: taskList.length + 1,
            TaskName: TaskInput,
            DueDate: DueDateInput,
            Priority: Priority,
            DescText: DescInput,
            completed: false
        };
        const newTaskList = taskList.concat(newTask);
        setTaskList(GetIncompletedTask(newTaskList));
        setTaskInput('');
        setDesc('');
        SetDueDateInput('');
        SetPriority(0);
    }
    
    return (
        <div className="add-box">
            <input type="text" placeholder="Task name" className='name-bar' onChange={(event) => setTaskInput(event.target.value)} value={TaskInput}/>
            <input type="text" placeholder="Due Date" className='due-date-bar' value={DueDateInput} onChange={(event) => SetDueDateInput(event.target.value)}/>
            <textarea className="description-bar" type="text" placeholder="Description" rows="5" cols="20" value={DescInput} onChange={(event) => setDesc(event.target.value)}></textarea>     
            <div className="priority">
                <label htmlFor="priority-select"></label>
                <select name="priority-level" id="pet-select" value={Priority} onChange={(event) => SetPriority(event.target.value)}>
                <option value="">Choose a priority level</option>
                <option value={1}>Level 1</option>
                <option value={2}>Level 2</option>
                <option value={3}>Level 3</option>
                </select>
            </div>

            <button onClick={handleAdd} id="add-btn" className="add-btn">Add</button>
        </div>
    );
} 