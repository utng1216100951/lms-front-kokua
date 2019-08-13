import React from 'react'
import {Animated} from 'react-animated-css'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import "./AboutComponent.css"



  export default function AboutComponent(){
    return (
      <div>
        <div style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }} id="kokua">
          <div className="container">
          <MDBRow>
              <MDBCol>
                <MDBJumbotron style={{ padding: 0 }} className="back-about">
                  <MDBCol className="text-white text-center py-5 px-4 my-5" >
                    <MDBCol className="py-5">
                      <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Kokua</MDBCardTitle>
                        <p className="mx-5 mb-5">Es una plataforma de cursos en línea para los estudiantes
                          de la Universidad Tecnológica del Norte de Guanajuato.
                        </p>
                        <p className="mx-5 mb-5">
                          Los cursos son publicados por docentes de la universidad,
                          de esta manera se facilita el acceso a la infomación a los alumnos acerca de
                          las materias que se imparten.
                        </p>
                    </MDBCol>
                  </MDBCol>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
        <div>
          <MDBContainer>
          <MDBRow>
            <MDBCol size="6" id="como">
              <p className="title-about">Como Surgio?</p>
              <p className="text-about">
              es un proyecto desarrollado por estudiantes de la misma universidad tecnológica, surgió con la
              necesidad de un proyecto innovador para la materia de Integradora.
              </p>
            </MDBCol>
            <MDBCol size="6" id="dirigdo">
              <p className="title-about">A Quien Esta Dirigido?</p>
              <p className="text-about">
              dirigida específicamente para los profesores y alumnos de la Universidad Tecnológica del Norte de
              Guanajuato.
              </p>
              </MDBCol>
          </MDBRow>
          </MDBContainer>
        </div>
        <div>
          <MDBContainer className="mt-4">
            <MDBRow>
              <MDBCol md="12">
                <h2>Default</h2>
                <MDBNav className="mt-5 nav-pills">
                  <MDBNavItem>
                    <MDBNavLink to="#" active={this.state.items["default"] === "1"} onClick={this.togglePills("default", "1")} >
                      Home
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#" active={this.state.items["default"] === "2"} onClick={this.togglePills("default", "2")} >
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#" active={this.state.items["default"] === "3"} onClick={this.togglePills("default", "3")} >
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.items["default"]}>
                  <MDBTabPane tabId="1">
                    <p>
                      Consequat occaecat ullamco amet non eiusmod nostrud dolore
                      irure incididunt est duis anim sunt officia. Fugiat velit
                      proident aliquip nisi incididunt nostrud exercitation
                      proident est nisi. Irure magna elit commodo anim ex veniam
                      culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
                      consequat eu adipisicing minim anim aliquip cupidatat culpa
                      excepteur quis. Occaecat sit eu exercitation irure Lorem
                      incididunt nostrud.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="2">
                    <p>
                      Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa
                      mollit commodo mollit ex. Aute sunt incididunt amet commodo
                      est sint nisi deserunt pariatur do. Aliquip ex eiusmod
                      voluptate exercitation cillum id incididunt elit sunt. Qui
                      minim sit magna Lorem id et dolore velit Lorem amet
                      exercitation duis deserunt. Anim id labore elit adipisicing
                      ut in id occaecat pariatur ut ullamco ea tempor duis.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="3">
                    <p>
                      Est quis nulla laborum officia ad nisi ex nostrud culpa
                      Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis
                      ipsum nisi elit fugiat commodo sunt reprehenderit laborum
                      veniam eu veniam. Eiusmod minim exercitation fugiat irure ex
                      labore incididunt do fugiat commodo aliquip sit id deserunt
                      reprehenderit aliquip nostrud. Amet ex cupidatat excepteur
                      aute veniam incididunt mollit cupidatat esse irure officia
                      elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit
                      labore ipsum laboris ipsum commodo sunt tempor enim
                      incididunt. Commodo quis sunt dolore aliquip aute tempor
                      irure magna enim minim reprehenderit. Ullamco consectetur
                      culpa veniam sint cillum aliqua incididunt velit ullamco
                      sunt ullamco quis quis commodo voluptate. Mollit nulla
                      nostrud adipisicing aliqua cupidatat aliqua pariatur mollit
                      voluptate voluptate consequat non.
                    </p>
                  </MDBTabPane>
                </MDBTabContent>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    )
  }


  

/*
     <div>
            <div>
                <div class="card card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Others/forest2.jpg)">
                    <div class="text-white text-center rgba-stylish-strong py-5 px-4">
                        <div class="py-5">

                        <h2 class="h2 orange-text">Kokua</h2>
                        <p class="mb-4 pb-2 px-md-5 mx-md-5">Es una plataforma de cursos en línea para los estudiantes de la Universidad Tecnológica del Norte de Guanajuato.</p>

                        <p class="mb-4 pb-2 px-md-5 mx-md-5">Los cursos son publicados por docentes de la universidad, de esta manera se facilita el acceso a la infomación a los alumnos acerca de las materias que se imparten.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="surgio-tab" data-toggle="tab" href="#surgio" role="tab" aria-controls="surgio"
                      aria-selected="true">Como Surjio?</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="dirigido-tab" data-toggle="tab" href="#dirigido" role="tab" aria-controls="dirigido"
                      aria-selected="false">A Quien Esta Dirijido?</a>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="surgio" role="tabpanel" aria-labelledby="surgio-tab">Kokua
                    es un proyecto desarrollado por estudiantes de la misma universidad tecnológica, surgió con la
                    necesidad de un proyecto innovador para la materia de Integradora.
                    <br/>
                    Dentro de la materia se contempló una problemática que abrumaba a muchos de los estudiantes, esto es
                    la carencia de tiempo por parte de profesores, como también de los mismos alumnos,
                    esto provoca que no se logre concretar una asesoría presencial para cualquier tipo de duda respecto
                    a la materia.
                    </div>
                  <div class="tab-pane fade" id="dirigido" role="tabpanel" aria-labelledby="dirigido-tab">Kokua está
                  dirigida específicamente para los profesores y alumnos de la Universidad Tecnológica del Norte de
                  Guanajuato.
                  </div>
                </div>
            </div>
            <div>
                <div class="row">
                  <div class="col-4">
                    <div class="list-group" id="list-tab" role="tablist">
                      <a class="list-group-item list-group-item-action active" id="list-mision-list" data-toggle="list" href="#list-mision"
                        role="tab" aria-controls="mision">Mision</a>
                      <a class="list-group-item list-group-item-action" id="list-vision-list" data-toggle="list" href="#list-vision"
                        role="tab" aria-controls="vision">Vision</a>
                      <a class="list-group-item list-group-item-action" id="list-valores-list" data-toggle="list" href="#list-valores"
                        role="tab" aria-controls="valores">Valores</a>
                      <a class="list-group-item list-group-item-action" id="list-politicas-list" data-toggle="list" href="#list-politicas"
                        role="tab" aria-controls="politicas">Politicas</a>
                    </div>
                  </div>
                  <div class="col-8">
                    <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="list-mision" role="tabpanel" aria-labelledby="list-mision-list">
                        Somos una institución de educación superior tecnológica que forma profesionistas competitivos a
                        través de programas de calidad para contribuir al desarrollo del estado.
                      </div>
                      <div class="tab-pane fade" id="list-vision" role="tabpanel" aria-labelledby="list-vision-list">
                        En el 2020 seremos reconocidos por nuestros egresados formados integral y globalmente, con
                        empleabilidad acorde a su perfil superior a la media estatal; por nuestros programas de grado
                        acreditados o evaluados al 100% y por contar con un postgrado; 15% de nuestros profesores
                        participarán en programas de movilidad y 50% de los cuerpos académicos estarán consolidados.
                        <br/> <br/>
                        Nos distinguiremos por un ambiente de equidad y sustentabilidad reconocidas y participaremos en
                        3 programas de investigación aplicada orientados a la innovación y transferencia tecnológica en
                        proyectos sociales y productivos.
                      </div>
                      <div class="tab-pane fade" id="list-valores" role="tabpanel" aria-labelledby="list-valores-list">
                        Para la UTNG los valores son el marco del comportamiento que deben tener sus integrantes, estos
                        se determinaron en base a la razón de ser; al propósito de creación; y a la proyección
                        en el futuro (visión) de la institución quedando redactados y descritos de la manera siguiente:
                        <ul>
                            <li>Honestidad</li>
                            <li>Responsabilidad</li>
                            <li>Respeto</li>
                            <li>Trabajo en equipo</li>
                            <li>Comunicación</li>
                        </ul>
                      </div>
                      <div class="tab-pane fade" id="list-politicas" role="tabpanel" aria-labelledby="list-politicas-list">
                        La Universidad Tecnológica del Norte de Guanajuato se compromete con sus alumnos y la sociedad
                        a ofrecer servicios educativos del nivel superior así como servicios de educación continua y
                        tecnológicos con calidad, empleando de manera eficiente los recursos y aplicando la mejora
                        continua en beneficio del  desarrollo regional y ambiental previniendo la contaminación y
                        apegándose a las disposiciones legales ambientales.
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div>
                <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 500px">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.623644740156!2d-100.93313418459634!3d21.167370788406682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b3efe2e87ccd7%3A0xcf1c80c255f1993e!2sUniversidad+Tecnologica+del+Norte+de+Guanajuato!5e0!3m2!1ses-419!2smx!4v1562634733389!5m2!1ses-419!2smx"
                    width="600" height="450" frameborder="0" style={{border: "0"}} allowfullscreen></iframe>
                </div>
            </div>
            <div>
                <section class="team-section text-center my-5">


                  <h2 class="h1-responsive font-weight-bold my-5">Desarrolladores</h2>

                  <p class="grey-text w-responsive mx-auto mb-5">Kokua fue desarrollada por tres estudiantes de la UTNG
                  que al ver la necesidad suya y de sus companeros de tener asesorias en linea, devido a falta de tiempo
                  tanto de ellos como los profesores.</p>


                  <div class="row">


                    <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
                      <div class="avatar mx-auto">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle z-depth-1"
                          alt="Sample avatar"></img>
                      </div>

                      <h5 class="font-weight-bold mt-4 mb-3">Anna Williams</h5>
                      <p class="text-uppercase blue-text"><strong>Graphic designer</strong></p>
                      <p class="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci sed quia non numquam modi tempora eius.</p>
                      <ul class="list-unstyled mb-0">

                        <a class="p-2 fa-lg fb-ic">
                          <i class="fab fa-facebook-f blue-text"> </i>
                        </a>

                        <a class="p-2 fa-lg tw-ic">
                          <i class="fab fa-twitter blue-text"> </i>
                        </a>

                        <a class="p-2 fa-lg ins-ic">
                          <i class="fab fa-instagram blue-text"> </i>
                        </a>
                      </ul>
                    </div>




                    <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
                      <div class="avatar mx-auto">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" class="rounded-circle z-depth-1"
                          alt="Sample avatar"></img>
                      </div>

                      <h5 class="font-weight-bold mt-4 mb-3">John Doe</h5>
                      <p class="text-uppercase blue-text"><strong>Web developer</strong></p>
                      <p class="grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium
                        doloremque rem laudantium totam aperiam.</p>
                      <ul class="list-unstyled mb-0">

                        <a class="p-2 fa-lg fb-ic">
                          <i class="fab fa-facebook-f blue-text"> </i>
                        </a>

                        <a class="p-2 fa-lg ins-ic">
                          <i class="fab fa-instagram blue-text"> </i>
                        </a>
                      </ul>
                    </div>




                    <div class="col-lg-3 col-md-6 mb-md-0 mb-5">
                      <div class="avatar mx-auto">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" class="rounded-circle z-depth-1"
                          alt="Sample avatar"></img>
                       </div>

                      <h5 class="font-weight-bold mt-4 mb-3">Maria Smith</h5>
                      <p class="text-uppercase blue-text"><strong>Photographer</strong></p>
                      <p class="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim est fugiat nulla id eu laborum.</p>
                      <ul class="list-unstyled mb-0">

                        <a class="p-2 fa-lg fb-ic">
                          <i class="fab fa-facebook-f blue-text"> </i>
                        </a>

                        <a class="p-2 fa-lg ins-ic">
                          <i class="fab fa-instagram blue-text"> </i>
                        </a>

                        <a class="p-2 fa-lg ins-ic">
                          <i class="fab fa-dribbble blue-text"> </i>
                        </a>
                      </ul>
                    </div>


                    <div class="col-lg-3 col-md-6">
                      <div class="avatar mx-auto">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" class="rounded-circle z-depth-1"
                          alt="Sample avatar"></img>
                       </div>

                      <h5 class="font-weight-bold mt-4 mb-3">Tom Adams</h5>
                      <p class="text-uppercase blue-text"><strong>Backend developer</strong></p>
                      <p class="grey-text">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur
                        totam officia voluptates perferendis voluptatibus aut.</p>
                      <ul class="list-unstyled mb-0">

                        <a class="p-2 fa-lg fb-ic">
                          <i class="fab fa-facebook-f blue-text"> </i>
                        </a>

                        <a class="p-2 fa-lg ins-ic">
                          <i class="fab fa-github blue-text"> </i>
                        </a>
                      </ul>
                    </div>
                  </div>
                </section>
            </div>
        </div>
 */
