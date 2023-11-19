import React, { Component } from 'react';

class SelectedMsg extends Component {
  getMonthName(month) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return monthNames[month - 1] || ''; // Subtract 1 to get the correct index
  }

  render() {
    const { month, date, task } = this.props;
    const monthName = this.getMonthName(month);

    return (
      <div className='container'>
        <div className="alert alert-info my-2" role="alert">
          Displayed below are significant occurrences that happened on <strong>{monthName} {date},</strong> categorized by the selected type: <strong>{task}</strong>.
        </div>
      </div>
    );
  }
}

export default SelectedMsg;
