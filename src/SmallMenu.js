import React, {useState} from 'react'
import SearchBar from './SearchBar'
import Sorting from './Sorting'

export default function SmallMenu({taskList, setTaskList}) { 
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
                <SearchBar />
                <form action="https://info340c-sp24.github.io/project-tommy-s-team/group.html" method="get" className="CateForm"><button style={{ fontSize: '14px' }} id="Categorization"><i className='fas fa-plus'></i> Categorization</button></form>
                <Sorting taskList = {taskList} setTaskList={setTaskList}/>
            </div>
            )}
        </div>
    )
}