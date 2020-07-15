import React from 'react';

class PetBasics extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            breed: '',
            birthday: '',
            gender: '',
            neutered: '',
            formCompleted: false
        }
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onBreedChange = (event) => {
        this.setState({
            breed: event.target.value
        })
    }

    onBirthdayChange = (event) => {
        this.setState({
            birthday: event.target.value
        })
    }

    onGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    onNeuteredChange = (event) => {
        this.setState({
            neutered: event.target.value
        })
    }

    handleFormSubmission = (e) => {
        e.preventDefault()
        this.setState({
            formCompleted: true
        })
        console.log("Form Submitted")
    }

render() {
return(
<div className="container">
    <div className="nav-bar">
        <div className="logo">
            <iframe className="fas fa-paw circle-icon"></iframe>
            <h4>Pawtastic</h4>
        </div>

        <h5>Pet Basics</h5>
    </div>
    <div className="form">
        <h2 className="header">Yay, we love dogs! Give us the basics about your pup.</h2>

        <div className="form-input">
            <div className="info2">
                <div className="input-sec2">
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.onNameChange}></input>
                </div>
                
            </div>


            <div className="info2">
                <div className="input-sec">
                    <label>Breed</label>
                    <input type="text" name="breed" value={this.state.breed} onChange={this.onBreedChange}></input>
                </div>

                <div className="input-sec">
                    <label>Birthday</label>
                    <input type="text" name="birthday" value={this.state.birthday} onChange={this.onBirthdayChange}></input>
                </div>
            </div>

            <div className="info2">
                <div className="input-sec">
                    <label>Gender</label>
                    <input type="text" name="gender" value={this.state.gender} onChange={this.onGenderChange}></input>
                </div>

                <div className="input-sec">
                    <label>Spayed or Neutered</label>
                    <input type="text" name="neutered" value={this.state.neutered} onChange={this.state.onNeuteredChagne}></input>
                </div>

            </div>

        </div>


        <div className="wrapper">
            <div className="toggle_radio">
                <input type="radio" className="toggle_option" id="first_toggle" name="toggle_option"></input>

                <input type="radio" className="toggle_option" id="second_toggle" name="toggle_option"></input>

                <input type="radio" className="toggle_option" id="third_toggle" name="toggle_option"></input>

                <input type="radio" className="toggle_option" id="fourth_toggle" name="toggle_option"></input>

                <label for="first_toggle">
                    <p>0-25 lbs</p>
                </label>
                <label for="second_toggle">
                    <p>25-50 lbs</p>
                </label>
                <label for="third_toggle">
                    <p>50-75 lbs</p>
                </label>
                <label for="fourth_toggle">
                    <p>100 lbs</p>
                </label>
                <div className="toggle_option_slider"></div>
            </div>
        </div>
        <div>
            <button className="submit" type="submit" onClick={this.handleFormSubmission}>Submit</button>
            {this.state.formCompleted === true ? (<h2 className="sub-msg">Thanks! We'll see you soon!</h2>) : null}
        </div>
    </div>
</div>
)
}
}

export default PetBasics;