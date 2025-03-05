import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const textSpisokDonatov = document.createElement('h2');
    textSpisokDonatov.innerText = "Список донатов";
    textSpisokDonatov.className = 'donates-container__title';

    const spisokDonatov = document.createElement('div');
    spisokDonatov.className = 'donates-container__donates';

    this.$rootElement.appendChild(textSpisokDonatov);
    this.$rootElement.appendChild(spisokDonatov);

    this.$listContainer = spisokDonatov;

    ;


    // ...
  }

  addItem(item) {
    // ...    
    this.$listContainer.appendChild(item.$rootElement);
  }
}