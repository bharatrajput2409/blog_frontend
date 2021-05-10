import React, { Component } from 'react'
import './writeBlog.css'


export class writeBlog extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             heading: "",
             content: "",
             tag: ""
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
                <form onSubmit = {() => this.handleSubmit()} autoComplete='off'>
                <label>
                    Heading:
                    <input type="text" name="heading" value = {this.state.heading} onChange = {this.handleInputChange}/>
                </label>
                <br />
                <label>
                    Content:
                    <textarea type="text" name="content" value = {this.state.content} onChange = {this.handleInputChange}/>
                </label>
                <br />
                <label>    
                    Tags:
                    <input type="text" name="tag" value = {this.state.tag} onChange = {this.handleInputChange}/>
                </label>
                <br />
                <label>
                    <input type = "submit" value = "Submit" />
                </label>
                </form> 
            </>
        )
    }
}

export default writeBlog
