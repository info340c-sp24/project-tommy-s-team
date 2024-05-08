import React from 'react'

export default function sorting() {
    return (
        <div class="menu"> 
                <table>
                    <tbody>
                        <div class="sort-box">
                            <tr>
                                <td>
                                    <input type="checkbox" id="sort-check-box" name="sort-check-box" />
                                    <label for="sort-check-box" class="task-detail">Date</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" id="sort-check-box" name="sort-check-box" />
                                    <label for="sort-check-box" class="task-detail">Priority Level</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" id="sort-check-box" name="sort-check-box" />
                                    <label for="sort-check-box" class="task-detail">Name</label>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            Categories
                                        </button>
                                        <div class="dropdown-menu">
                                            <input type="checkbox" id="cat-check-box" name="cat-check-box" />
                                            <label for="taskInput">Category 1</label>
                                            <br />
                                            <input type="checkbox" id="cat-check-box" name="cat-check-box" />
                                            <label for="taskInput">Category 2</label>
                                            <br />
                                            <input type="checkbox" id="cat-check-box" name="cat-check-box" />
                                            <label for="taskInput">Category 3</label>
                                            <br />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </div>
                    </tbody>
                </table>
            </div>

    )
}