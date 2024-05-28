import React, {useState} from 'react'
import SearchBar from './SearchBar'
import Sorting from './Sorting'

export default function SmallMenu({taskList, setTaskList, taskListGroup, setTaskListGroup, groupSet, onlyShowGroup, isOnlyShowGroup, setIsOnlyShowGroup, taskListSearch, setTaskListSearch}) { 
    const [dispaly, setDispaly] = useState(false);
    function handleClick() {
        if (dispaly === false) {
            setDispaly(true);
        } else {
            setDispaly(false);
        }
    }

    return (
        <div className="menu-small">
            <button type="button" className="menu-btn" onClick={handleClick}>Menu</button>
            {dispaly === true && (
            <div>
                <Sorting taskList = {taskList} setTaskList={setTaskList} taskListGroup={taskListGroup} setTaskListGroup={setTaskListGroup} groupSet={groupSet} onlyShowGroup={onlyShowGroup} isOnlyShowGroup={isOnlyShowGroup} setIsOnlyShowGroup={setIsOnlyShowGroup} taskListSearch={taskListSearch} setTaskListSearch={setTaskListSearch}/>
            </div>
            )}
        </div>
    )
}