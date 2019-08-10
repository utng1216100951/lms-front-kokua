import React, {Component} from 'react'
import {connect} from 'react-redux'
import student from './imgs/student.png'
import teacher from './imgs/teacher.png'
import './Login.css'
//import './Landing.js'

class Login extends Component {
    state = {
        username: '',
        password: '',
        position: ''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnClick = (position) => {
        this.setState({
            position: position
        })
    } 

    handleOnSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target)
        if(this.state.position){
            fetch("https://lmskokua.herokuapp.com/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(
                    this.state
                )
                })
            .then(res => res.json())
            .then(user => {
                localStorage.setItem("token", user.jwt)
                // console.log(user.jwt)
                if(user.failure){
                    // console.log(user.failure)
                    // alert(user.failure)
                    this.props.handleErrorMessage(user.failure)
                }
                else{
                    // console.log(user.user)
                    this.props.changeUser(user.user)
                    this.props.history.push('/courses')
                }
            })
        }
        else{
            // alert('Please choose if a teacher or student')
            this.props.handleErrorMessage("Please select if a teacher or student")
        }  
    }
    render() {
        // console.log(this.props.errorState)
        // console.log(this.props.errorState.errorMessage)
        return (
            <div className="container-login">
            <div className="container">
                <div className="paddingButton">
                    <button onClick={() => this.handleOnClick('teacher')} className="button-login">Maestro</button>
                    <button onClick={() => this.handleOnClick('student')} className="button-login">Estudiante</button>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col imgLogin">
                        {this.state.position ?
                            <div className="segment" style={{width: "100px", height: "100px", margin: "center"}}>
                                {
                                    this.state.position === "teacher" ?
                                        <img src={teacher}></img>
                                        :
                                        <img src={student}></img>
                                }
                            </div>
                            :
                            null
                        }
                    </div>
                    <div className="col formLogin">
                        <form onSubmit={this.handleOnSubmit}>
                            <div className="form-group">
                                <label className="lableLogin" >Usuario</label>
                                <input type="text" className="form-control" name="username" required onChange={this.handleOnChange} value={this.state.username} placeholder="Nombre de Usuario"/>
                            </div>
                            <br></br>
                            <div className="field">
                                <label className="lableLogin">Contrasena</label>
                                <input type="password" className="form-control" name="password" required onChange={this.handleOnChange} value={this.state.password} placeholder=" Password"/>
                            </div>
                            <br></br>
                            <button className="btn btn-primary btnLogin" type="submit">Iniciar sesion</button>
                        </form>
                    </div>
                </div>
                <br/><br/>
                {this.props.errorState.errors ?
                    <div className="alert alert-danger" role="alert">
                        <h5>Error al iniciar sesion</h5>
                        <ul className="list">
                            <li>{this.props.errorState.errorMessage}</li>
                        </ul>
                    </div>
                    :
                    null
                }
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>

            </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeUser: (userObj) => {
            dispatch({type:"SET_USER", payload: userObj})
        }
    }
}




export default connect(null, mapDispatchToProps)(Login)
