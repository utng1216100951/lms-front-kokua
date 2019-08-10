import React, { Component } from 'react'
import {connect} from 'react-redux'
import teacher from './imgs/teacher.png'
import student from './imgs/student.png'
import './SignUp.css'

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
        const {username, password, first_name,last_name,bio,image_url,position} = this.state
        // console.log(e.target)
        // let position = this.state.position
        if(position){
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
                if(user.errors){
                    // alert(user.errors)
                    this.setState({
                        errors: user.errors
                    })
                    this.timeOut()
                }
                else{
                    localStorage.setItem("token", user.jwt)
                    // console.log(Object.keys(user)[0])
                    // console.log(user[Object.keys(user)[0]])
                    this.props.changeUser(user[Object.keys(user)[0]]) //since either a teacher or student key is returned, utilizing Object keys was best
                    this.props.history.push('/courses')
                } 
            })
        }
        else{
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
            <div className="container-signUp">
                <div className="container">
                    <div className="paddingButton">
                        <button onClick={() => this.handleOnClick('teacher')} className="button-signUp">Maestro</button>
                        <button onClick={() => this.handleOnClick('student')} className="button-signUp">Estudiante</button>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col formSignUp">
                            <form className="form-group" onSubmit={this.handleOnSubmit}>
                                <div className="field">
                                    <label className="lableSignUp">Usuario</label>
                                    <input type="text" className="form-control space" name="username" required onChange={this.handleOnChange} value={this.state.username} placeholder="Nombre de Usuario"/>
                                </div>

                                <div className="field">
                                    <label className="lableSignUp">Contrasena</label>
                                    <input type="password" className="form-control space" name="password" required onChange={this.handleOnChange} value={this.state.password} placeholder=" Contrasena para el usuario"/>
                                </div>

                                <div className="field">
                                    <label className="lableSignUp">Nombre(s)</label>
                                    <input type="text" className="form-control space" name="first_name" required onChange={this.handleOnChange} value={this.state.first_name} placeholder="Nombres del usuario"/>
                                </div>

                                <div className="field">
                                    <label className="lableSignUp">Apellidos</label>
                                    <input type="text" className="form-control space" name="last_name" required onChange={this.handleOnChange} value={this.state.last_name} placeholder="Apellidos del usuario"/>
                                </div>

                                <div className="field">
                                    <label className="lableSignUp">Descripcion</label>
                                    <input type="text" className="form-control space" name="bio" required onChange={this.handleOnChange} value={this.state.bio} placeholder="Pequena descripcion de ti"/>
                                </div>

                                <div className="field">
                                    <label className="lableSignUp">Imagen del usuario</label>
                                    <input type="text" className="form-control space" name="image_url" required onChange={this.handleOnChange} value={this.state.image_url} placeholder="URL de la imagen"/>
                                    {/* <input type="file" className="inputfile ui huge button" name="image_url" required onChange={this.handlePhotoUpload} placeholder="Image URL"/> */}

                                </div>


                                <button className="btn btn-primary btnSignUp" type="submit">Registrarse</button>
                            </form>
                        </div>
                        <div className="col imgSignUp">
                            {this.state.position ?
                                <div className="segment" style={{width: "100px", height: "100px", margin: "auto"}}>
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
                    </div>
                    <br/>
                    {
                        this.state.errors.length !== 0 ?

                            <div className="alert alert-danger" role="alert">
                                <h5>Error al registrarse</h5>
                                <ul className="list">
                                    {this.state.errors.map(error => {
                                        return <li key={this.state.errors.indexOf(error)}>{error}</li>
                                    })
                                    }
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

function mapDispatchToProps(dispatch){
    return {
        changeUser: (userObj) => {
            dispatch({type:"SET_USER", payload: userObj})
        }
    }
} 

export default connect(null, mapDispatchToProps)(SignUp)
