import * as React from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Pagination, Row, Table } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../../components/authentication/login';
import Invoice from '../../components/invoice/invoice';
import InvoiceCreateForm from '../../components/invoice/Invoice_create';
import './shared';
const Styles = styled.div`
  .navbar { background-color: #000080; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #FFFFFF;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #FFFFFF;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
class Main extends React.Component {
    public render() {
        return (

         <div>
           <Styles>

              <Navbar expand='md'>
                    <Navbar.Brand href='/'>CMS</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Form className='form-center'>
                      <FormControl type='text' placeholder='Search' className='' />
                    </Form>
                    <Navbar.Collapse id='basic-navbar-nav'>
                      <Nav className='md'>
                        <Nav.Item><Nav.Link href='/'>Invoice</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/login'>Login</Nav.Link></Nav.Item>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>

           </Styles>
           <Route path='/' exact component={Invoice} />
                <Switch>
                <Route path='/create' component={InvoiceCreateForm} />
                <Route path='/login' component={Login} />
                </Switch>
         </div>

        );
    }
}

export default Main;
