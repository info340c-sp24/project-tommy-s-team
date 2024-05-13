'use strict';
import React, {useState} from 'react'
// import * as ap from './Add_page';

export default function Todo() {
    const [TaskList, setTaskList] = useState([]);
    function AddTask_btn() {
        const [popup, setPopup] = useState(false);
        const handleClick = () => {
            if (popup) {
                setPopup(false);
            } else {
                setPopup(true);
            }
        }

        return (
            <div>
                <button onClick={handleClick} style={{ fontSize: '14px' }} id="add-btn"><i className='fas fa-plus'></i> Add Task</button>
                {popup && <div> <Add_page /> </div>}
            </div>
        );
    }

    function GetIncompletedTask(TaskList) {
        return TaskList.filter((task) => {
            return task.completed == false;
        });  
    }
    function Add_page() {
        const [TaskInput, setTaskInput] = useState('');
        const [DescInput, setDesc] = useState('');
        const [DueDateInput, SetDueDateInput] = useState('');
        
        function handleAdd() {
            const newTask = TaskList.concat({TaskID: TaskList.length + 1, TaskName: TaskInput, DueDate: DueDateInput, DescText: DescInput, completed: false});
            setTaskList(GetIncompletedTask(newTask));
        }
        return (
            <div className="add-box">
                <input type="text" placeholder="Task name" className='name-bar' onChange={(event) => setTaskInput(event.target.value)} value={TaskInput}/>
                <input type="text" placeholder="Due Date" className='due-date-bar' value={DueDateInput} onChange={(event) => SetDueDateInput(event.target.value)}/>
                <textarea className="description-bar" type="text" placeholder="Description" rows="5" cols="20" value={DescInput} onChange={(event) => setDesc(event.target.value)}></textarea>     
                <div className="priority">
                    <label htmlFor="priority-select"></label>
                    <select name="priority-level" id="pet-select">
                    <option value="">Choose a priority level</option>
                    <option value="l1">Level 1</option>
                    <option value="l2">Level 2</option>
                    <option value="l3">Level 3</option>
                    </select>
                </div>
    
                <button onClick={handleAdd} id="add-btn" className="add-btn">Add</button>
            </div>
        );
    } 
    
    console.log(TaskList);
    
    // function handleCheck(taskid) {
    //     if (task.id == taskid) {
    //         task.completed = true;
    //         setTaskList(GetIncompletedTask(TaskList));
    //     }
    // }

    return (
        <div className="todo-list">
            <p className="title"><b>Upcoming Tasks</b></p>
            <ol id="todo">
                {TaskList.map((task) => (
                    <li key={task.TaskID}>
                        <input type="checkbox" className={`task-check-box ${task.TaskID}`} name="task-check-box" 
                        onClick={() => {
                            task.completed = true;
                            setTaskList(GetIncompletedTask(TaskList));
                        }}
                        />
                        <label htmlFor="taskInput" className="task-detail">{task.TaskName}</label><strong className="date">{task.DueDate}</strong> <button className="detail-btn"> Detail </button> <button className="delete-btn">Delete</button>
                    </li>
                ))}   
            </ol>

            <AddTask_btn />
        </div>
    );
}