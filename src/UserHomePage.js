import React from 'react'
import {connect} from 'react-redux'
import CourseContainer from './CourseContainer'
import {Link} from 'react-router-dom'
import {Animated} from 'react-animated-css'
import {MDBContainer, MDBJumbotron, MDBBtn} from "mdbreact";
import "./Login.css"

function UserHomePage(props) {
    // console.log(props)
    // console.log(props.currentUser.courses)
    return (
        <div>
            <MDBJumbotron fluid className={"headercurso"}>
                <MDBContainer>
                    <Animated animationIn="fadeInRight" animationInDuration={2000} animationOut="fadeOut"
                              isVisible={true}>
                        <div className="row">
                            {
                                props.currentUser.position === 'teacher' ?
                                    <div className="col-12"><h1>Classes You're Teaching</h1></div>
                                    :
                                    <React.Fragment>
                                            <div className="col-6"><h1>Classes You Are Enrolled In</h1></div>
                                            <div className="col-6 right"><Link to="/registerCourse">
                                                <MDBBtn gradient="blue">Register for a Course</MDBBtn>
                                            </Link></div>
                                    </React.Fragment>
                            }
                        </div>
                    </Animated>
                </MDBContainer>
            </MDBJumbotron>

            <CourseContainer courses={props.currentUser.courses}/>
            {/* <CourseContainer courses={props.currentUserCourses}/> */}
        </div>
    )
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        currentUser: state.currentUser,
        // currentUserCourses: state.currentUserCourses
    }
}

// function mapDispatchToProps(dispatch){
//     return{
//         // logOutUser: () => {
//         //     localStorage.clear();
//         //     dispatch({type: "LOG_OUT"})
//         // } 
//     }
// }
export default connect(mapStateToProps)(UserHomePage)
