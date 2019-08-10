import React, {Component} from 'react'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBFooter,
    MDBIcon,
    MDBMask,
    MDBRow,
    MDBView
} from "mdbreact";
import './Landing.css'


class LandingPage extends Component {

    state = {
        flipped: false
    }

    handleFlipping = () => {
        this.setState({flipped: !this.state.flipped});
    }

    render() {
        const colStyle = {maxWidth: "22rem"};

        return (
            <div>
                <MDBView src={`https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}>
                    <MDBMask className="rgba-purple-slight d-flex justify-content-center align-items-center">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="12" className="mb-4 text-center">
                                    <h1 className="display-4 font-weight-bold mb-0 pt-md-5 pt-5">¿Que es kōkua?</h1>
                                    <h5 className="pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5">Kokua viene de la palabra
                                        hawaiana "kōkua" que signifiica Ayuda y en esta plataforma podrás encontrar toda
                                        la ayuda necesaria para tus tareas y proyectos escolares.</h5>
                                    <MDBBtn rounded className="btn-purple"><MDBIcon icon="user"
                                                                                    className="mr-2"></MDBIcon> Sign up!</MDBBtn>
                                    <MDBBtn outline color="purple" rounded><MDBIcon icon="book"
                                                                                    className="mr-2"></MDBIcon> Learn
                                        more</MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
                <section id="sectionCurInd">
                    <br/><br/>
                    <h2>Cursos</h2>
                    <p>Todos los cursos necesarios para no reprobar.</p>
                    <MDBContainer className="text-center text-md-justify">
                        <MDBRow>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Base de Datos (Basico)</MDBCardTitle>
                                        <h6>Instructor: Javier Torres</h6>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make
                                            up the bulk of the card&apos;s content.
                                        </MDBCardText>
                                        <MDBBtn href="#">Registrarse</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Base de Datos (Basico)</MDBCardTitle>
                                        <h6>Instructor: Javier Torres</h6>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make
                                            up the bulk of the card&apos;s content.
                                        </MDBCardText>
                                        <MDBBtn href="#">Registrarse</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Base de Datos (Basico)</MDBCardTitle>
                                        <h6>Instructor: Javier Torres</h6>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make
                                            up the bulk of the card&apos;s content.
                                        </MDBCardText>
                                        <MDBBtn href="#">Registrarse</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Base de Datos (Basico)</MDBCardTitle>
                                        <h6>Instructor: Javier Torres</h6>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make
                                            up the bulk of the card&apos;s content.
                                        </MDBCardText>
                                        <MDBBtn href="#">Registrarse</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <br/><br/>
                </section>
                <section className="sectionCurInd">
                    <br/><br/>
                    <h2 className="titulosIndex">Profesores</h2>
                    <p className="subIndex">Todos los cursos necesarios para no reprobar.</p>
                    <MDBContainer className="text-center text-md-left">
                        <MDBRow>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Base de Datos (Basico)</MDBCardTitle>
                                        <h5>Instructor: Javier Torres</h5>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make
                                            up the bulk of the card&apos;s content.
                                        </MDBCardText>
                                        <MDBBtn href="#">Registrarse</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Base de Datos (Basico)</MDBCardTitle>
                                        <h5>Instructor: Javier Torres</h5>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make
                                            up the bulk of the card&apos;s content.
                                        </MDBCardText>
                                        <MDBBtn href="#">Registrarse</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Base de Datos (Basico)</MDBCardTitle>
                                        <h5>Instructor: Javier Torres</h5>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make
                                            up the bulk of the card&apos;s content.
                                        </MDBCardText>
                                        <MDBBtn href="#">Registrarse</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Base de Datos (Basico)</MDBCardTitle>
                                        <h5>Instructor: Javier Torres</h5>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make
                                            up the bulk of the card&apos;s content.
                                        </MDBCardText>
                                        <MDBBtn href="#">Registrarse</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <br/><br/>
                </section>

                <MDBFooter color="purple" className="font-small pt-4 mt-4">
                    <MDBContainer className="text-center text-md-left">
                        <br/><br/><br/><br/>


                        <MDBRow>
                            <MDBCol md="3">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Web design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Hosting</a></li>
                                </ul>
                            </MDBCol>
                            <MDBCol md="3">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Kokua</a></li>
                                    <li><a href="#">Equipo</a></li>
                                    <li><a href="#">Carreras</a></li>
                                </ul>
                            </MDBCol>
                            <MDBCol md="6">
                                <h5 className="title">Kokua UTNG</h5>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut
                                    vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit
                                    pulvinar dictum vel in justo.</p>
                            </MDBCol>
                        </MDBRow>
                        <br/><br/><br/><br/>
                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a
                            href="#"> kōkua UTNG </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>

        )

    }
}

export default LandingPage;
