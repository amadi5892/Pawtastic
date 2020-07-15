import React from 'react';

function PetBasics() {


    return(
        <div className="container">
            <div className="nav-bar">
                <h5 >Pet Basics</h5>
            </div>
            <div className="form">
                <h2>Yay, we love dogs! Give us the basics about your pup.</h2>
                <label>Name</label>
                <input type="text" ></input>
                <label>Name</label>
                <input type="text" ></input>
                <label>Name</label>
                <input type="text" ></input>
                <label>Name</label>
                <input type="text" ></input>
                <label>Name</label>
                <input type="text" ></input>
                {/* <div className="button-box">
                    <div id="btn"></div>
                    <button type="button" className="toggle-btn">Log In</button>
                    <button type="button" className="toggle-btn">Register</button>
                </div> */}
                <div className="switch-toggle switch-candy">
                    <input id="week" name="view" type="radio" checked></input>
                    <label  for="week" onclick="">Week</label>

                    <input id="month" name="view" type="radio"></input>
                    <label  for="month" onclick="">Month</label>

                    <input id="day" name="view" type="radio"></input>
                    <label  for="day" onclick="">Day</label>

                    <span className="slider"></span>
                </div>
            </div>
        </div>
    )
}

export default PetBasics;