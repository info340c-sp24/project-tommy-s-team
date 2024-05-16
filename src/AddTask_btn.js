import React, {useState} from 'react'
import Add_page from './Add_page'
export default function AddTask_btn({taskList, setTaskList, GetIncompletedTask}) {
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
            <button onClick={handleClick} style={{ fontSize: '14px'}} id="add-task-btn" ><i className='fas fa-plus'></i> Add Task</button>
            {popup && <div> <Add_page taskList = {taskList} setTaskList={setTaskList} GetIncompletedTask={GetIncompletedTask}/> </div>}
        </div>
    );
}