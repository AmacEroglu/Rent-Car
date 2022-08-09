import './App.css';
import TopNavBar from './Components/TopNavBar';
import { Container, Col, Row } from 'reactstrap';
import { Routes, Route } from 'react-router-dom';
import DashBoard from './DashBoard';
import Cars from './Components/Cars';
import NotFound404 from './Components/NotFound404';
import CarList from './CarList';
import AddCar from './AddCar';
import './util.js';

function App() {
  return (
    <>
      <Container>
        <Row>
          <TopNavBar />
        </Row>
        <Row>
          <Col md='12'>
            <Routes>
              <Route path='/' element={<DashBoard />} />
              <Route path='Cars' element={<Cars />} />
              <Route path='/NotFound404' element={<NotFound404 />} />
              <Route path='/CarsList' element={<CarList />} />
              <Route path='/*' element={<NotFound404 />} />
              <Route path='AddCar' element={<AddCar />} />
          </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
