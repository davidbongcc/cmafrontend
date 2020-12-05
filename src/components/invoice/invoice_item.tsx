import * as React from 'react';
import { InvoiceModel } from '../../models/invoiceModel';
// Invoice item props
interface InvoiceProps {

    invoice: InvoiceModel;

}
// TODO: Handle single invoice features.
const InvoiceItem: React.FC<InvoiceProps> = (props: InvoiceProps) => {
return (<div>testing</div>);
};

export default InvoiceItem;
