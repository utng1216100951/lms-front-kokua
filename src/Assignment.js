import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import Moment from 'react-moment'
import {Link} from 'react-router-dom'
import {Confirm} from 'semantic-ui-react'
import {MDBBtn, MDBIcon} from "mdbreact";

const lateStyle = {
    color: "red"
}
class Assignment extends Component {

    state = { open: false }

    show = () => this.setState({ open: true })
    handleConfirm = (id) => {
        this.handleOnClick(id)
        this.setState({ 
            open: false 
        })
    }
    handleCancel = () => this.setState({ open: false })
    
    handleOnClick = (id) => {
        const token = localStorage.getItem("token")
        fetch(`https://lmskokua.herokuapp.com/api/v1/courses/${this.props.url}/assignments/${id}`,{
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
           }
        })
        .then(resp => resp.json())
        .then(data => {
            // console.log(data) //returns json message of delete success
            this.props.removeAssignment(id);
        })
        // this.props.removeAssignment(id);
    }

    handleEditClick = (assignmentClicked) => {
        // console.log(assignmentClicked)
        this.props.handleProblemClick(assignmentClicked)
    } 

    checkIfSubmitted = () => {
        let found = this.props.assignment.submissions.find(submission => {
            return submission.student_id === this.props.currentUser.id
        })
        return found
    }

    dateToday = () => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 
        today = yyyy + '-' + mm + '-' + dd
        
        return today 
    }

    checkGradeColor = (grade) => {
        // adjust color of grade notification
        // debugger
        if(grade > 89 && grade <= 100){
            return "green"
        }
        else if (grade > 79 && grade <= 89){
            return "blue"
        }
        else if (grade > 69 && grade <= 79){
            return "gold"
        }
        else{
            return "red"
        }
    }

    render() {
        // console.log(this.props.assignment)
        // let found = this.props.assignment.submissions.find(submission => {
        //     // debugger
        //     return submission.student_id === this.props.currentUser.id
        // })
        // console.log(found)
    
        return (
            <div className="ui segment">
                <h4>{this.props.assignment.name}</h4>
                <h3>{this.props.assignment.note}</h3>
                {/* checks if assignment is late, displaying the text as red */}
                <h6>Due: <Moment style={this.props.assignment.due_date < this.dateToday() ? lateStyle : null} format="MM/DD/YYYY">{this.props.assignment.due_date}</Moment></h6>

                {
                    Object.keys(this.props.currentUser).length !== 0 && this.props.currentUser.position === "teacher" ?
                    <Fragment>
                        <span data-tooltip="Borrar asignación" data-position="top left">
                             <MDBIcon icon="trash" onClick={this.show} className="red-text pink-text ml-3" size="lg"/>
                            <Confirm
                                open={this.state.open}
                                header='¿Deseas eliminar esta asignación?'
                                onCancel={this.handleCancel}
                                onConfirm={() => this.handleConfirm(this.props.assignment.id)}
                                />
                        </span>
                        
                        <span data-tooltip="Agregar preguntas" data-position="top left">
                             <MDBIcon icon="edit" onClick={()=> this.props.handleAssignmentClick(this.props.assignment)}
                                      className="amber-text " size="lg pink-text ml-3"/>
                        </span>
                        <Link style={{color: 'black'}} to={{pathname: `/courses/${this.props.assignment.course_id}/assignments/${this.props.assignment.id}/submissions`, assignmentObj: this.props.assignment}}>
                            <span data-tooltip="Revisar entregas" data-position="top left">
                                <MDBIcon far icon="eye"
                                         className="cyan-text open" size="lg pink-text ml-3"/>
                            </span>
                        </Link>
                        
                    </Fragment>
                          
                    :
                    <Fragment>
                        {
                            this.checkIfSubmitted() ?
                            <Fragment>
                                <MDBBtn gradient="aqua" className="ui disabled">Presentado</MDBBtn>
                                 {this.checkIfSubmitted().created_at === this.checkIfSubmitted().updated_at ? 
                                    <h4>Pendiente</h4>
                                    :
                                    <Fragment>
                                    <h4>Resultado!! : </h4>
                                    <div className="ui indicating progress stats" data-percent={this.checkIfSubmitted().grade_assigned} >
                                        <div className="bar" style={{width: `${this.checkIfSubmitted().grade_assigned}%`, backgroundColor: this.checkGradeColor(this.checkIfSubmitted().grade_assigned)}}>
                                            <div className="progress" >{this.checkIfSubmitted().grade_assigned}%</div>
                                        </div>
                                    </div>

                                    </Fragment>
                                }
                            </Fragment> 
                           
                            
                            :
                            this.props.assignment.problems.length !== 0 ?
                                <MDBBtn gradient="peach" onClick={() => this.props.handleAssignmentClick(this.props.assignment)} className="ui button">Iniciar</MDBBtn>
                            :
                                <MDBBtn gradient="peach"  className="ui disabled button">No hay preguntas asignadas</MDBBtn>
                        }
                    </Fragment>
                    // <button onClick={() => this.props.handleAssignmentClick(this.props.assignment)} className="ui teal button">Start</button>
                }
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch){
    return{
        removeAssignment:(id)=> {
            dispatch({type:"REMOVE_ASSIGNMENT_FROM_COURSE", payload:id})
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Assignment)
