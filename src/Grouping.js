import React, { useState } from 'react';
import './index.css';

const Grouping = ({ taskList, setTaskList, onClose, groupSet, setGroupSet }) => {
    const [groupName, setGroupName] = useState('');
    const [groups, setGroups] = useState([]);

    const handleGroupButtonClick = () => {
        const selectedTasks = taskList.filter(task => task.checked).map(task => task.TaskID);

        if (selectedTasks.length > 0) {
            const name = groupName.trim() || 'Unnamed Group';

            const updatedTasks = taskList.map(task => {
                if (selectedTasks.includes(task.TaskID)) {
                    return { ...task, group: name, checked: false }; 
                }
                return task;
            });
            const tempSet = new Set([name])
            setGroupSet(new Set([...groupSet, ...tempSet]) )
            setTaskList(updatedTasks);
            setGroups([...groups, { name, tasks: selectedTasks }]);
            setGroupName('');
        } else {
            alert('Please select at least one task.');
        }
    };
    

    const handleCheckboxChange = (taskId) => {
        const updatedTasks = taskList.map(task =>
            task.TaskID === taskId ? { ...task, checked: !task.checked } : task
        );
        setTaskList(updatedTasks);
    };

    return (
        <div className='grouping-box'>
            <div className="sort-body gt-page">
                <header>
                    <p><b>Please select the task(s) you want to add</b></p>
                </header>
                <table className="grouping-table">
                    <thead>
                        <tr>
                            <th>Check</th>
                            <th>Task Name</th>
                            <th>Due Date</th>
                            <th>Task Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskList.map(task => (
                            <tr key={task.TaskID}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={task.checked || false}
                                        onChange={() => handleCheckboxChange(task.TaskID)}
                                    />
                                </td>
                                <td>{task.TaskName}</td>
                                <td>{task.DueDate}</td>
                                <td>{task.DescText}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="in">
                    <input
                        type="text"
                        id="groupName"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        placeholder="Enter group name"
                    />
                    <button id="groupBtn" onClick={handleGroupButtonClick}>
                        Group Selected Tasks
                    </button>
                </div>
                <div id="groupsContainer">
                    {groups.map((group, index) => (
                        <div key={index} className="save-group">
                            Group: {group.name} - {group.tasks.join(', ')}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Grouping;
