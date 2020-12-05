/**
 * Invoice interace blue printing the invoice object,mapping the data that obtained from the API.
 */
export interface InvoiceModel {

    Id: number;
    name: string;
    clientId: number;
    payeeId: number;
    amount: number;
    notes?: string;
    docUrl?: string;
    createdDate: string;

}
