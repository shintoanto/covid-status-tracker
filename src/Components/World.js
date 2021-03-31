import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import axios from 'axios'

class World extends Component {
    constructor() {
        super();
        this.state = {
            worldData: []
        }
    }


    componentDidMount() {
        axios.get("https://corona.lmao.ninja/v2/countries").then((response) => {
            this.setState({ worldData: response.data });
        })

    }
    render() {
        return (
            <table className="table table-primary table-bordered table-stripped">
                <thead>
                    <tr>
                        <td>Country</td>
                        <td>Total Cases</td>
                        <td>Recovered</td>
                        <td>Deaths</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.worldData.map((itm, ky) => {
                            return (
                                <tr>
                                    <td>{itm.country}
                                        <img style={{ width: '64px', marginLeft: '10px' }} src={itm.countryInfo.flag} alt=""></img>
                                    </td>
                                    <td>{itm.cases}</td>
                                    <td>{itm.recovered}</td>
                                    <td>{itm.deaths}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}
export default World;