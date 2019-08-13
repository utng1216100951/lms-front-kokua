import React, {Component} from 'react'
import teacher from './imgs/teacher.jpg'
import student from './imgs/student.jpg'
import './SignUp.css'
import {connect} from 'react-redux';


// const axios = require('axios');
// let imageURL;

class SignUp extends Component {
    state = {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        bio: '',
        image_url: '',
        position: '',
        errors: []
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

    timeOut = () => {
        window.setTimeout(() => {
            this.setState({
                errors: []
            });
        }, 2000);
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        const {username, password, first_name, last_name, bio, image_url, position} = this.state
        // console.log(e.target)
        // let position = this.state.position
        if (position) {
            fetch(`https://lmskokua.herokuapp.com/api/v1/${this.state.position}s`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                // body: JSON.stringify({
                //     user: this.state
                // })
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password,
                        first_name: first_name,
                        last_name: last_name,
                        bio: bio,
                        image_url: image_url,
                        // image_url: imageURL,
                        position: position
                    }
                })
            })
                .then(res => res.json())
                .then(user => {
                    // console.log(user.errors)
                    if (user.errors) {
                        // alert(user.errors)
                        this.setState({
                            errors: user.errors
                        })
                        this.timeOut()
                    } else {
                        localStorage.setItem("token", user.jwt)
                        // console.log(Object.keys(user)[0])
                        // console.log(user[Object.keys(user)[0]])
                        this.props.changeUser(user[Object.keys(user)[0]]) //since either a teacher or student key is returned, utilizing Object keys was best
                        this.props.history.push('/courses')
                    }
                })
        } else {
            // alert('Please choose if a teacher or student')
            this.setState({
                errors: [...this.state.errors, "Please choose if a teacher or student"]
            })
            this.timeOut()
        }
    }

    render() {
        // console.log(this.props.history)
        return (

            <div className="container-sign">
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
                        <div className="col-lg-3 col-md-2"/>
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
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label className="form-control-label">Usuario</label>
                                                <input type="text" className="form-control" name="username" required
                                                       onChange={this.handleOnChange} value={this.state.username}
                                                       placeholder="Nombre de Usuario"/>

                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label className="form-control-label">Contraseña</label>
                                                <input type="password" className="form-control" name="password" required
                                                       onChange={this.handleOnChange} value={this.state.password}
                                                       placeholder=" Contraseña para el usuario"/>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label className="form-control-label">Nombre(s)</label>
                                                <input type="text" className="form-control space" name="first_name"
                                                       required
                                                       onChange={this.handleOnChange} value={this.state.first_name}
                                                       placeholder="Nombres"/>

                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label className="form-control-label">Apellidos(s)</label>
                                                <input type="text" className="form-control space" name="last_name"
                                                       required
                                                       onChange={this.handleOnChange} value={this.state.last_name}
                                                       placeholder="Apellidos"/>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label className="form-control-label">Descripción</label>
                                        <input type="text" className="form-control space" name="bio" required
                                               onChange={this.handleOnChange} value={this.state.bio}
                                               placeholder="Pequeña descripción sobre tí"/>

                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">Imagen del usuario</label>
                                        <input type="text" className="form-control space" name="image_url" required
                                               onChange={this.handleOnChange} value={this.state.image_url}
                                               placeholder="URL de la imagen"/>

                                    </div>
                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-12 login-btm login-text">
                                            {
                                                this.state.errors.length !== 0 ?

                                                    <div className="alert alert-danger" role="alert">
                                                        <h5>Error al registrarse</h5>
                                                        <ul className="list">
                                                            {this.state.errors.map(error => {
                                                                return <li
                                                                    key={this.state.errors.indexOf(error)}>{error}</li>
                                                            })
                                                            }
                                                        </ul>
                                                    </div>

                                                    :
                                                    null
                                            }
                                        </div>

                                        <div className="col-lg-12 login-btm login-button">
                                            <button type="submit" className="btn peach-gradient">Registrarse</button>
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

export default connect(null, mapDispatchToProps)(SignUp)
