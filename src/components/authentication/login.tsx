import * as React from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Pagination, Row, Table } from 'react-bootstrap';
const Login: React.FC = (props) => {
    return (
            <div>
             
                <Container>
                    <Row className='rows'>
                        <Col className='columns'></Col>
                        <Col className='columns'><Form>
                            <Form.Group controlId='formBasicEmail'>
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type='email' placeholder='User Name' />
                                <Form.Text className='text-muted'>
                                Please enter your username.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId='formBasicPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Password' />
                            </Form.Group>
                          
                            <Button variant='primary' type='submit'>
                                Login
                            </Button>
                            </Form></Col>
                        <Col className='columns'>

                        </Col>
                    </Row>
                </Container>
            </div>
           );

};

export default Login;
