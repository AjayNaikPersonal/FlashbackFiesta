import React, { Component } from 'react';
import News from './News';
import MonthAndDate from './MonthAndDate';
import SelectedMsg from './SelectedMsg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 1,
      date: 1,
      task: 'events'
    };
  }

  handleMonthAndDateSelect = (month, date, task) => {
    this.setState({
      month: month,
      date: date,
      task: task,
    });
  };

  render() {
    const { month, date, task } = this.state; // Destructure state variables

    return (
      <div>
        <MonthAndDate onSelect={this.handleMonthAndDateSelect} />
        <SelectedMsg month={month} date={date} task={task} />
        <News month={month} date={date} task={task} />
      </div>
    );
  }
}

export default Home;
