'use strict';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import Sorting from './Sorting';
import Todo from './Todo';
import Grouping from './Grouping';
import SmallMenu from './SmallMenu';
import Login from './Login';
import Signup from './Signup';

export default function App() {
    const [taskList, setTaskList] = useState([]);
    console.log(taskList);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/todo" element={
                    <div>
                        <header>
                            <h1>Todo List</h1>
                            <nav><a href="#" className="username-link"><img src={require('./img/user.jpg')} alt="an user icon" /></a></nav>
                        </header>
                        <SmallMenu taskList={taskList} setTaskList={setTaskList} />
                        <div className="flex-container">
                            <SearchBar />
                            <div className="menu">
                                <div className="sort-box">
                                    <Sorting taskList={taskList} setTaskList={setTaskList} />
                                </div>
                            </div>
                            <Todo taskList={taskList} setTaskList={setTaskList} />
                        </div>
                        <footer>
                            <p>&copy; Info 340 Project <img src={require('./img/todo.gif')} alt="a gif showing a todo list" /></p>
                        </footer>
                    </div>
                } />
            </Routes>
        </Router>
    );
}
