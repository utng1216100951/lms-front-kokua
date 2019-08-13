import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Confirm} from 'semantic-ui-react'
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol,MDBIcon} from 'mdbreact';


function CourseCard(props) {
    // console.log(props.course.id)
    const token = localStorage.getItem("token")

    const [open, setOpen] = useState(false)
    const [openStudent, setOpenStudent] = useState(false)

    function show() {
        setOpen(true)
    }

    function handleConfirm(id) {
        handleOnClick()
        setOpen(false)
    }

    function handleCancel() {
        setOpen(false)
    }

    function studentShow() {
        setOpenStudent(true)
    }

    function studentHandleConfirm(id) {
        handleStudentClick()
        setOpenStudent(false)
    }

    function studentHandleCancel() {
        setOpenStudent(false)
    }

    function handleOnClick() {
        // console.log(props.course.id)
        fetch(`https://lmskokua.herokuapp.com/api/v1/teachers/${props.currentUser.id}/courses/${props.course.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(resp => resp.json())
            .then(data => {
                // console.log(data) //returns json message of delete success
                props.removeCourse(props.course.id)
                props.removeCourseFromAllCourse(props.course.id)
            })
    }

    function handleStudentClick() {
        const token = localStorage.getItem("token")
        // console.log(props.course)
        // console.log(props.currentUser)
        let currentEnrollment;
        fetch(`https://lmskokua.herokuapp.com/api/v1/students/${props.currentUser.id}/enrollments`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(resp => resp.json())
            .then(data => {
                // console.log(data)
                data.map(enrollment => {
                    // debugger
                    if (enrollment.course.id === props.course.id && enrollment.student.id === props.currentUser.id) {
                        currentEnrollment = enrollment
                        // debugger
                    }
                })
                removeClickedCourse(currentEnrollment.id)
            })
        // console.log(currentEnrollment)

    }

    function removeClickedCourse(id) {
        const token = localStorage.getItem("token")
        fetch(`https://lmskokua.herokuapp.com/api/v1/students/${props.currentUser.id}/enrollments/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }

        })
            .then(resp => resp.json())
            .then(data => {
                // console.log(data) //returns json message of delete success
                props.removeCourse(props.course.id)
            })
    }

    return (
        <div className="column">
            <MDBCol>
                <MDBCard className="course" style={{width: "22rem"}}>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                                  waves/>
                    <MDBCardBody><Link to={{
                        pathname: `/courses/${props.course.id}`,
                        courseProps: props.course
                    }}>
                        <MDBCardTitle>{props.course.name}</MDBCardTitle>
                        <MDBCardText>
                            {props.course.subject.name}

                        </MDBCardText>
                    </Link>
                        {
                            props.currentUser.position === 'teacher' ?
                                <span data-tooltip="Delete Course" data-position="bottom left">
                                 <MDBIcon onClick={() => show()} icon="trash-alt" size="2x" className="red-text pr-3"/>
                            <Confirm
                                open={open}
                                header='Removing this Course.'
                                onCancel={() => handleCancel()}
                                onConfirm={() => handleConfirm()}
                            />
                        </span>

                                :
                                <React.Fragment>
                                    <MDBBtn onClick={() => studentShow()} className="">Drop Course</MDBBtn>
                                    <Confirm
                                        open={openStudent}
                                        header='Removing this Course.'
                                        onCancel={() => studentHandleCancel()}
                                        onConfirm={() => studentHandleConfirm()}
                                    />
                                </React.Fragment>
                        }
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeCourse: (id) => {
            dispatch({type: "REMOVE_COURSE", payload: id})
        },
        removeCourseFromAllCourse: (id) => {
            dispatch({type: "REMOVE_COURSE_FROM_ALL_COURSES", payload: id})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard)
