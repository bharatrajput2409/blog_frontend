import React, { Component } from 'react'
import './login.css'
import Footer from '../footer/Footer'



export class login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
            password:"",
            
            userName: "",
           
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
                    <h2>LOGIN Here</h2>
                        
                        <div className='row'>
                            <div className="col">
                                <label>User Name:</label>
                                <input type="text" name="userName" value = {this.state.userName} onChange = {this.handleInputChange}/>
                                
                        
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col">
                                <label>Password:</label>
                                <input type="text" name="password" value = {this.state.password} onChange = {this.handleInputChange}/>
                                
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

export default login
