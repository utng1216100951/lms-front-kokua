import React, {Component} from 'react'
import student from './imgs/student.jpg'
import teacher from './imgs/teacher.jpg'
import './Login.css'
import {connect} from 'react-redux';

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
        if (this.state.position) {
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
                    if (user.failure) {
                        // console.log(user.failure)
                        // alert(user.failure)
                        this.props.handleErrorMessage(user.failure)
                    } else {
                        // console.log(user.user)
                        this.props.changeUser(user.user)
                        this.props.history.push('/courses')
                    }
                })
        } else {
            // alert('Please choose if a teacher or student')
            this.props.handleErrorMessage("Please select if a teacher or student")
        }
    }

    render() {
        // console.log(this.props.errorState)
        // console.log(this.props.errorState.errorMessage)
        return (

            <div className="container-login">
                <div className="imgLogin">
                    {this.state.position ?
                        <div className="segment">
                            {
                                this.state.position === "teacher" ?
                                    <img className="imgfonlog" src={teacher} alt="teacher"/>
                                    :
                                    <img className="imgfonlog" src={student} alt="student"/>
                            }
                        </div>
                        :
                        null
                    }
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-2"></div>
                        <div className="col-lg-6 col-md-8 login-box">

                            <div className="col-lg-12 login-title">
                                Iniciar Sesión
                            </div>
                            <div className="col-lg-12 login-form">
                                    <form onSubmit={this.handleOnSubmit}>
                                            <button onClick={() => this.handleOnClick('teacher')}
                                                    className="button-login">Maestro
                                            </button>
                                            <button onClick={() => this.handleOnClick('student')}
                                                    className="button-login">Estudiante
                                            </button>
                                        <div className="form-group">
                                            <label className="form-control-label">USERNAME</label>
                                            <input type="text" className="form-control" name="username" required
                                                   onChange={this.handleOnChange} value={this.state.username}
                                                   placeholder="Nombre de Usuario"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-control-label">PASSWORD</label>
                                            <input type="password" className="form-control" name="password" required
                                                   onChange={this.handleOnChange} value={this.state.password}
                                                   placeholder=" Password"/>
                                        </div>
                                        <div className="col-lg-12 loginbttm">
                                            <div className="col-lg-12 login-btm login-text">
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
                                            </div>
                                            <div className="col-lg-12 login-btm login-button">
                                                <button type="submit" className="btn peach-gradient">LOGIN</button>
                                            </div>
                                        </div>
                                    </form>

                            </div>
                            <div className="col-lg-3 col-md-2"></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeUser: (userObj) => {
            dispatch({type: "SET_USER", payload: userObj})
        }
    }
}


export default connect(null, mapDispatchToProps)(Login)
