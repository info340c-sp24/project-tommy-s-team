'use strict';
import React, {useState} from 'react'
import _ from 'lodash';
export default function Sorting_Dropdown({taskList, setTaskList, taskListGroup, setTaskListGroup, groupSet, onlyShowGroup, isOnlyShowGroup, setIsOnlyShowGroup}) {
    const [show, setShow] = useState(false);
    
    function clickDropdown() {
        if (show === false) {
            setShow(true);
        } else {
            setShow(false);
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
        <div className="dropdown">
            <button className="dropbtn" onClick={clickDropdown}>Categories</button>
            {show === true && (
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
    );
}