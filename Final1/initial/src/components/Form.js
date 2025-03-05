import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    this.state = {
      amount: ""
    };
    // ...
    const textVvediteSummu = document.createElement('label');
    textVvediteSummu.innerText = "Введите сумму в долларах $ ";
    textVvediteSummu.className = 'donate-form__input-label';
    this.$rootElement.appendChild(textVvediteSummu);

    const inputDonat = document.createElement('input');
    inputDonat.className = 'donate-form__donate-input';
    inputDonat.name = "amount";
    inputDonat.type = "number";
    inputDonat.max = 100;
    inputDonat.min = 1;
    inputDonat.required = true;
    this.$input = inputDonat;

    this.$rootElement.appendChild(inputDonat);

    const buttonDonat = document.createElement('button');
    buttonDonat.className = 'donate-form__submit-button';
    buttonDonat.type = "submit";
    buttonDonat.innerText = "Задонатить";
    buttonDonat.disabled = true;
    this.$button = buttonDonat;
    this.$rootElement.appendChild(buttonDonat);

    //слушатели
    this.$input.addEventListener("input", this.handleInput.bind(this), false);
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this), false);

  }

  get isValid() {
    if (this.state.amount >= 1 && this.state.amount <= 100)
      return true;
    else return false;
  }

  handleInput(event) {
    // ...
    this.state.amount = event.target.value;

    this.$button.disabled = !this.isValid;

  }

  handleSubmit(event) {
    // ...
    event.preventDefault();
    if (this.isValid) {
      this.props.onSubmit(this.state.amount)
      this.state.amount = "";
      this.$input.value = "";
    }

  }
}
