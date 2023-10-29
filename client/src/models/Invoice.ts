import Item from '@/models/Item';

export default class Invoice {
  invoiceId: string;
  status: string;

  streetAddressFrom: string;
  cityFrom: string;
  postCodeFrom: string;
  countryFrom: string;

  streetAddressTo: string;
  cityTo: string;
  postCodeTo: string;
  countryTo: string;

  clientName: string;
  clientEmail: string;

  invoiceDate: number;
  paymentTerms: number;
  projectDescription: string;

  items: Item[];

  constructor(
    invoiceId = '', status = '', streetAddressFrom = '', cityFrom = '', postCodeFrom = '', countryFrom = '', streetAddressTo = '',
    cityTo = '', postCodeTo = '', countryTo = '', clientName = '', clientEmail = '', invoiceDate: 0, paymentTerms: 0,
    projectDescription = '', items = []
  ) {
    this.invoiceId = invoiceId;
    this.status = status;
    this.streetAddressFrom = streetAddressFrom;
    this.cityFrom = cityFrom;
    this.postCodeFrom = postCodeFrom;
    this.countryFrom = countryFrom;
    this.streetAddressTo = streetAddressTo;
    this.cityTo = cityTo;
    this.postCodeTo = postCodeTo;
    this.countryTo = countryTo;
    this.clientName = clientName;
    this.clientEmail = clientEmail;
    this.invoiceDate = invoiceDate;
    this.paymentTerms = paymentTerms;
    this.projectDescription = projectDescription;
    this.items = items;
  }

  /**
   * Returns the total cost of the items in the invoice.
   * @returns {number} The total cost of the items in the invoice.
   */
  get totalCost(): number {
    let total = 0;
    this.items.forEach(item => {
      total += item.price * item.qty;
    });

    return total;
  }

  // TODO: Implement method to generate an invoice ID.
}
