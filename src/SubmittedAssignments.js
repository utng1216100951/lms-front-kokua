import React, {Component, Fragment} from 'react'
import GradingComponent from './GradingComponent'
import {MDBCardBody, MDBCardTitle, MDBCol, MDBContainer, MDBFreeBird, MDBJumbotron, MDBRow} from "mdbreact";
import {Animated} from "react-animated-css";
import {connect} from 'react-redux'

const containerStyle = {
    border: "2px solid black",
    borderRadius: "10px",
    overflow: "hidden"
}


class SubmittedAssignments extends Component {

    state = {
        currentSubmissionView: '',
        // grade: 0,
        loaded: false
    }

    handleSubmitGrade = () => {
        // let percentage_grade =  (this.state.grade / (this.props.currentAssignment.problems.length * 10)) * 100 //each answer is worth 10 points max
        const token = localStorage.getItem("token")
        fetch(`https://lmskokua.herokuapp.com/api/v1/submissions/${this.state.currentSubmissionView}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                // grade: percentage_grade
                id: this.state.currentSubmissionView
            })
        })
            .then(resp => resp.json())
            .then(data => {
                // console.log(data)
                this.props.updateSubmission(data)
                this.setState({
                    currentSubmissionView: ''
                })

            })
    }

    componentDidMount = () => {
        const course_id = this.props.location.pathname.split("/")[2]
        const assignment_id = this.props.location.pathname.split("/")[4]
        // console.log(assignment_id)
        const token = localStorage.getItem("token")
        fetch(`https://lmskokua.herokuapp.com/api/v1/courses/${course_id}/assignments/${assignment_id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(resp => resp.json())
            .then(data => {
                // console.log(data)
                this.props.setAssignment(data)
                this.setState({
                    loaded: true
                })
            })
    }

    handleAssignmentClick = (id) => {
        // console.log(id)
        this.setState({
            currentView: id
        })
        if (id === this.state.currentSubmissionView) {
            this.setState({
                currentSubmissionView: ''
            })
        } else {
            this.setState({
                currentSubmissionView: id
            })
        }
    }

    checkGradeColor = (grade) => {

        if (grade > 89 && grade <= 100) {
            return "green"
        } else if (grade > 79 && grade <= 89) {
            return "blue"
        } else if (grade > 69 && grade <= 79) {
            return "gold"
        } else {
            return "red"
        }
    }

    render() {

        return (
            <div>
                <MDBJumbotron fluid className={"headercurso"}>
                    <MDBContainer>
                        <Animated animationIn="fadeInRight" animationInDuration={2000} animationOut="fadeOut"
                                  isVisible={true}>
                            <div className="row">

                            </div>
                        </Animated>
                    </MDBContainer>
                </MDBJumbotron>
                <MDBFreeBird>
                    <MDBRow>
                        <MDBCol size="4" className=" float-none white z-depth-1 py-2 px-2 left ">
                            <MDBCardBody>
                                <MDBCardTitle>Submitted Assignments</MDBCardTitle>
                                <p className="pb-4">Example of Material Design Form</p>
                                <div className="six wide column">
                                    <div className="ui container">
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            alignItems: "center"
                                        }}>


                                        </div>
                                        {
                                            this.state.loaded ?
                                                <Fragment>
                                                    {
                                                        this.props.currentAssignment.submissions.length !== 0 ?

                                                            this.props.currentAssignment.submissions.map(submission => {
                                                                return <div key={submission.id} className="ui segment">
                                                                    <h4>From: {submission.student.first_name}</h4>

                                                                    <button className="ui yellow button"
                                                                            onClick={() => {
                                                                                this.handleAssignmentClick(submission.id)
                                                                            }}>View
                                                                    </button>
                                                                    {
                                                                        submission.created_at !== submission.updated_at ?
                                                                            <Fragment>
                                                                                <h4>Grade Assigned: </h4>
                                                                                {/* <span style={this.checkGradeColor(submission.grade_assigned)}>{submission.grade_assigned}</span> %</h4> */}
                                                                                <div
                                                                                    className="ui indicating progress stats"
                                                                                    data-percent={submission.grade_assigned}>
                                                                                    {/* <div className="bar" style={{width: `${submission.grade_assigned}%`}}> */}
                                                                                    <div className="bar" style={{
                                                                                        width: `${submission.grade_assigned}%`,
                                                                                        backgroundColor: this.checkGradeColor(submission.grade_assigned)
                                                                                    }}>
                                                                                        <div
                                                                                            className="progress">{submission.grade_assigned}%
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                {/* <h4>Percentage: {(submission.grade_assigned / (submission.answers.length * 10)) * 100} %</h4> */}
                                                                            </Fragment>
                                                                            :
                                                                            null
                                                                    }
                                                                </div>
                                                            })
                                                            :
                                                            <div className="ui segment">
                                                                <h1>No submissions yet!</h1>
                                                            </div>
                                                    }
                                                </Fragment>

                                                :
                                                <div className="ui segment">
                                                    <div className="ui active inverted dimmer">
                                                        <div className="ui small text loader">Loading</div>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol size="7" className="mx-auto float-none white z-depth-1 py-2 px-2 right">
                            <MDBCardBody>
                                <MDBCardTitle>Select a Submission to View</MDBCardTitle>
                                <p className="pb-4">Example of Material Design Form</p>

                                <div className="ten wide column">
                                    <div>
                                        {
                                            this.state.currentSubmissionView ?
                                                <Fragment>
                                                    <button onClick={this.handleSubmitGrade}
                                                            className="ui green button">Submit
                                                        Grade
                                                    </button>
                                                    {
                                                        this.props.currentAssignment.submissions.map(submission => {
                                                            if (submission.id === this.state.currentSubmissionView) {
                                                                return <Fragment key={submission.id}>
                                                                    {/* <h1>{submission.assignment.due_date}</h1> */}
                                                                    {/* <h1>{submission.created_at}</h1> */}
                                                                    {
                                                                        submission.assignment.due_date < submission.created_at ?
                                                                            <h4 style={{color: "red"}}>ALERT: Late
                                                                                Submission</h4>
                                                                            :
                                                                            //    <h1>Not late</h1>
                                                                            null
                                                                    }
                                                                    {
                                                                        submission.answers.map(answer => {
                                                                            return <GradingComponent key={answer.id}
                                                                                                     addTallyToGrade={this.addTallyToGrade}
                                                                                                     answer={answer}
                                                                                                     currentAssignment={this.props.currentAssignment}
                                                                                                     submission={submission}/>

                                                                        })
                                                                    }
                                                                </Fragment>
                                                            } else {
                                                                return null
                                                            }
                                                        })
                                                    }
                                                </Fragment>
                                                :
                                                <Fragment>
                                                    <iframe src="https://giphy.com/embed/xl3Biy7X0kRlzlQBx4" width="480"
                                                            height="270" frameBorder="0" className="giphy-embed"
                                                            allowFullScreen/>
                                                    <p><a
                                                        href="https://giphy.com/gifs/ramseysolutions-whatever-xl3Biy7X0kRlzlQBx4">via
                                                        GIPHY</a></p>
                                                </Fragment>

                                        }

                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBFreeBird>
            </div>
    )
    }
    }

    function mapStateToProps(state) {
        return {
        currentAssignment: state.currentAssignment
    }
    }

    function mapDispatchToProps(dispatch) {
        return {
        setAssignment: (assignmentObj) => {
        dispatch({type: "SET_ASSIGNMENT", payload: assignmentObj})
    },
        updateSubmission: (submissionObj) => {
        dispatch({type: "UPDATE_SUBMISSION_IN_CURRENT_ASSIGNMENT", payload: submissionObj})
    }
    }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(SubmittedAssignments)
