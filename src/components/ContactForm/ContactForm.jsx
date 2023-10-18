import { Component } from 'react';
import { Form } from './ContactForm.styled';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = { name: '', number: '' };

  submitForm = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  changeInput = input => {
    this.setState({
      [input.name]: input.value,
    });
  };
  // генеруємо ID для інпутів форми, для декількох форм на сторінці
  nameIinputIid = nanoid(5);
  numberInputIid = nanoid(5);

  render() {
    return (
      <Form onSubmit={this.submitForm}>
        <label htmlFor={this.nameIinputIid}>Name</label>
        <input
          type="text"
          id={this.nameIinputIid}
          name="name"
          placeholder="Enter name ..."
          // колбек потрібен щоб передати інфу, інашке ми її викличемо і на onChange прилетить виконання функції, а нам потрибно щоб запустилась
          onChange={e => {
            return this.changeInput(e.target);
          }}
          value={this.state.name}
          required
        />
        <label htmlFor={this.numberInputIid}>Number</label>
        <input
          type="tel"
          name="number"
          id={this.numberInputIid}
          placeholder="tel: xxx-xx-xx"
          onChange={e => {
            return this.changeInput(e.target);
          }}
          value={this.state.number}
          required
        />
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}
