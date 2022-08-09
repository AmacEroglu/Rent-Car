
import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import CarList from '../CarList'
import CarDetail from './CarDetail'


export default class Cars extends Component {
    state = {

        selectedcar: {},

        cars: [
            {
                carsId: 1,
                name: 'Ford',
                model: 'Mustang',
                year: 1969,
                situation: 'Kiralık',
                comments: [
                    {
                        commentId: 1,
                        comment: 'Expensive car',
                        date: new Date(2022, 1, 27)
                    },
                    {
                        commentId: 2,
                        comment: 'So fast',
                        date: new Date(2022, 3, 12)
                    }
                ]

            },
            {
                carsId: 2,
                name: 'Ferrari',
                model: 'Enzo',
                year: 2022,
                situation: 'Parkta',
                comments: [
                    {
                        commentId: 3,
                        comment: 'Beauty',
                        date: new Date(2022, 1, 27)
                    },
                    {
                        commentId: 4,
                        comment: 'Love it',
                        date: new Date(2022, 3, 12)
                    }
                ]

            },
        ]
    }
    changeCars = (cars) => {
        console.log('change Cars çalıştı ' + cars.name + ' ' + cars.model + ' ' + cars.year)
        this.setState({ selectedcar: cars });
    }


    render() {


        return (
            <Row>
                <Col md='6'>
                    <h4>Araba Listesi</h4>
                    <CarList cars={this.state.cars} changeSelected={this.changeCars} />
                </Col>
                <Col md='6'>
                    <h4>Araba Detayları</h4>
                    <CarDetail currentCar={this.state.selectedcar} />
                </Col>
            </Row>
        )
    }
}
