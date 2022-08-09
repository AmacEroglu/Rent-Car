import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavLink} from 'reactstrap';
import Logo from '../logo.png';

export default class TopNavBar extends Component {
  render() {
    return (
        <Navbar>
            <NavbarBrand>
             <img src={Logo} className='logo' />
            </NavbarBrand>
            <NavLink href='/'>Anasayfa</NavLink>
            <NavLink href='Cars'>Cars</NavLink>
            <NavLink href='AddCar'>Yeni Araba</NavLink>
            <NavLink href='CarsList'>Araba Listesi</NavLink>
        </Navbar>
    )
  }
}
