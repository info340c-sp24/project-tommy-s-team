import React, {useState} from 'react';

export default function Detail({taskList, setTaskList, isOnlyShowGroup, taskListGroup, setTaskListGroup, isOnlyShowSearch, taskListSearch, setTaskListSearch, task}) {
    const [newTaskList, setNewTaskList] = useState(taskList);
    const [newTaskListGroup, setNewTaskListGroup] = useState(taskListGroup);
    const [newTaskListSearch, setNewTaskListSearch] = useState(taskListSearch);
    function HandleNameChange(event) {
        newTaskList.map((element) => {
            if (element == task) {
                element.TaskName = event.target.value;
                setNewTaskList(taskList);
                return;
            }
        })
        newTaskListGroup.map((element) => {
            if (element == task) {
                element.TaskName = event.target.value;
                setNewTaskListGroup(taskList);
                return;
            }
        })

        newTaskListSearch.map((element) => {
            if (element == task) {
                element.TaskName = event.target.value;
                setNewTaskListSearch(taskList);
                return;
            }
        })
    }

    function HandleDateChange(event) {
        newTaskList.map((element) => {
            if (element == task) {
                element.DueDate = event.target.value;
                setNewTaskList(taskList);
                return;
            }
        })

        newTaskListGroup.map((element) => {
            if (element == task) {
                element.DueDate = event.target.value;
                setNewTaskListGroup(taskList);
                return;
            }
        })

        newTaskListSearch.map((element) => {
            if (element == task) {
                element.DueDate = event.target.value;
                setNewTaskListSearch(taskList);
                return;
            }
        })
    }

    function HandleDescChange(event) {
        newTaskList.map((element) => {
            if (element == task) {
                element.DescText = event.target.value;
                setNewTaskList(taskList);
                return;
            }
        })

        newTaskListGroup.map((element) => {
            if (element == task) {
                element.DescText = event.target.value;
                setNewTaskListGroup(taskList);
                return;
            }
        })

        newTaskListSearch.map((element) => {
            if (element == task) {
                element.DescText = event.target.value;
                setNewTaskListSearch(taskList);
                return;
            }
        })
    }

    function HandlePriorityChange(event) {
        newTaskList.map((element) => {
            if (element == task) {
                element.Priority = event.target.value;
                setNewTaskList(taskList);
                return;
            }
        })

        newTaskListGroup.map((element) => {
            if (element == task) {
                element.Priority = event.target.value;
                setNewTaskListGroup(taskList);
                return;
            }
        })

        newTaskListSearch.map((element) => {
            if (element == task) {
                element.Priority = event.target.value;
                setNewTaskListSearch(taskList);
                return;
            }
        })
    }

    function HandleChange() {
        if (!isOnlyShowGroup && !isOnlyShowSearch) {
            setTaskList(newTaskList);
            setTaskListGroup(newTaskList);
            setTaskListSearch(newTaskList);
        } else if (isOnlyShowGroup) {
            setTaskListGroup(newTaskListGroup);
            setTaskList(newTaskList);
        } else if (isOnlyShowSearch) {
            setTaskListSearch(newTaskListSearch);
            setTaskList(newTaskList);
        }   
    }

    console.log(taskList);
    return (
        <div className="detail-box">
            <input type="text" placeholder={task.TaskName} className='name-bar' onChange={HandleNameChange}/>
            <input type="date" className='due-date-bar' onChange={HandleDateChange}/>
            <textarea className="description-bar" type="text" placeholder={task.DescText} rows="5" cols="20" onChange={HandleDescChange}></textarea>     
            <div className="priority">
                <label htmlFor="priority-select"></label>
                <select name="priority-level" id="pet-select" onChange={HandlePriorityChange}>
                <option value="">Your Priority Level: {task.Priority}</option>
                <option value={1}>Level 1</option>
                <option value={2}>Level 2</option>
                <option value={3}>Level 3</option>
                </select>
            </div>

            <button id="add-btn" className="add-btn" onClick={HandleChange}>Save Change</button>
        </div>
    );
}