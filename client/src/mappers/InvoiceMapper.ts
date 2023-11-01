import Invoice from '../models/Invoice';
import Item from '../models/Item';

export default class InvoiceMapper {
  /**
   * Method to convert Invoice object to Invoice class representation
   * @param {any} obj Object that must be converted to Invoice representation
   * @returns {Invoice} Invoice object
  */
  public static mapObjectToInvoice(obj: any): Invoice {
    const newInvoice = new Invoice(
      obj.invoiceId,
      obj.status,
      obj.streetAddressFrom,
      obj.cityFrom,
      obj.postCodeFrom,
      obj.countryFrom,
      obj.streetAddressTo,
      obj.cityTo,
      obj.postCodeTo,
      obj.countryTo,
      obj.clientName,
      obj.clientEmail,
      obj.invoiceDate,
      obj.paymentTerms,
      obj.projectDescription,
    );

    newInvoice.items = obj.items.map((item: any) => new Item(
        item.itemName,
        item.price,
        item.qty,
      ));

    return newInvoice;
  }

  /**
   * Method to convert array of normal objects to array of Invoices objects
   * @param {any[]} obj Array of objects that must be converted to array of Invoices
   * @returns {Invoice[]} Array of Invoices objects
  */
  public static mapArrayOfObjectsToInvoices(obj: any[]): Invoice[] {
    return obj.map((invoice: any) => this.mapObjectToInvoice(invoice));
  }
}
