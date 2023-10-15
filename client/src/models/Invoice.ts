import Item from '@/models/Item';

export default class Invoice {
  invoiceId: string;

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
    invoiceId = '', streetAddressFrom = '', cityFrom = '', postCodeFrom = '', countryFrom = '', streetAddressTo = '',
    cityTo = '', postCodeTo = '', countryTo = '', clientName = '', clientEmail = '', invoiceDate: 0, paymentTerms: 0,
    projectDescription = '', items = []
  ) {
    this.invoiceId = invoiceId;
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
}
