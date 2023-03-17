import Customer from "./Customer";
import OrderItem from "./OrderItem";

class Order {
  private _customer: Customer;
  private _items: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount: number = 0;

  constructor(
    customer: Customer, 
    items: OrderItem[], 
    paymentMethod: string, 
    discount: number,
  ) {
    this._customer = customer;
    this.items = items;
    this._paymentMethod = paymentMethod;
    this.discount = discount;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }
    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }
    this._discount = value;
  }

  getTotalRaw(): number {
    return this.items.reduce((acc, curr) => acc + curr.price, 0);
  }

  getTotalWithDiscount(): number {
    const total = this.getTotalRaw()
    const off = total * this.discount;
    return total - off;
    // return this.getTotalRaw() * (1 - this.discount);
  }
}

const customer = new Customer('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(customer, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);

console.log(order.getTotalRaw());
console.log(order.getTotalWithDiscount());