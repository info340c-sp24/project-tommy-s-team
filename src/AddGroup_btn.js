import React, { useState } from 'react';
import Grouping from './Grouping'; 
import './index.css';

const AddGroupBtn = ({ taskList, setTaskList, groupSet, setGroupSet, uid}) => {
    const [showGrouping, setShowGrouping] = useState(false);

    const handleButtonClick = () => {
        setShowGrouping(true);
    };

    const handleClose = () => {
        setShowGrouping(false);
    };

    return (
        <div className='AddGroup-btn'>
            <button onClick={handleButtonClick} className="add-group-btn">
                Add Group
            </button>
            {showGrouping && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleClose}>&times;</span>
                        <Grouping taskList={taskList} setTaskList={setTaskList} groupSet={groupSet} setGroupSet={setGroupSet} uid={uid}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddGroupBtn;
