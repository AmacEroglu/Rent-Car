import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import { Alert } from 'reactstrap'

export default class CarsDetail extends Component {
  render() {
    return (
      <>
        <div>Araba Detayı</div>
        <Card className='mb-3'>
          <CardHeader>
            {this.props.currentCar.name} {this.props.currentCar.model}
          </CardHeader>
          <CardBody>
            <Row>
              <Col md='6' mb='5'>
                <Row>
                  <Col md='4'>Marka</Col>
                  <Col md='8'>{this.props.currentCar.name}</Col>
                  <Col md='4' mb='5'>Model</Col>
                  <Col md='8'>{this.props.currentCar.model}</Col>
                </Row>
              </Col>
              <Col md='6' mb='5'>
                <Row>
                  <Col md='4'>Yıl</Col>
                  <Col md='8'>{this.props.currentCar.year}</Col>
                  <Col md='4'>Durumu</Col>
                  <Col md='8'>{this.props.currentCar.situation}</Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Row className='p-2'>
          <Col>
            {this.props.currentCar.comments?.map(c => (
              <div key={c.commentId} className='comment'>
                <Alert color='secondary'>
                  {c.comment}
                </Alert>
                <p className='comment-date'>
                  Yorum tarihi: {c.date.formatDDMMYYYY()}
                </p>
              </div>
            ))}
          </Col>
        </Row>
      </>
    )
  }
}
