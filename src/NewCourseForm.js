import React, { Component } from 'react'
import {connect} from 'react-redux'
import {MDBBtn, MDBContainer, MDBJumbotron} from "mdbreact";
import {Animated} from "react-animated-css";

const newCourseFormStyle = {
    border: "2px solid black",
    height: "50vh",
    marginTop: "40px",
    width: "50vw",
    borderRadius: "20px"
}

class NewCourseForm extends Component {
    state={
        name: '',
        teacher_id: '',
        subject_id: '',
        errors: ''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            teacher_id: this.props.currentUser.id
        })
    }

    handleSubmit = (e) => {
        const token = localStorage.getItem("token")
        e.preventDefault()
        // console.log(this.state)
        if(this.state.subject_id){

        
        fetch(`https://lmskokua.herokuapp.com/api/v1/teachers/${this.state.teacher_id}/courses`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                course: {
                    name: this.state.name,
                    teacher_id: this.state.teacher_id,
                    subject_id: this.state.subject_id,
                }
            })
        })
        .then(resp => resp.json())
        .then(data => {
            this.props.addUserCourse(data)
            this.props.addCourseToAllCourses(data)
            // console.log(data.teacher)
            // this.props.setUserCourses(data)
            this.props.history.push('/courses')
        })
        }
        else{
            this.setState({
                errors: 'Subject Selection Required'
            })

            window.setTimeout(() => {
                this.setState({
                  errors: ''
                });
              }, 2000);
        }
    }
    render() {
        // console.log(this.props.currentUser.id)
        // console.log(this.state)
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
                <div className="ui container">
                    <br></br>
                    <h1>Crear Curso</h1>
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label>Nombre del curso</label>
                            <input onChange={this.handleOnChange} style={{width: "80%"}} required type="text" name="name" placeholder="Nombre"/>

                            <br></br>

                            <select onChange={this.handleOnChange} style={{width: "80%", margin: "auto"}} name="subject_id" className="ui fluid dropdown">
                                <option value="">Seleccinar materia</option>

                                {this.props.subjects.map(subject => {
                                    return <option key={subject.id} value={subject.id}>{subject.name}</option>
                                })}
                            </select>

                            <br></br>
                            <MDBBtn gradient="peach" type="submit">Crear</MDBBtn>
                        </div>
                    </form>
                    {
                        this.state.errors ?
                            <div className="ui error message">
                                <div className="header">
                                    Error al crear
                                </div>
                                <ul className="list">
                                    <li>{this.state.errors}</li>
                                </ul>
                            </div>
                            :
                            null
                    }

                </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        subjects: state.subjects,
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch){
    return {
        addUserCourse: (newCourse) => {
            dispatch({type:"ADD_COURSE", payload: newCourse})
        },
        addCourseToAllCourses: (newCourse) => {
            dispatch({type: "ADD_COURSE_TO_ALL_COURSES", payload: newCourse})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCourseForm)
