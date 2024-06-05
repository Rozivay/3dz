import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addName } from './action';

class App extends Component {
  state = { name: '' };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.trim() !== '') { // Проверка на пустой ввод
      this.props.addName(this.state.name);
      this.setState({ name: '' });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.name} />
          <button type="submit">Добавить имя</button>
        </form>
        <ul>
          {this.props.names.map((name, index) => <li key={index}>{name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { names: state };
};

const mapDispatchToProps = {
  addName
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
