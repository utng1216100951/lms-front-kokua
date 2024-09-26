import React, {Component} from 'react'
import {Link} from 'react-router-dom';
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
import tacho from "./imgs/tacho.jpg"
import torres from "./imgs/torres.jpg"



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
                {
                    /* HEADER   */
                }
                <MDBView className="imagenfondo"
                    src={`https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`}>
                    <MDBMask className="rgba-purple-slight d-flex justify-content-center align-items-center">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="6" className="mb-4 text-left">
                                    <h1 className="display-5 mb-0 " id={"heatitle"}>¿Que es kōkua?</h1>
                                    <h5 className="pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5" id={"texthead"}>Kokua
                                        viene de la palabra
                                        hawaiana "kōkua" que signifiica Ayuda y en esta plataforma podrás encontrar toda
                                        la ayuda necesaria para tus tareas y proyectos escolares.</h5>
                                    <Link to="/signUp">
                                        <MDBBtn rounded className="cian"><MDBIcon icon="user"
                                                                                className="mr-2"/> Sign up!</MDBBtn>
                                    </Link>

                                </MDBCol>
                                <MDBCol md="6" className="align-content-lg-center">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}

                                        <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/353887967" width="640" height="564"
                                                frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>

                {
                    /* Cursos   */
                    /* Imagenes de 400 de ancho x 300 de alto */
                }
                <section id="sectionCurInd">
                    <br/><br/>
                    <h2>Cursos</h2>
                    <p>Todos los cursos necesarios para no reprobar.</p>
                    <MDBContainer className="text-center text-md-justify">
                        <MDBRow>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://blog.iron.io/wp-content/uploads/2016/01/docker-logo.png" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Docker</MDBCardTitle>
                                        <h6>Instructor: Javier</h6>
                                        <MDBCardText>
                                            DevOps
                                        </MDBCardText>
                                        <Link to="/login">
                                            <MDBBtn type="button" class="btn btn-primary">Log in</MDBBtn>
                                        </Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://s3-eu-west-1.amazonaws.com/devinterface-web/production/pages/9/medium/python.png?1482145054" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Patrones de diseño</MDBCardTitle>
                                        <h6>Instructor: Anastacio</h6>
                                        <MDBCardText>
                                            Fundamentos
                                        </MDBCardText>
                                        <Link to="/login">
                                            <MDBBtn type="button" class="btn btn-primary">Log in</MDBBtn>
                                        </Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://www.electan.com/images/thumbnails/raspberry-pi-3-2018.jpg.thumb_400x300.jpg" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Raspberry pi</MDBCardTitle>
                                        <h6>Instructor: Eduardo</h6>
                                        <MDBCardText>
                                            Hardware
                                        </MDBCardText>
                                        <Link to="/login">
                                            <MDBBtn type="button" class="btn btn-primary">Log in</MDBBtn>
                                        </Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://miro.medium.com/max/400/0*VX17FzlM5_ZvThzg.png" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>IONIC</MDBCardTitle>
                                        <h6>Instructor: Ricardo</h6>
                                        <MDBCardText>
                                            Desarrollo Móvil
                                        </MDBCardText>
                                        <Link to="/login">
                                            <MDBBtn type="button" class="btn btn-primary">Log in</MDBBtn>
                                        </Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                        <br/><br/>
                        <MDBRow>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://miro.medium.com/max/400/0*mrQhVNHHo5F9knMR.png" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Fundamentos de React</MDBCardTitle>
                                        <h6>Instructor: Anastacio</h6>
                                        <MDBCardText>
                                            Desarrollo Web
                                        </MDBCardText>
                                        <Link to="/login">
                                            <MDBBtn type="button" class="btn btn-primary">Log in</MDBBtn>
                                        </Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="http://nextews.com/images/ed/42/ed42ed477e8b0ed6.jpg" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Introducción a los algoritmos</MDBCardTitle>
                                        <h6>Instructor: Daniel</h6>
                                        <MDBCardText>
                                            Fundamentos
                                        </MDBCardText>
                                        <Link to="/login">
                                            <MDBBtn type="button" class="btn btn-primary">Log in</MDBBtn>
                                        </Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://hackster.imgix.net/uploads/attachments/307792/google-assistant-rpi_PLv1yMl7Tc.png?auto=compress%2Cformat&w=900&h=675&fit=min" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Google Assistant con Raspberry pi</MDBCardTitle>
                                        <h6>Instructor: Javier</h6>
                                        <MDBCardText>
                                            Hardware
                                        </MDBCardText>
                                        <Link to="/login">
                                            <MDBBtn type="button" class="btn btn-primary">Log in</MDBBtn>
                                        </Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://cdn.dribbble.com/users/1242303/screenshots/3764450/day33.png" waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Creación de un proyecto con Vue</MDBCardTitle>
                                        <h6>Instructor: Eduardo</h6>
                                        <MDBCardText>
                                            Desarrollo Web
                                        </MDBCardText>
                                        <Link to="/login">
                                            <MDBBtn type="button" class="btn btn-primary">Log in</MDBBtn>
                                        </Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <br/><br/>
                </section>
                {
                    /* Profesres   */
                }
                <section className="sectionCurInd">
                    <br/><br/>
                    <h2 className="titulosIndex">Profesores</h2>
                    <p className="subIndex">Profesores de la institución.</p>
                    <MDBContainer className="text-center text-md-left">
                        <MDBRow>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src={tacho} style={{height: "205px",width:"300px"}} waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Anastacio Rodríguez</MDBCardTitle>
                                        <MDBCardText>
                                            "El educado difiere del no educado, tanto como el que vive difiere del muerto"
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src={torres} style={{height: "205px",width:"300px"}} waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Javier Torres</MDBCardTitle>
                                        <MDBCardText>
                                            "Educar la mente sin educar el corazón no es educación en absoluto"
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://scontent.fcyw4-1.fna.fbcdn.net/v/t1.0-9/20292985_1614185638599613_8596154975597453240_n.jpg?_nc_cat=101&_nc_oc=AQmFllhlR8vECep9gaUDy0goShflpW-DUlODK5yvP6pK-0b2IATVLfV7Y1Mm9iMe3FTiFtMAl-dTecKS08qRoPgJ&_nc_ht=scontent.fcyw4-1.fna&oh=8baef422e2d0384b338cd82f2407034f&oe=5DE6F85C" style={{height: "205px",width:"300px"}} waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Apolinar Trejo</MDBCardTitle>
                                        <MDBCardText>
                                            "La educación es un ornamento en la prosperidad y un refugio en la adversidad"
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBCard style={{width: "17rem"}}>
                                    <MDBCardImage className="img-fluid"
                                                  src="https://scontent.fcyw4-1.fna.fbcdn.net/v/t1.0-9/580973_473910912642817_1190471618_n.jpg?_nc_cat=103&_nc_oc=AQm1pyjPwxnNSSMD7ydOQfGmg9qKyAomEmzVIiy2yLlo9MKI92jYAi8DfNk-IgjyHde8gIdi2CccLrjKkIWeBVit&_nc_ht=scontent.fcyw4-1.fna&oh=9b48cadc1d1b846ffb5bfeb0186aed74&oe=5DD3A8BD" style={{height: "205px",width:"300px"}} waves/>
                                    <MDBCardBody>
                                        <MDBCardTitle>Eduardo Barrientos</MDBCardTitle>
                                        <MDBCardText>
                                            "La educación es el arma más poderosa que puedes usar para cambiar el mundo"
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <br/><br/>
                </section>
                {
                    /* Footer   */
                }
                <MDBFooter color="purple" className="font-small pt-4 mt-4">
                    <MDBContainer className="text-center text-md-left">
                        <br/><br/>

                        <MDBRow>
                            <MDBCol md="3">
                                <h3>Desarrolladores</h3>
                                <dl>
                                    <dt>Axel Quintero</dt>
                                    <ul>
                                        <li><a href="https://github.com/axeljovanny" target="_blank"><i class="fab fa-github">Github</i></a></li>
                                        <li><i class="fas fa-inbox"></i> axel.jovanny.aj@gmail.com</li>
                                    </ul>
                                    <dt>Ashley Quintero</dt>
                                    <ul>
                                        <li><a href="https://github.com/utng1216100951" target="_blank"><i class="fab fa-github">Github</i></a></li>
                                        <li><i class="fas fa-inbox"></i> ashley.isai.ai@gmail.com</li>
                                    </ul>
                                    <dt>Noé Castillo</dt>
                                    <ul>
                                        <li><a href="https://github.com/noedcr" target="_blank"><i class="fab fa-github">Github</i></a></li>
                                        <li><i class="fas fa-inbox"></i> noej.cr@gmail.com</li>
                                    </ul>
                                </dl>
                            </MDBCol>
                            <MDBCol md="3">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="/about">Kokua</a></li>
                                    <li><a href="/about#como">¿Cómo surigió?</a></li>
                                    <li><a href="/about#dirigido">¿A quién va dirigido?</a></li>
                                    <li><a href="/about#fiosofia">Filosofía intitucional</a></li>
                                    <li><a href="/about#ubicacion">Ubicación</a></li>
                                    <li><a href="/about#desarrolladores">Desarrolladores</a></li>
                                </ul>
                            </MDBCol>
                            <MDBCol md="6">
                                <h3 >Kokua UTNG</h3>
                                <p>Aviso de privacidad</p>
                                <p>Toda la información personal ingresada a Kokua se maneja de manera confidencial, 
                                    el sitio web no comparte datos personales con ningún miembro de la institución 
                                    ni con terceras partes involucradas en el desarrollo o manejo del sitio.</p>
                            </MDBCol>
                        </MDBRow>
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
