import React from 'react'
import Sorting_Dropdown from './Sorting_Dropdown'
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
                                <Sorting_Dropdown />
                        </div>
                    </tbody>
                </table>
            </div>

    )
}