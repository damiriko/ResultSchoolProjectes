import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {

  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    // ...
    this.state = {
      total: 0,
      donates: []
    };

    const Zagolovok = document.createElement('h1');
    Zagolovok.innerText = "Итого: $ ";
    Zagolovok.className = "total-amount";

    const Summa = document.createElement('span');
    Summa.innerText = this.state.total;
    Zagolovok.appendChild(Summa);

    this.$rootElement.appendChild(Zagolovok);
    this.$total = Summa;

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    this.$donateList = new List();
    this.$rootElement.appendChild(this.$donateList.$rootElement);


  }

  onItemCreate(amount) {
    // ...    
    const item = new ListItem({ amount });
    this.state.donates.push(item);
    this.$donateList.addItem(item);
    this.state.total += Number(amount);

    this.$total.innerText = this.state.total;

  }
}
