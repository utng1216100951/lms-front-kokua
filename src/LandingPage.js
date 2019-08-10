import React from 'react'
import {Link} from 'react-router-dom'
// import lifecycle from 'react-pure-lifecycle';
import {Animated} from 'react-animated-css'

function LandingPage() {

    return (
        <div>
            <div>
                <div>
                    <div class="header-blue">
                        <div class="container hero">
                            <div class="row">
                                <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                                    <h1>¿Qué es Kokua?</h1>
                                    <p>Kokua viene de la palabra hawaiana "kōkua" que signifiica Ayuda y en esta plataforma podrás encontrar toda la ayuda necesaria para tus tareas y proyectos escolares.</p>
                                    <Link to="/about">
                                    <button class="btn btn-light btn-lg action-button" type="button">Más Información</button>
                                    </Link>
                                </div>
                                <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                                    <iframe allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/SRf6WKIrj1E" class="videoPosition" width="560" height="315">
                                    </iframe>
                                </div>
                                <div class="iphone-mockup">
                                    <div class="screen"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="sectionCurInd">
                <h1 class="invisible titulosIndex">Heading</h1>
                <h2 class="titulosIndex">Cursos</h2>
                <p class="subIndex">Todos los cursos necesarios para no reprobar.</p>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div class="card">
                                <div class="card-body"><img class="img-fluid imgCur" src="assets/img/bd.jpeg"/>
                                    <h6 class="text-muted card-subtitle mb-2">Base de Datos (Basico)</h6>
                                    <p class="cursoProf">Instructor: Javier Torres</p><a class="card-link" href="#">Registrarse</a><a class="card-link" href="#">Informacion</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div class="card">
                                <div class="card-body"><img class="img-fluid imgCur" src="assets/img/movil.jpg"/>
                                    <h6 class="text-muted card-subtitle mb-2">Aplicaciones movil (Android)</h6>
                                    <p class="cursoProf">Instructor: Anastacio&nbsp;</p><a class="card-link" href="#">Registrarse</a><a class="card-link" href="#">Informacion</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div class="card">
                                <div class="card-body"><img class="img-fluid imgCur" src="assets/img/C.png"/>
                                    <h6 class="text-muted card-subtitle mb-2">Programacion C# (Basico)</h6>
                                    <p class="cursoProf">Instructor: Anastacio</p><a class="card-link" href="#">Registrarse</a><a class="card-link" href="#">Informacion</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div class="card">
                                <div class="card-body"><img class="img-fluid imgCur" src="assets/img/ipv6.png"/>
                                    <h6 class="text-muted card-subtitle mb-2">IPv4 &amp; IPv6</h6>
                                    <p class="cursoProf">Instructor: Gerardo Parra</p><a class="card-link" href="#">Registrarse</a><a class="card-link" href="#">Informacion</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div class="card">
                                <div class="card-body"><img class="img-fluid imgCur" src="assets/img/uml.png"/>
                                    <h6 class="text-muted card-subtitle mb-2">UML: Casos de Uso &amp; &nbsp;Diagramas</h6>
                                    <p class="cursoProf">Instructor: Javier Torres</p><a class="card-link" href="#">Registrarse</a><a class="card-link" href="#">Informacion</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div class="card">
                                <div class="card-body"><img class="img-fluid imgCur" src="assets/img/bd.jpeg"/>
                                    <h6 class="text-muted card-subtitle mb-2">Base de Datos (Intermedio)</h6>
                                    <p class="cursoProf">Instructor: Ricardo Muro</p><a class="card-link" href="#">Registrarse</a><a class="card-link" href="#">Informacion</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div class="card">
                                <div class="card-body"><img class="img-fluid imgCur" src="assets/img/bd.jpeg"/>
                                    <h6 class="text-muted card-subtitle mb-2">Base de Datos (Avanzado)</h6>
                                    <p class="cursoProf">Instructor: Javier Torres</p><a class="card-link" href="#">Registrarse</a><a class="card-link" href="#">Informacion</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div class="card">
                                <div class="card-body"><img class="img-fluid imgCur" src="assets/img/bd.jpeg"/>
                                    <h6 class="text-muted card-subtitle mb-2">Base de Datos (Basico)</h6>
                                    <p class="cursoProf">Instructor: Javier Torres</p><a class="card-link" href="#">Registrarse</a><a class="card-link" href="#">Informacion</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class="invisible titulosIndex">Heading</h1>
            </section>
            <div class="team-boxed">
                <h1 class="invisible titulosIndex">Heading</h1>
                <h2 class="titulosIndex">Profesores Kokua</h2>
                <h3 class="subIndex">Los mejores profesores a tu alcance</h3>
                <div class="container">
                    <div class="row people">
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box"><img class="rounded-circle" src="assets/img/1.jpg"/>
                                <h3 class="name">Javier Torres</h3>
                                <p class="title">UTNG</p>
                                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                                <div class="social"><a href="#"></a><a href="#"><i class="material-icons">mail_outline</i></a><a href="#"></a></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box"><img class="rounded-circle" src="assets/img/2.jpg"/>
                                <h3 class="name">Anireya&nbsp;</h3>
                                <p class="title">UTNG</p>
                                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                                <div class="social"><a href="#"></a><a href="#"><i class="material-icons">mail_outline</i></a><a href="#"></a></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box"><img class="rounded-circle" src="assets/img/3.jpg"/>
                                <h3 class="name">Barry</h3>
                                <p class="title">UTNG</p>
                                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                                <div class="social"><a href="#"></a><a href="#"><i class="material-icons">mail_outline</i></a><a href="#"></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="footer-dark">
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-3 col-xl-2 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Web design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Hosting</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-md-3 col-xl-2 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Kokua</a></li>
                                    <li><a href="#">Equipo</a></li>
                                    <li><a href="#">Carreras</a></li>
                                </ul>
                            </div>
                            <div class="col-md-6 col-xl-8 item text">
                                <h3>Kokua UTNG</h3>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                            </div>
                            <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                        </div>
                        <p class="copyright">Kokua UTNG © 2019</p>
                    </div>
                </footer>
            </div>
            
        </div>
    )
}

// const methods = {
//     componentDidMount(){
//         window.location.reload();
//     }
// }

export default LandingPage
