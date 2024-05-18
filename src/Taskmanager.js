import React, { useState } from 'react';
import Add_page from './Add_page';
import Grouping from './Grouping';

const Taskmanager = () => {
    const [taskList, setTaskList] = useState([]);

    const GetIncompletedTask = (tasks) => {
        return tasks.filter(task => !task.completed);
    };

    return (
        <div className="task-manager">
            <Add_page taskList={taskList} setTaskList={setTaskList} GetIncompletedTask={GetIncompletedTask} />
            <Grouping taskList={taskList} />
        </div>
    );
};

export default Taskmanager;
