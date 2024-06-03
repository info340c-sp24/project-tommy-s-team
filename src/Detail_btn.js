import React, {useState} from 'react'
import Detail from './Detail';
export default function Detail_btn({taskList, setTaskList, isOnlyShowGroup, taskListGroup, setTaskListGroup, isOnlyShowSearch, taskListSearch, setTaskListSearch, task}) {
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
            <button onClick={handleClick} style={{ fontSize: '14px'}} id="detail-btn" ><i className='fas fa-plus'></i> Detail</button>
            {popup && <div> <Detail taskList = {taskList} setTaskList={setTaskList} isOnlyShowGroup={isOnlyShowGroup} taskListGroup={taskListGroup} setTaskListGroup={setTaskListGroup} isOnlyShowSearch={isOnlyShowSearch} taskListSearch={taskListSearch} setTaskListSearch={setTaskListSearch} task={task} setPopup={setPopup} /> </div>}
        </div>
    );
}