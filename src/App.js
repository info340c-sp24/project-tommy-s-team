'use strict';
import React, {useState} from 'react'
import SearchBar from './SearchBar'
import Sorting from './Sorting'
import Todo from './Todo'
import Grouping from './Grouping';
import SmallMenu from './SmallMenu';



export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskListGroup, setTaskListGroup] = useState([]);
  const [taskListSearch, setTaskListSearch] = useState([]);
  const [groupSet, setGroupSet] = useState(new Set([]));
  const [isOnlyShowGroup, setIsOnlyShowGroup] = useState(false);
  const [isOnlyShowSearch, setIsOnlyShowSearch] = useState(false);
  function onlyShowGroup(groupName) {
    return taskList.filter((task) => {
      return task.group === groupName;
    });
  }

  function onlyShowSearch(SearchContent) {
    return taskList.filter((task) => {
      return task.TaskName === SearchContent;
    });
  }
  
  console.log(taskList);
  return (
      <div>
          <header>
            <h1>Todo List</h1>
            <nav><a href="#" className="username-link"><img src={require('./img/user.jpg')} alt="an user icon" /></a></nav>
          </header>
          <SmallMenu taskList = {taskList} setTaskList={setTaskList} taskListGroup={taskListGroup} setTaskListGroup={setTaskListGroup} groupSet={groupSet} onlyShowGroup={onlyShowGroup} isOnlyShowGroup={isOnlyShowGroup} setIsOnlyShowGroup={setIsOnlyShowGroup}/>
          <div className="flex-container">
            <SearchBar taskList = {taskList} setTaskList={setTaskList} onlyShowSearch={onlyShowSearch} isOnlyShowSearch={isOnlyShowSearch} setIsOnlyShowSearch={setIsOnlyShowSearch} setTaskListSearch={setTaskListSearch}/>
            {/* <form action="https://info340c-sp24.github.io/project-tommy-s-team/group.html" method="get" className="CateForm"><button style={{ fontSize: '14px' }} id="Categorization"><i className='fas fa-plus'></i> Categorization</button></form> */}
            <div className="menu"> 
              <div className="sort-box">
                <Sorting taskList = {taskList} setTaskList={setTaskList} taskListGroup={taskListGroup} setTaskListGroup={setTaskListGroup} groupSet={groupSet} onlyShowGroup={onlyShowGroup} isOnlyShowGroup={isOnlyShowGroup} setIsOnlyShowGroup={setIsOnlyShowGroup}/>
              </div>
            </div>
            <Todo taskList = {taskList} setTaskList={setTaskList} groupSet={groupSet} setGroupSet={setGroupSet} isOnlyShowGroup={isOnlyShowGroup} taskListGroup={taskListGroup} setTaskListGroup={setTaskListGroup} isOnlyShowSearch={isOnlyShowSearch} taskListSearch={taskListSearch} setTaskListSearch={setTaskListSearch}/>
            
          </div>
          <footer>
            <p>&copy; Info 340 Project <img src={require('./img/todo.gif')} alt="a gif showing a todo list" /></p>
          </footer>
      </div>
  );
}