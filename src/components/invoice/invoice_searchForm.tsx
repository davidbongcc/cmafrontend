import * as React from 'react';
import { InvoiceModel } from '../../models/invoiceModel';
/**
 * Search Invoice by passing invoice Id or name
 * @param props
 */
const SearchForm: React.FC = (props) => {
    return (

    <div> <form className='form-inline my-2 my-lg-0'>
    <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search'/>
    <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
  </form></div>);

};

export default SearchForm;
