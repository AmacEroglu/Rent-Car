import React, { Component } from 'react'
import { Row, Table } from 'reactstrap';

export default class CarList extends Component {
    render() {
        return (
            <>
                <Row>
                    {/* <h2>Araç Listesi - {this.props.carInfo.name}</h2> */}
                </Row>
                <Row>
                    <Table bordered hover striped className='mt-4'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Marka</th>
                                <th>Model</th>
                                <th>Yılı</th>
                                <th>Durumu</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.props.cars.map(c => (
                                    <tr key={c.carsId} onClick={() => this.props.changeSelected(c)}>
                                        <td>{c.carsId}</td>
                                        <td>{c.name}</td>
                                        <td>{c.model}</td>
                                        <td>{c.year}</td>
                                        <td>{c.situation}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Row>
            </>
        )
    }
}
