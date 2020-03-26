import React, { Component } from 'react'
import IdeaFormClass from "./IdeaFormClass"

class IdeaClass extends Component {
    constructor () {
        super()
        this.state = {
            fullName: '',
            ideaDescription: ''
        }
    }

    changeName = (fullName, ideaDescription) => {
        this.setState({
            fullName: fullName,
            ideaDescription: ideaDescription
        })
    }

    render() {
        return(
            <div>
                {this.state.fullName}
                {this.state.ideaDescription}
                <IdeaFormClass changeName={this.changeName} />
            </div>
        )
    }
}

export default IdeaClass;