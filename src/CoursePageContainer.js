import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AnnouncementCard from './AnnouncementCard'
import Assignment from './Assignment'
import NewAnnouncementForm from './NewAnnouncementForm'
import EditAnnouncementForm from './EditAnnouncementForm'
import AssignmentProblemComponent from './AssignmentProblemsComponent'
import {Animated} from "react-animated-css";
import {MDBCardBody, MDBCardTitle, MDBCol, MDBContainer, MDBFreeBird, MDBJumbotron, MDBRow, MDBIcon} from "mdbreact";
// import NewProblemsComponent from './NewProblemsComponent'

const containerStyle = {
    border: "2px solid black",
    borderRadius: "10px",
    overflow: "hidden"

}

class CoursePageContainer extends Component {
    // currentPath = this.props.history.location.pathname
    //once here. a separate fetch MUST be made to course model.
    state = {
        editAssignmentId: '',
        assignmentObject: {},
        currentView: ''
    }

    handleAssignmentClick = (assignment) => {
        // console.log(assignment)
        if (this.state.currentView === "assignments" && assignment.id === this.state.assignmentObject.id) {
            this.setState({
                currentView: ''
            })
        } else {
            this.setState({
                assignmentObject: assignment,
                currentView: 'assignments'
            })
        }
    }
    url = this.props.history.location.pathname.split("/")
    componentDidMount = () => {

        const token = localStorage.getItem("token")
        // let url = this.props.history.location.pathname.split("/")
        // console.log(url[url.length-1])
        fetch(`https://lmskokua.herokuapp.com/api/v1/courses/${this.url[this.url.length - 1]}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(resp => resp.json())
            .then(data => {
                this.props.setCourse(data)
                // console.log(data)
            })
    }
    handleOnClick = (category) => {
        this.setState({
            currentView: category
        })
        this.renderView()
    }

    handleEditClick = (id) => {
        // console.log(id)
        this.setState({
            editAssignmentId: id
        })
    }

    sortAnnouncementsByRecent = (announcements) => {
        // console.log(announcements)
        announcements.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1)
        return announcements
    }

    render() {
        // let url = this.props.history.location.pathname.split("/")
        // console.log(url[url.length-1])
        // console.log(this.state.assignmentObject)
        // console.log(this.props.currentCourse)
        // console.log(this.props.course.announcements)
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
                                <MDBCardTitle>Asignaciones</MDBCardTitle>
                                <p className="pb-4">Apartado para asignar preguntas sobre tus cursos</p>
                                <div className="six wide column">
                                    <div className="ui container">
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            alignItems: "center"
                                        }}>
                                            {
                                                Object.keys(this.props.currentUser).length !== 0 && this.props.currentUser.position === "teacher" ?
                                                    <Link style={{color: 'black'}}
                                                          to={`${this.props.location.pathname}/assignments/new`}>

                                                    <span data-tooltip="Nueva asignaci'on" data-position="bottom right">
                                                       <MDBIcon size={"2x"} icon="plus-circle" />
                                                    </span>
                                                    </Link>
                                                    :
                                                    null
                                            }
                                        </div>
                                        {/* <h1>Assignments</h1> */}
                                        {
                                            this.props.course.assignments !== undefined ?
                                                // null
                                                this.props.course.assignments.length === 0 ?
                                                    <div className="ui segment">
                                                        <h2>No Assignments Yet!</h2>
                                                    </div>
                                                    :
                                                    this.props.course.assignments.map(assignment => {
                                                        return <Assignment handleProblemClick={this.handleProblemClick}
                                                                           handleAssignmentClick={this.handleAssignmentClick}
                                                                           handleEditClick={this.handleEditClick}
                                                                           key={assignment.id}
                                                                           url={this.url[this.url.length - 1]}
                                                                           assignment={assignment}/>
                                                    })
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol size="7" className="mx-auto float-none white z-depth-1 py-2 px-2 right">
                            <MDBCardBody>
                                <MDBCardTitle>Clases</MDBCardTitle>
                                <p className="pb-4">Aprende de los mejores</p>
                                <div className="ten wide column">
                                    <div>

                                        {this.state.currentView ?

                                            <AssignmentProblemComponent assignmentObject={this.state.assignmentObject}/>
                                            :
                                            <Fragment>
                                                {
                                                    Object.keys(this.props.currentUser).length !== 0 && this.props.currentUser.position === "teacher" ?
                                                        <NewAnnouncementForm url={this.url[this.url.length - 1]}/>
                                                        :
                                                        null
                                                }

                                                {
                                                    this.props.course.announcements !== undefined ?
                                                        this.props.course.announcements.length === 0 ?
                                                            <div className="ui segment">
                                                                <h2>No Announcements Yet!</h2>
                                                            </div>

                                                            :
                                                            this.sortAnnouncementsByRecent(this.props.course.announcements).map(announcement => {
                                                                if (announcement.id === this.state.editAssignmentId) {
                                                                    return <EditAnnouncementForm key={announcement.id}
                                                                                                 url={this.url[this.url.length - 1]}
                                                                                                 handleEditClick={this.handleEditClick}
                                                                                                 announcement={announcement}/>
                                                                } else {
                                                                    return <AnnouncementCard
                                                                        handleEditClick={this.handleEditClick}
                                                                        key={announcement.id}
                                                                        url={this.url[this.url.length - 1]}
                                                                        announcement={announcement}/>
                                                                }
                                                            })
                                                        :
                                                        <div className="ui segment">
                                                            <div className="ui active inverted dimmer">
                                                                <div className="ui large text loader">Cargando</div>
                                                            </div>
                                                        </div>
                                                }
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
        // currentUserCourses: state.currentUserCourses
        course: state.currentCourse,
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setCourse: (courseObj) => {
            dispatch({type: "SET_COURSE", payload: courseObj})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePageContainer)
