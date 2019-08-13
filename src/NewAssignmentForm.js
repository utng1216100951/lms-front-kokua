import React, {Component} from 'react'
import {connect} from 'react-redux'
import {MDBContainer, MDBJumbotron} from "mdbreact";
import {Animated} from "react-animated-css";



class NewAssignmentForm extends Component {
    state = {
        name: '',
        note: '',
        course_id: this.props.history.location.pathname.split("/")[2],
        due_date: ''
    }

    handleSubmit = (e) => {
        const token = localStorage.getItem("token")
        e.preventDefault()
        // console.log(this.props.history.location.pathname)
        // this.props.addAssignment(this.state)
        fetch(`https://lmskokua.herokuapp.com/api/v1/courses/${this.props.history.location.pathname.split("/")[2]}/assignments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                assignment: this.state
            })
        })
            .then(resp => resp.json())
            .then(data => {

                this.props.history.push(`/courses/${this.props.history.location.pathname.split("/")[2]}`)
            })

    };

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    dateToday = () => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = yyyy + '-' + mm + '-' + dd

        return today
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

                <div className="ui container">
                    <br/>
                    <h1>Nueva asignación</h1>
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label>Título</label>
                            <input onChange={this.handleOnChange} required style={{width: "80%"}} type="text"
                                   name="name"
                                   placeholder="Título"/>

                            <label>Descripción</label>
                            <input onChange={this.handleOnChange} required style={{width: "80%"}} type="text"
                                   name="note"
                                   placeholder="Descripción"/>

                            <label>Fecha</label>
                            <input onChange={this.handleOnChange} required style={{width: "80%"}} type="date"
                                           min={this.dateToday()} name="due_date" placeholder="Fecha"/>


                            <br/>

                            <button className="ui button" type="submit">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addAssignment: (newAssignment) => {
            dispatch({type: "ADD_ASSIGNMENT_TO_COURSE", payload: newAssignment})
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAssignmentForm)
