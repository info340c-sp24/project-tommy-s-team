import React, {useState} from 'react'

export default function Sorting_Dropdown() {
    const [show, setShow] = useState(false);
    function clickDropdown() {
        if (show === false) {
            setShow(true);
        } else {
            setShow(false);
        }
    }
    return (
        <div class="dropdown">
            <button class="dropbtn" onClick={clickDropdown}>
                Categories
            </button>
            {show === true && (
                <div>
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
            )}
            
        </div>
    )
}