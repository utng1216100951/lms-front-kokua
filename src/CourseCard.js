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
    var imagenes2da = new Array();
    imagenes2da[0] = "https://dev-res.thumbr.io/libraries/14/04/09/lib/1533172648445_1.jpg?size=854x493s&ext=jpg"; //Fundamentos
    imagenes2da[1] = "https://hackr.io/blog/wp-content/uploads/2019/04/Top-Devops-Tools-1280x800.png"; //devops
    imagenes2da[2] = "https://greca.mx/images/servicios/desarrollo-web-main.jpg"; //web
    imagenes2da[3] = "http://www.wardtechtalent.com/wp-content/uploads/2013/11/wttblog28.jpg"; //mob
    imagenes2da[4] = "https://assets.pcmag.com/media/images/566524-a-single-board-computer.jpg?width=810&height=456"; //hard

    return (
        <div className="column">
            <MDBCol>
                <MDBCard className="course" style={{width: "22rem"}}>

                    {props.course.subject.name === 'DevOps' &&
                    <MDBCardImage className="img-fluid" src={imagenes2da[1]}
                                  waves/>
                    }
                    {props.course.subject.name === 'Fundamentos' &&
                    <MDBCardImage className="img-fluid" src={imagenes2da[0]}
                                  waves/>
                    }
                    {props.course.subject.name === 'Desarrollo Móvil' &&
                    <MDBCardImage className="img-fluid" src={imagenes2da[3]}
                                  waves/>
                    }
                    {props.course.subject.name === 'Desarrollo Web' &&
                    <MDBCardImage className="img-fluid" src={imagenes2da[2]}
                                  waves/>
                    }
                    {props.course.subject.name === 'Hardware' &&
                    <MDBCardImage className="img-fluid" src={imagenes2da[4]}
                                  waves/>
                    }

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
                                <span data-tooltip="Eliminar curso" data-position="bottom left">
                                 <MDBIcon onClick={() => show()} icon="trash-alt" size="2x" className="red-text pr-3"/>
                            <Confirm
                                open={open}
                                header='¿Deseas eliminar este curso?'
                                onCancel={() => handleCancel()}
                                onConfirm={() => handleConfirm()}
                            />
                        </span>

                                :
                                <React.Fragment>
                                    <MDBBtn onClick={() => studentShow()} className="">Eliminar curso</MDBBtn>
                                    <Confirm
                                        open={openStudent}
                                        header='¿Deseas salir de este curso?'
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
