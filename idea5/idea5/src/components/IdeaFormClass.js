import React, { Component } from 'react'

export default class IdeaFormClass extends Component {
    constructor() {
        super ()
        this.state = {
            fullName: '',
            ideaDescription: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.changeName(this.state.fullName, this.state.ideaDescription)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        onChange={this.handleChange}
                        />
                    <input
                        type="text"
                        name="ideaDescription"
                        onChange={this.handleChange}
                        />
                    <input type="submit" value="What's Your Idea?"/>
                </form>
            </div>
        )
    }
}