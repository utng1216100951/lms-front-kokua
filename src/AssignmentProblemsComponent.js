import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import NewProblemsComponent from './NewProblemsComponent'
import SubmissionComponent from './SubmissionComponent'

class AssignmentProblemsComponent extends Component {
    render() {
        const { name} = this.props.assignmentObject;
        return (
            <div>
                <h2>{name}</h2>
                {
                    Object.keys(this.props.currentUser).length !== 0 && this.props.currentUser.position === "teacher" ?
                    <NewProblemsComponent assignmentObject={this.props.assignmentObject}/>
                    :
                    <SubmissionComponent currentUser={this.props.currentUser} assignmentObject={this.props.assignmentObject}/>
                }
                <br></br>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(AssignmentProblemsComponent)
