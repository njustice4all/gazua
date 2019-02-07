import React, { Component } from 'react';

const DUMMY = [
  {
    name: 'hello',
  },
  {
    name: 'world',
  },
  {
    name: 'android',
  },
  {
    name: 'ios',
  },
  {
    name: 'node',
  },
  {
    name: 'express',
  },
];

const List = props =>
  props.data.map((value, index) => (
    <h1 key={index} onClick={props.onDateClick(value.name)}>
      {value.name}
    </h1>
  ));

const Detail = props => (
  <div>
    <h1>{props.date}</h1>
    <button onClick={props.onBackButtonClick}>뒤로가기</button>
  </div>
);

class Home extends Component {
  state = {
    currentView: 'list',
    date: null,
  };

  onDateClick = name => () => {
    this.setState(prevState => ({ currentView: 'detail', date: name }));
  };

  onBackButtonClick = () => {
    this.setState(prevState => ({ currentView: 'list' }));
  };

  render() {
    const { currentView, date } = this.state;

    return (
      <div>
        {currentView === 'list' ? (
          <List data={DUMMY} onDateClick={this.onDateClick} />
        ) : (
          <Detail date={date} onBackButtonClick={this.onBackButtonClick} />
        )}
      </div>
    );
  }
}

export default Home;
