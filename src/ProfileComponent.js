import React, { Component,Fragment } from 'react'
import { Bar,Polar } from 'react-chartjs-2';
import {connect} from 'react-redux'
import {Animated} from 'react-animated-css'
import './ProfileComponent.css'

class ProfileComponent extends Component {
    state = {
        chartData: {},
        devOpsAverage: 0,
        webAverage: 0,
        movilAverage: 0,
        hardwareAverage: 0,
        fundamentosAverage: 0,
        currentStudent: {},
        graphView: ''
    }

    getChartDataTeacher(courses){
        let labelsTeacher = courses.map(course => {
            return course.name
        })

        let dataTeacher = courses.map(course => {
            return course.grades
        })
        this.setState({
            chartData:{
              labels: labelsTeacher,
              datasets:[
                {
                  label:'Population',
                  data: dataTeacher,
                  backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                  ]
                }
              ]
            }
          });
    }
    getChartData(devOps, web, movil, hardware, fundamentos){
        this.setState({
          chartData:{
            labels: ['DevOps', 'Web', 'Movil', 'Hardware', 'Fundamentos'],
            datasets:[
              {
                label:'Population',
                data:[

                    devOps,
                    web,
                    movil,
                    hardware,
                    fundamentos
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        });
      }

      handleGraphView = (graphName) => {
        let Scroll = require('react-scroll')
        let scroll = Scroll.animateScroll;

        this.setState({
            graphView: graphName
        })
        scroll.scrollToBottom()
      }



      componentDidMount = () => {
        const token = localStorage.getItem("token")
        const urlSplit = this.props.history.location.pathname.split("/")
        const url = urlSplit[3]
        const path = urlSplit[2]// checks where to fetch. either student or teacher path
        
        fetch(`https://lmskokua.herokuapp.com/api/v1/${path}s/${url}/${path}_grades`, {
            headers: {
                "Authorization": `Bearer ${token}`
           }
        })
        .then(resp => resp.json())
        .then(data => {

            if(path === "teacher"){
                this.getChartDataTeacher(data)
            }
            else{
                this.getChartData(data.devOps, data.web, data.movil, data.hardware, data.fundamentos);
            } 

        })
    }
       
    render() {
        return (
            <div className="container-profile">

                    {
                        Object.keys(this.props.currentUser).length !== 0 ?
                            <div className="info-profile">
                                <br/><br/><br/><br/>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="image-profile">
                                            <img src={this.props.currentUser.image_url} className="radius-image"/>
                                                <br/>
                                        </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="container">
                                                <h1 className="card-title title">{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>
                                                <hr/>
                                                <p className="card-text text">{this.props.currentUser.bio}</p>
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            null
                    }
                    <br/><br/>
                <div className="container">
                    <h4>Ver Promedio de Calificaciones por Materia</h4>
                    <div className="paddingButton">
                        <button className="button-profile" onClick={() => this.handleGraphView("Polar")}>Grafico Polar</button>
                        <button className="button-profile" onClick={() => this.handleGraphView("Bar")}>Grafico de Barras</button>
                    </div>
                    <br/>
                    {
                        this.state.graphView ?
                            <Fragment>
                                {
                                    this.state.graphView === "Bar" ?
                                        <Bar
                                            data={this.state.chartData}
                                            options={{
                                                title:{
                                                    display:true,
                                                    text: 'Promedio en Grafico de Barras',
                                                    fontSize:20
                                                },
                                                legend:{
                                                    display:false,
                                                    position: 'bottom'
                                                }
                                            }}
                                        />
                                        :
                                        <Polar
                                            data={this.state.chartData}
                                            options={{
                                                title:{
                                                    display: 'hello',
                                                    text: 'Promedio en Grafico Polar',
                                                    fontSize:20
                                                },
                                                legend:{
                                                    display:true,
                                                    position:'bottom'
                                                }
                                            }}
                                        />
                                }
                            </Fragment>
                            :
                            null
                    }
                    <br/>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(ProfileComponent)
