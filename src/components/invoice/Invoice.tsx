
import axios from 'axios';
import * as React from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Pagination, Row, Table } from 'react-bootstrap';
import * as ReactDOM from 'react-dom';
import Moment from 'react-moment';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { InvoiceModel } from '../../models/invoiceModel';
import InvoiceCreateForm from './Invoice_create';
import SearchForm from './invoice_searchForm';
import Paging from './paging';

/**
 * Invoice Container class component
 */
// TODO: Quick and dirty the datetiem formatting.. Need to re-visit to create a centralised formatting component.
export default class Invoice extends React.Component {

    public state = {
        invoices: [],
        error: false,
    };

    public componentDidMount() {
        axios.get('http://localhost:8000/api/invoice/').then((response) => {
            this.setState(
              {invoices: response.data},
              );
            console.log(this.state.invoices);
        }).catch((error) => {
            this.setState({error: true});
        });
    }

    public render() {
        const active = 2;
        const items = [];
        for (let num = 1; num <= 5; num++) {
        items.push(
          <Pagination.Item key={num} active={num === active}>
            {num}
          </Pagination.Item>,
        );
      }
        return (

          <div className='container' >

                      <div className='col-md'>
                      <div className='col-md'>
                          <h4 className='mb-3'>Payment Request Summary</h4>

                          </div>
                          <Table striped bordered hover>

                                        <thead className=''>
                                            <tr>
                                                <th className='text-nowrap'>ID</th>
                                                <th className='text-nowrap'>Title</th>
                                                <th className='text-nowrap'>Client</th>
                                                <th className='text-nowrap'>Payee</th>
                                                <th className='text-nowrap'>Description</th>
                                                <th className='text-nowrap'>Amount(Yen)</th>
                                                <th className='text-nowrap'>Created Date</th>
                                                <th className='text-nowrap'>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.invoices.map((invoice) => (
                                                <tr>
                                                  <td>{invoice.Id}</td>
                                                  <td>{invoice.name}</td>
                                                  <td>{invoice.client.name}</td>
                                                  <td>{invoice.payee.name}</td>
                                                  <td>{invoice.desc}</td>
                                                  <td>{invoice.amount}</td>
                                                  <td><Moment format='YYYY/MM/DD'>
                                                       {invoice.created_date}
                                                        </Moment></td>
                                                  <td>{invoice.status}</td>
                                                </tr>
                                            ))}
                                        </tbody>

                                </Table>
                          </div>

                          <Container>

                                <Row className='justify-content-md-center'>
                                    <Col><Paging>{items}</Paging></Col>
                                    <Col xs lg='2'></Col>
                                    <Col xs lg='1'> <Button variant='primary' href='/create'>New</Button></Col>
                                </Row>
                                </Container>

              </div>

      );
  }
}
