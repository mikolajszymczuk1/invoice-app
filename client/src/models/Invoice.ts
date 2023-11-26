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

  /**
   * Returns payment due date
   * @returns {number} The payment due date
  */
  get paymentDue(): number {
    const date = new Date(this.invoiceDate);
    date.setDate(date.getDate() + this.paymentTerms);
    return date.getTime();
  }

  /**
   * Convert timestamp to user friendly string
   * @param {number} timestamp timestamp to convert
   * @returns {string} user friendly string with date
  */
  public static formatDate(timestamp: number): string {
    let stringDate: string= '';
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString('default', { day: 'numeric',  month: 'short', year: 'numeric' });
    const parts = formattedDate.replace(',', '').split(' ');
    stringDate = `${parts[1]} ${parts[0]} ${parts[2]}`;
    return stringDate;
  }

  // TODO: Implement method to generate an invoice ID.
}
