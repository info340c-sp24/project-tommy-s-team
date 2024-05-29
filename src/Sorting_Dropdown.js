'use strict';
import React, {useState} from 'react'
import _ from 'lodash';
export default function Sorting_Dropdown({taskList, setTaskList, taskListGroup, setTaskListGroup, groupSet, onlyShowGroup, isOnlyShowGroup, setIsOnlyShowGroup}) {
    const [showCurrentGroup, setShowCurrentGroup] = useState(false);
    const [showGroupDelete, setShowGroupDelete] = useState(false);
    
    function clickCurrentGroupDropdown() {
        if (showCurrentGroup === false) {
            setShowCurrentGroup(true);
        } else {
            setShowCurrentGroup(false);
        }
    }

    function clickGroupDeleteDropdown() {
        if (showGroupDelete === false) {
            setShowGroupDelete(true);
        } else {
            setShowGroupDelete(false);
        }
    }
    
    function HandleGroupSorting(event, group){
        if(event.target.checked) {
            setIsOnlyShowGroup(true);
            setTaskListGroup(onlyShowGroup(group));
        } else {
            setIsOnlyShowGroup(false);
        }
        
    }

    return (
        <div>
            <div className="group-dropdown">
                <button className="dropbtn" onClick={clickCurrentGroupDropdown}>Groups</button>
                {showCurrentGroup === true && (
                    <div>
                        {Array.from(groupSet).map((group) => (
                            <div>
                                <input
                                    type="checkbox"
                                    id="cat-check-box"
                                    name="cat-check-box"
                                    onClick={(event) => HandleGroupSorting(event, group)}
                                />
                                <label htmlFor="GroupInput">{group}</label>
                            </div>
                        ))}
                        <br />
                    </div>
                )}
            </div>
            <div className="delete-group-dropdown">
                <button className="dropbtn" onClick={clickGroupDeleteDropdown}>Delete Group</button>
                {showGroupDelete === true && (
                    <div>
                        {Array.from(groupSet).map((group) => (
                            <div>
                                <input
                                    type="checkbox"
                                    id="cat-check-box"
                                    name="cat-check-box"
                                    onClick={() => {
                                        groupSet.delete(group);
                                        taskList.map((task) => {
                                            if (task.group === group) {
                                                task.group = null;
                                            }
                                        })
                                    }}
                                />
                                <label htmlFor="GroupInput">{group}</label>
                            </div>
                        ))}
                        <br />
                    </div>
                )}
            </div>
        </div>
    );
}