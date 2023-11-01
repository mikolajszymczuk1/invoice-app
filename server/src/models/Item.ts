export default class Item {
  itemName: string;
  qty: number;
  price: number;

  constructor(itemName = '', qty = 0, price = 0) {
    this.itemName = itemName;
    this.qty = qty;
    this.price = price;
  }
}
