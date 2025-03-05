import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    // ...
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount
    }

    const bText = document.createElement('b');
    bText.innerText = `$${this.state.amount}`;


    this.$rootElement.innerText = `${this.state.date.toLocaleString()} -  `;
    this.$rootElement.appendChild(bText);

  }
}
