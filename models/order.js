import moment from 'moment';
import 'moment/locale/fr';
class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  get readableDate() {
 
    return moment(this.date).locale('fr').format('Do MMMM YYYY, hh:mm');
  }
}

export default Order;
