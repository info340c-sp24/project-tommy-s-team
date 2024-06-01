'use strict';
import React, {useState} from 'react'
import Sorting_Dropdown from './Sorting_Dropdown'
import _ from 'lodash';
export default function Sorting({taskList, setTaskList, taskListGroup, setTaskListGroup, groupSet, onlyShowGroup, isOnlyShowGroup, setIsOnlyShowGroup, taskListSearch, setTaskListSearch}) {
        const [isSortByDate, setIsSortByDate] = useState(false)
        const [isSortByPriority, setIsSortByPriority] = useState(false)
        const [isSortByName, setIsSortByName] = useState(false)
        function handleUncheck() {
                setTaskList(_.sortBy(taskList, 'TaskID'));
                setTaskListSearch(_.sortBy(taskListSearch, 'TaskID'));
                setTaskListGroup(_.sortBy(taskListGroup, 'TaskID'));
        }
        function handleDateChange(event) {
                setIsSortByPriority(false);
                setIsSortByName(false);
                setIsSortByDate(event.target.checked);
                setTaskList(_.sortBy(taskList, 'DueDate'));
                setTaskListSearch(_.sortBy(taskListSearch, 'DueDate'));
                setTaskListGroup(_.sortBy(taskListGroup, 'DueDate'));
                if (event.target.checked == false) {
                        handleUncheck()
                }
        }
        function handlePriorityChange(event) {
                setIsSortByDate(false);
                setIsSortByName(false);
                setIsSortByPriority(event.target.checked);
                setTaskList(_.sortBy(taskList, 'Priority').reverse());
                setTaskListSearch(_.sortBy(taskListSearch, 'Priority').reverse());
                setTaskListGroup(_.sortBy(taskListGroup, 'Priority').reverse());
                if (event.target.checked == false) {
                        handleUncheck()
                }
        }
        function handleNameChange(event) {
                setIsSortByDate(false);
                setIsSortByPriority(false);
                setIsSortByName(event.target.checked);
                setTaskList(_.sortBy(taskList, 'TaskName'));
                setTaskListSearch(_.sortBy(taskListSearch, 'TaskName'));
                setTaskListGroup(_.sortBy(taskListGroup, 'TaskName'));
                if (event.target.checked == false) {
                        handleUncheck()
                }
        }
        return (
        <div>
                <input type="checkbox" className="sort-check-box" id="dateSort" name="sort-check-box" checked={isSortByDate} onChange={handleDateChange}/>
                <label htmlFor="sort-check-box" className="task-detail">Date</label> <br></br>

                <input type="checkbox" className="sort-check-box" id="prioritySort" name="sort-check-box" checked={isSortByPriority} onChange={handlePriorityChange}/>
                <label htmlFor="sort-check-box" className="task-detail">Priority Level</label> <br></br>

                <input type="checkbox" className="sort-check-box" id="nameSort" name="sort-check-box" checked={isSortByName} onChange={handleNameChange}/>
                <label htmlFor="sort-check-box" className="task-detail">Name</label> <br></br>

                <Sorting_Dropdown taskList = {taskList} setTaskList={setTaskList} taskListGroup={taskListGroup} setTaskListGroup={setTaskListGroup} groupSet={groupSet} onlyShowGroup={onlyShowGroup} isOnlyShowGroup={isOnlyShowGroup} setIsOnlyShowGroup={setIsOnlyShowGroup} />
        </div>
        );
}