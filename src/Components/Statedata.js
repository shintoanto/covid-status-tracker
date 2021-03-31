import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import axios from 'axios';

class Statedata extends Component {

    constructor() {
        super();
        this.state = {
            stateData: {}
        }
    }

    componentDidMount() {
        axios.get("https://api.covid19india.org/state_district_wise.json").then((response) => {
            this.setState({ stateData: response.data });
        })
    }

    render() {
        let keys = Object.keys(this.state.stateData);

        return (
            <div className="row">
                <div className="col-md-12">
                    <Accordion>
                        {
                            keys.map((itm, ky) => {
                                let districts = this.state.stateData[itm].districtData;
                                let disctrict_keys = Object.keys(districts);

                                let total_active = 0;
                                let total_confirmed = 0;
                                let total_deaths = 0;
                                let total_recover = 0;

                                let district_list = [];
                                for (let x in districts) {
                                    total_active += districts[x].active;
                                    total_confirmed += districts[x].confirmed;
                                    total_deaths += districts[x].deceased;
                                    total_recover += districts[x].recovered;
                                    let ob = districts[x];
                                    ob["district_name"] = x;
                                    district_list.push(ob);

                                }

                                return (
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="primary" eventKey={ky}>
                                                {itm}-Total active -{total_active}-Total confirmed{total_confirmed}-Total Deaths-{total_deaths}-Total Rocovery{total_recover}
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={ky}>
                                            <Card.Body>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <td>District</td>
                                                            <td>Confirmed</td>
                                                            <td>Active</td>
                                                            <td>Recovered</td>
                                                            <td>Deaths</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            district_list.map((itm, ky) => {
                                                                return (
                                                                    <tr>
                                                                        <td>{itm.district_name}</td>
                                                                        <td>{itm.confirmed}</td>
                                                                        <td>{itm.active}</td>
                                                                        <td>{itm.recovered}</td>
                                                                        <td>{itm.deceased}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )
                            })
                        }

                    </Accordion>
                </div>
            </div>
        );
    }
}
export default Statedata;