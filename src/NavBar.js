import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {MDBBtn, MDBCollapse, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBContainer, MDBNavbarToggler} from "mdbreact";
import {connect} from 'react-redux';
import './NavBar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        var currentUser = this.props.currentUser;
        var logOutUser = this.props.logOutUser;
        return (
            <div>
                <header>
                        <MDBNavbar color="bg-colorsin" fixed="top" dark expand="md" scrolling transparent >
                            <MDBContainer>
                                <MDBNavbarBrand id="logonav">kōkua UTNG</MDBNavbarBrand>
                                {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                                <MDBCollapse isOpen={this.state.collapse} navbar>
                                    <MDBNavbarNav className="mr-auto">
                                        <MDBNavbarNav left>
                                                <Link id="navitem" to="/home">Home</Link>
                                                <Link id="navitem" to="/about">About</Link>
                                        </MDBNavbarNav>
                                        <MDBNavbarNav left>

                                            {
                                                Object.keys(currentUser).length !== 0 ?
                                                    <h4 id="nombrenav">Hello, {currentUser.first_name}!</h4>
                                                    :
                                                    null
                                            }

                                        </MDBNavbarNav>
                                        <MDBNavbarNav right>
                                            {
                                                Object.keys(currentUser).length !== 0 ?
                                                    <React.Fragment>


                                                            <Link id="navico"
                                                                  to={currentUser.position === "teacher" ? "/newCourseForm" : "/registerCourse"}>
                                                            <span className="badge"
                                                                  data-tooltip={currentUser.position === "teacher" ? "Add New Course" : "Register for New Course"}
                                                                  data-position="bottom left">
                                                            <MDBIcon far icon="plus-square" size="2x"/>
                                                            </span>
                                                            </Link>

                                                            <Link id="navitem" to="/courses">My Courses
                                                            </Link>
                                                        <Link id="navitem"
                                                              to={currentUser.position === "teacher" ? `/profile/teacher/${currentUser.id}` : `/profile/student/${currentUser.id}`}>
                                                            Profile
                                                        </Link>

                                                        <Link id="navitem" to="/home">
                                                            <div onClick={logOutUser} className="">Log Out</div>
                                                        </Link>

                                                    </React.Fragment>
                                                    :
                                                    <React.Fragment>
                                                        <Link to="/login">
                                                            <MDBBtn outline rounded gradient="aqua">Log in</MDBBtn>
                                                        </Link>
                                                        <Link to="/signUp">
                                                            <MDBBtn outline color="purple" rounded><MDBIcon icon="user"
                                                                                                            className="mr-2"></MDBIcon> Sign up!</MDBBtn>
                                                        </Link>

                                                    </React.Fragment>
                                            }
                                        </MDBNavbarNav>
                                    </MDBNavbarNav>

                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                </header>
            </div>

        );
    }
}


function mapStateToProps(state) {
    // console.log(state)
    return {
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logOutUser: () => {
            localStorage.clear();
            dispatch({type: "LOG_OUT"})

        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
