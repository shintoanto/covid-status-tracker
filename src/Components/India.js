import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import axios from 'axios'
import Statedata from './Statedata'

class India extends Component {

    constructor() {
        super();
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        axios.get("https://corona.lmao.ninja/v2/countries/india").then((response) => {
            this.setState({ data: response.data })
        })
    }

    render() {
        return (
            <div className="row">

                <div className="col-md-12">
                    <img src="https://www.countryflags.io/in/shiny/64.png" alt='indian flag'></img>
                    <h3>INDIA</h3>
                </div>

                <div className="col-md-12">
                    <div className='row'>

                        <div className="col-md-3">
                            <Card style={{ width: '18rem' }} className="badge badge-primary">
                                <Card.Body>
                                    <Card.Title>TOTAL CASES</Card.Title>
                                    <h2>{this.state.data.cases}</h2>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card style={{ width: '18rem' }} className="badge badge-info">
                                <Card.Body>
                                    <Card.Title>ACTIVE CASES</Card.Title>
                                    <h2>{this.state.data.active}</h2>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card style={{ width: '18rem' }} className="badge badge-success">
                                <Card.Body>
                                    <Card.Title>RECOVERED</Card.Title>
                                    <h2>{this.state.data.recovered}</h2>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card style={{ width: '18rem' }} className="badge badge-danger">
                                <Card.Body>
                                    <Card.Title>DEATH</Card.Title>
                                    <h2>{this.state.data.deaths}</h2>
                                </Card.Body>
                            </Card>
                        </div>




                    </div>
                   
                </div>
                <div className="col-md-12">
                    <Statedata />
                </div>
            </div>

        );
    }
}
export default India;