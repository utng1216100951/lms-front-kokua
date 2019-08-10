import React from 'react'
import {Animated} from 'react-animated-css'

export default function AboutComponent() {

    return (
        <div style={{background: "white", width: "90%", margin: "20px auto"}}>
            <br/><br/>
            <div class="row">
                <div class="col-sm-2">
                </div>
                <div class="col-sm-8">
                    <div class="jumbotron">
                        <h1 class="display-4">KOKUA</h1>
                        <p class="lead">Es una plataforma de cursos en línea para los estudiantes de la Universidad Tecnológica del Norte de Guanajuato.</p>
                        <hr class="my-4"/>
                        <p>Los cursos son publicados por docentes de la universidad, de esta manera se facilita el acceso a la infomación a los alumnos acerca de las materias que se imparten.</p>
                    </div>
                    <div>
                        <h1 class="shadow p-3 mb-5 rounded">¿Cómo surgió?</h1>
                        <br/>
                        <h4>
                            Kokua es un proyecto desarrollado por estudiantes de la misma universidad tecnológica, surgió con la necesidad de un proyecto innovador para la materia de Integradora.<br/>
                            Dentro de la materia se contempló una problemática que abrumaba a muchos de los estudiantes, esto es la carencia de tiempo por parte de profesores, como también de los mismos alumnos,
                            esto provoca que no se logre concretar una asesoría presencial para cualquier tipo de duda respecto a la materia.
                        </h4>
                    </div>
                    <div>
                        <h1 class="shadow p-3 mb-5 rounded">¿A quién va dirigido?</h1>
                        <br/>
                        <h4>
                            Kokua está dirigida específicamente para los profesores y alumnos de la Universidad Tecnológica del Norte de Guanajuato.
                        </h4>
                    </div>
                </div>
                <div class="col-sm-2">
                </div>
            </div>

            <div class="row">
                <div class="col-sm-1">
                </div>
                <div class="col-sm-10">
                    <hr class="my-4"/>
                </div>
                <div class="col-sm-1">
                </div>
            </div>

            <div class="row">
                <div class="col-sm-2">
                </div>
                <div class="col-sm-8">
                    <h2 class="shadow p-3 mb-5 rounded">Universidad Tecnológica del Norte de Guanajuato</h2>
                    <br/>
                    {/* Filosofía */}
                    <div class="alert alert-primary" role="alert">
                        <h3>Filosofía</h3>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header bg-primary" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">MISIÓN</button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <p class="text-justify">Somos una institución de
                                        educación superior tecnológica que forma
                                        profesionistas competitivos a través de programas de
                                        calidad para contribuir al desarrollo del estado.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header bg-primary" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">VISIÓN</button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <p class="text-justify">
                                        En el 2020 seremos reconocidos por nuestros egresados formados
                                        integral y globalmente, con empleabilidad acorde a su perfil
                                        superior a la media estatal; por nuestros programas de grado
                                        acreditados o evaluados al 100% y por contar con un postgrado;
                                        15% de nuestros profesores participarán en programas de
                                        movilidad y 50% de los cuerpos académicos estarán
                                        consolidados.<br/> <br/> Nos distinguiremos por un ambiente
                                        de equidad y sustentabilidad reconocidas y participaremos en 3
                                        programas de investigación aplicada orientados a la
                                        innovación y transferencia tecnológica en
                                        proyectos sociales y productivos.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header bg-primary" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">VALORES</button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    <p class="texto" align="justify">Para la UTNG los valores son el
                                        marco del comportamiento que deben tener sus integrantes, estos
                                        se determinaron en base a la razón de ser; al
                                        propósito de creación; y a la proyección
                                        en el futuro (visión) de la institución quedando
                                        redactados y descritos de la manera siguiente:</p>
                                    <ol>
                                        <li>Honestidad:
                                            <ul>
                                                <li>Ofrecemos lo que podemos cumplir y nos esmeramos en
                                                    lograrlo.</li>
                                                <li>Actuamos con exactitud y puntualidad.</li>
                                                <li>No dejamos los resultados al azar.</li>
                                                <li>Honramos y defendemos la propiedad ajena. Obramos con
                                                    sentido consciente de justicia.</li>
                                                <li>Respetamos la verdad.</li>

                                            </ul>
                                        </li>
                                        <li>Responsabilidad:
                                            <ul>
                                                <li>Ponemos atención especial en nuestras decisiones.</li>
                                                <li>Damos la cara por nuestros actos y sus consecuencias.</li>
                                                <li>Somos previsores: planificamos y trabajamos con orden.</li>
                                                <li>Reconocemos nuestros errores al tiempo que buscamos
                                                    corregirlos.</li>

                                            </ul>
                                        </li>
                                        <li>Respeto:
                                            <ul>
                                                <li>Tratamos a las personas con dignidad y apreciamos sus
                                                    opiniones.</li>
                                                <li>Tenemos consideración y deferencia con los
                                                    sentimientos de los otros.</li>
                                                <li>Nos esforzamos por comprender sus situaciones
                                                    particulares.</li>
                                            </ul>
                                        </li>
                                        <li>Trabajo en equipo:
                                            <ul>
                                                <li>El éxito de nuestra organización lo
                                                    construimos juntos.</li>
                                                <li>Formamos equipo con todo compañero, incluidos los
                                                    no afines.</li>
                                                <li>La armonía no se logra por casualidad: Se basa en
                                                    el conocimiento y el aprecio por todos los miembros del
                                                    equipo.</li>
                                                <li>Participamos activamente en equipos de alto
                                                    desempeño y multidisciplinarios.</li>

                                            </ul>
                                        </li>
                                        <li>Comunicación:
                                            <ul>
                                                <li>Nos esforzamos más en escuchar lo que tratan de
                                                    decirnos.</li>
                                                <li>No damos nada por obvio.</li>
                                                <li>No suponemos.</li>
                                                <li>Evitamos los prejuicios.</li>
                                                <li>Si no nos llega la información la buscamos.</li>
                                                <li>No nos callamos cuando tenemos algo que decir.</li>

                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header bg-primary" id="headingFour">
                                <h2 class="mb-0">
                                    <button class="btn btn-link text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        POLÍTICA DE CALIDAD</button>
                                </h2>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <div class="card-body">
                                    <p class="text-justify">La Universidad Tecnológica del
                                        Norte de Guanajuato se compromete con sus alumnos y la sociedad
                                        a ofrecer servicios educativos del nivel superior así
                                        como servicios de educación continua y
                                        tecnológicos con calidad, empleando de manera eficiente
                                        los recursos y aplicando la mejora continua en beneficio del
                                        desarrollo regional y ambiental previniendo la
                                        contaminación y apegándose a las disposiciones
                                        legales ambientales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>

                    {/* Ubicación */}
                    <div class="alert alert-primary" role="alert">
                        <h3>Ubicación</h3>
                    </div>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.623644740156!2d-100.93313418459634!3d21.167370788406682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b3efe2e87ccd7%3A0xcf1c80c255f1993e!2sUniversidad+Tecnologica+del+Norte+de+Guanajuato!5e0!3m2!1ses-419!2smx!4v1562634733389!5m2!1ses-419!2smx"
                    width="600" height="450" frameborder="0" style={{border: "0"}} allowfullscreen></iframe>
                    </div>
                </div>
                <br/>
                <br/>
                <div class="col-sm-2">
                </div>
            </div>

            <div class="row">
                <div class="col-sm-1">
                </div>
                <div class="col-sm-10">
                    <hr class="my-4"/>
                </div>
                <div class="col-sm-1">
                </div>
            </div>

            <div class="row">
                <div class="col-sm-2">
                </div>
                <div class="col-sm-8">
                    <h2 class="shadow p-3 mb-5 rounded">Desarroladores</h2>
                    <br/>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <div>
                                        <div class="card" style={{width: "18rem"}}>
                                            <img src="https://d500.epimg.net/cincodias/imagenes/2016/03/16/lifestyle/1458143779_942162_1458143814_noticia_normal.jpg" class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <p class="card-text">qowiehdnascjkasndqbwieudjbasfkjasbd.</p>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <div class="card" style={{width: "18rem"}}>
                                            <img src="https://d500.epimg.net/cincodias/imagenes/2016/03/16/lifestyle/1458143779_942162_1458143814_noticia_normal.jpg" class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <p class="card-text">qowiehdnascjkasndqbwieudjbasfkjasbd.</p>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <div class="card" style={{width: "18rem"}}>
                                            <img src="https://d500.epimg.net/cincodias/imagenes/2016/03/16/lifestyle/1458143779_942162_1458143814_noticia_normal.jpg" class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <p class="card-text">qowiehdnascjkasndqbwieudjbasfkjasbd.</p>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-sm-2">
                </div>


            </div>


        </div>
    )
}
