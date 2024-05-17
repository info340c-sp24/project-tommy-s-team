'use strict';
import React, {useState} from 'react';
import AddTask_btn from './AddTask_btn';
export default function Todo({taskList, setTaskList}) {
    // const [taskList, setTaskList] = useState([]);
    // function AddTask_btn() {
    //     const [popup, setPopup] = useState(false);
    //     const handleClick = () => {
    //         if (popup) {
    //             setPopup(false);
    //         } else {
    //             setPopup(true);
    //         }
    //     }

    //     return (
    //         <div>
    //             <button onClick={handleClick} style={{ fontSize: '14px' }} id="add-btn"><i className='fas fa-plus'></i> Add Task</button>
    //             {popup && <div> <Add_page /> </div>}
    //         </div>
    //     );
    // }

    function GetIncompletedTask(taskList) {
        return taskList.filter((task) => {
            return task.completed == false;
        });  
    }
    // function Add_page() {
    //     const [TaskInput, setTaskInput] = useState('');
    //     const [DescInput, setDesc] = useState('');
    //     const [DueDateInput, SetDueDateInput] = useState('');
    //     const [Priority, SetPriority] = useState(0);
        
    //     function handleAdd() {
    //         const newTask = taskList.concat({TaskID: taskList.length + 1, TaskName: TaskInput, DueDate: DueDateInput, Priority: Priority, DescText: DescInput, completed: false});
    //         setTaskList(GetIncompletedTask(newTask));
    //     }
    //     return (
    //         <div className="add-box">
    //             <input type="text" placeholder="Task name" className='name-bar' onChange={(event) => setTaskInput(event.target.value)} value={TaskInput}/>
    //             <input type="text" placeholder="Due Date" className='due-date-bar' value={DueDateInput} onChange={(event) => SetDueDateInput(event.target.value)}/>
    //             <textarea className="description-bar" type="text" placeholder="Description" rows="5" cols="20" value={DescInput} onChange={(event) => setDesc(event.target.value)}></textarea>     
    //             <div className="priority">
    //                 <label htmlFor="priority-select"></label>
    //                 <select name="priority-level" id="pet-select" value={Priority} onChange={(event) => SetPriority(event.target.value)}>
    //                 <option value="">Choose a priority level</option>
    //                 <option value={1}>Level 1</option>
    //                 <option value={2}>Level 2</option>
    //                 <option value={3}>Level 3</option>
    //                 </select>
    //             </div>
    
    //             <button onClick={handleAdd} id="add-btn" className="add-btn">Add</button>
    //         </div>
    //     );
    // } 
    
    // console.log(taskList);

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