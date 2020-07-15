import React from 'react';

function PetBasics() {


return(
<div className="container">
    <div className="nav-bar">
        <h5>Pet Basics</h5>
    </div>
    <div className="form">
        <h2>Yay, we love dogs! Give us the basics about your pup.</h2>

        <div className="form-input">
            <div className="info2">
                <div className="input-sec2">
                    <label>Name</label>
                    <input type="text"></input>
                </div>

            </div>


            <div className="info2">
                <div className="input-sec">
                    <label>Breed</label>
                    <input type="text"></input>
                </div>

                <div className="input-sec">
                    <label>Birthday</label>
                    <input type="text"></input>
                </div>
            </div>

            <div className="info2">
                <div className="input-sec">
                    <label>Gender</label>
                    <input type="text"></input>
                </div>

                <div className="input-sec">
                    <label>Spayed or Neutered</label>
                    <input type="text"></input>
                </div>

            </div>






        </div>


        <div className="wrapper">
            <div className="toggle_radio">
                <input type="radio" className="toggle_option" id="first_toggle" name="toggle_option"></input>

                <input type="radio" className="toggle_option" id="second_toggle" name="toggle_option"></input>

                <input type="radio" className="toggle_option" id="third_toggle" name="toggle_option"></input>

                <input type="radio" className="toggle_option" id="fourth_toggle" name="toggle_option"></input>

                <label for="first_toggle"><p>0-25 lbs</p></label>
                <label for="second_toggle"><p>25-50 lbs</p></label>
                <label for="third_toggle"><p>50-75 lbs</p></label>
                <label for="fourth_toggle"><p>100 lbs</p></label>
                <div className="toggle_option_slider"></div>
            </div>
        </div>
    </div>
</div>
)
}

export default PetBasics;