import React, { Component } from 'react'
import './signUp.css'
import Footer from '../footer/Footer'



export class SignUp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            firstName:"",
            lastName:"",
            password:"",
            cnfPassword:"",
            userName: "",
            email: "",
            gender: "",
            dob:""
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert(this.state.heading);
        this.setState({
            heading: "",
             content: "",
             tag: ""
        })
        event.preventDefault();
    }
   
    render() {
        return (
            <>
            <div className="mainbody py-2">
                <form onSubmit = {() => this.handleSubmit()} autoComplete='off'>
                   
                    <div className='container border border-danger rounded signin py-4 px-4'>
                    <h2>SIGNUP Here</h2>
                        <div className='row'>
                            <div className="col-6">
                                <label>First Name:</label>
                                <input type="text" name="firstName" value = {this.state.firstName} onChange = {this.handleInputChange}/>
                            </div>
                            <div className="col-6">
                                <label>Last Name:</label>
                                <input type="text" name="lastName" value = {this.state.lastName} onChange = {this.handleInputChange}/>
                                
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col-6">
                                <label>User Name:</label>
                                <input type="text" name="userName" value = {this.state.userName} onChange = {this.handleInputChange}/>
                                
                        
                            </div>

                            <div className="col-3">
                               <label className='pb-2'>Date of Birth:</label>
                               <br/>
                           
                               <input  name="dob"  type="date" 
                                disabled={ this.state.mode } 
                                value={ (this.state.dob) } 
                                className="form-control"  onChange={ this.handleInputChange } />
                            </div>

                            <div className="col-3">
                                <label className='pb-2'>Gender:</label>
                                <br/>
                                
                                <div className='row'>
                                    <div className='col-3'>
                                    <select value={this.state.gender} onChange={this.handleInputChange}>
                                    <option  value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option  value="other">other</option>
                                   
                                    </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col">
                                <label>Email:</label>
                                <input type="text" name="email" value = {this.state.email} onChange = {this.handleInputChange}/>
                                
                            </div>   
                        </div>
                        
                        <div className='row'>
                            <div className="col-6">
                                <label>Password:</label>
                                <input type="text" name="password" value = {this.state.password} onChange = {this.handleInputChange}/>
                         
                            </div>
                            <div className="col-6">
                                <label>confirm Password:</label>
                                <input type="text" name="cnfPassword" value = {this.state.cnfPassword} onChange = {this.handleInputChange}/>
                                
                            </div>
                        </div>
                         
                        <div className='row'>
                            <div className="col-6">
                                <label>Click Here To Submit </label>
                                <input type = "submit" value = "Submit" />
                            </div>
                        </div>
                    </div>
                </form> 
                </div>
                <Footer/>
            </>
        )
    }
}

export default SignUp
