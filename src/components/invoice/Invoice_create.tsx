
import axios from 'axios';
import * as React from 'react';
import { Button, Col, Container, Dropdown, DropdownButton, Form, FormControl, InputGroup, Row, Table } from 'react-bootstrap';
import * as ReactDOM from 'react-dom';
/**
 * Create Invoice form
 */
export default class InvoiceCreateForm extends React.Component {

    public render() {
        return (<div>
            <Container>
                <Row className='rows'>
                    <Col className='columns'></Col>
                    <Col className='columns' md={10}>
                    <Form>
                        <Form.Group controlId='invoice.name'>
                            <Form.Label>Invoice Name</Form.Label>
                            <Form.Control type='text' placeholder='Invoice name' />
                            <Form.Text className='text-muted'>
                            Invoice Name
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId='invoice.amount'>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type='text' placeholder='Amount(¥)' />
                            <Form.Text className='text-muted'>
                            Amount (¥)
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId='invoice.client'>
                            <Form.Label>Client</Form.Label>
                            <Form.Control as='select'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Form.Control>
                            <Form.Text className='text-muted'>
                            Please choose client.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId='invoice.payee'>
                            <Form.Label>Payee</Form.Label>
                            <Form.Control as='select'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Form.Control>
                            <Form.Text className='text-muted'>
                            Please choose Payee.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId='invoice.status'>
                            <Form.Label>Status</Form.Label>
                            <Form.Control as='select'>
                            <option>New</option>
                            <option>Open</option>
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Closed</option>
                            </Form.Control>
                            <Form.Text className='text-muted'>
                            Please choose Status.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId='invoice.desc'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as='textarea' rows={6} placeholder='Description' />
                            <Form.Text className='text-muted'>
                             No more than 255 Characters.
                            </Form.Text>
                        </Form.Group>
                        </Form>
                        <Container>
                            <Row>
                                <Col></Col>
                                <Col md={2}><Button variant='outline-primary' >cancel</Button></Col>
                                <Col md={1}><Button variant='primary' >Submit</Button></Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col className='columns'></Col>
                </Row>
            </Container>
        </div>);

    }
}
