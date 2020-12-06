
import axios from 'axios';
import * as React from 'react';
import { Button, Col, Container, Dropdown, DropdownButton, Form, FormControl, InputGroup, Row, Table } from 'react-bootstrap';
import * as ReactDOM from 'react-dom';
/**
 * Create Invoice form
 */
export default class InvoiceCreateForm extends React.Component {
    public state = {
        clients: [],
        payees: [],
        error: false,
        isValidationError: false,
        validationErrorMessage: String,
        invoiceName: String,
    };

    private inputInvoiceName: React.RefObject<any>;
    private inputAmount: React.RefObject<any>;

    constructor(props) {
        super(props);
        this.inputInvoiceName = React.createRef();
    }

    /**
     * Submit function handle
     */
    public onSubmit = () => {
        console.log('Hit me...!!');
        console.log(this.inputInvoiceName.current.value);
    }

    public componentDidMount() {
        axios.get('http://localhost:8000/api/client/').then((response) => {
            this.setState(
              {clients: response.data},
              );

        }).catch((error) => {
            this.setState({error: true});

        });

        axios.get('http://localhost:8000/api/payee/').then((response) => {
            this.setState(
              {payees: response.data},
              );

        }).catch((error) => {
            this.setState({error: true});
        });
    }

    public render() {
        return (<div>
            <Container>
                <Row className='rows'>
                    <Col className='columns'></Col>
                    <Col className='columns' md={10}>
                    <Form>
                        <Form.Group controlId='invoice.name'>
                            <Form.Label>Invoice Name</Form.Label>
                            <Form.Control type='text' placeholder='Invoice name' ref={this.inputInvoiceName} />
                            <Form.Text className='text-muted'>
                            Invoice Name
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId='invoice.amount'>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type='text' placeholder='Amount(¥)' ref={this.inputAmount} />
                            <Form.Text className='text-muted'>
                            Amount (¥)
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId='invoice.client'>
                            <Form.Label>Client</Form.Label>
                            <Form.Control as='select'>
                            {this.state.clients.map((client) => (
                                               <option value={client.Id} key={client.Id}>{client.name}</option>
                                            ))}
                            </Form.Control>
                            <Form.Text className='text-muted'>
                            Please choose client.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId='invoice.payee'>
                            <Form.Label>Payee</Form.Label>
                            <Form.Control as='select'>
                            {this.state.payees.map((payee) => (
                                               <option  value={payee.Id} key={payee.Id}>{payee.name}</option>
                                            ))}
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
                                <Col md={1}><Button variant='primary'  onClick={this.onSubmit}>Submit</Button></Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col className='columns'></Col>
                </Row>
            </Container>
        </div>);

    }
}
