'use strict';
import React, {useState} from 'react'
import SearchBar from './SearchBar'
import Sorting from './Sorting'
import Todo from './Todo'
import Grouping from './Grouping';
import Taskmanager from './Taskmanager';
import SmallMenu from './SmallMenu';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  return (
      <div>
          <header>
            <h1>Todo List</h1>
            <nav><a href="#" className="username-link"><img src={require('./img/user.jpg')} alt="an user icon" /></a></nav>
          </header>
          <SmallMenu taskList = {taskList} setTaskList={setTaskList}/>
          <div className="flex-container">
            <SearchBar />
            <form action="https://info340c-sp24.github.io/project-tommy-s-team/group.html" method="get" className="CateForm"><button style={{ fontSize: '14px' }} id="Categorization"><i className='fas fa-plus'></i> Categorization</button></form>
            <div className="menu"> 
              <div className="sort-box">
                <Sorting taskList = {taskList} setTaskList={setTaskList}/>
              </div>
            </div>
            <Todo taskList = {taskList} setTaskList={setTaskList}/>
          </div>
          <footer>
            <p>&copy; Info 340 Project <img src={require('./img/todo.gif')} alt="a gif showing a todo list" /></p>
          </footer>
      </div>
  )
}