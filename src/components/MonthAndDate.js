import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MonthAndDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedMonth: 1,
          selectedDate: 1,
          selectedTask: 'events',
        };
    }
    
    handleMonthSelect = (month) => {
        this.setState({ selectedMonth: month }, () => {
          this.props.onSelect(this.state.selectedMonth, this.state.selectedDate, this.state.selectedTask);
        });
    };
      
    handleDateSelect = (date) => {
    this.setState({ selectedDate: date }, () => {
        this.props.onSelect(this.state.selectedMonth, this.state.selectedDate, this.state.selectedTask);
    });
    };
    
    handleTaskSelect = (task) => {
    this.setState({ selectedTask: task }, () => {
        this.props.onSelect(this.state.selectedMonth, this.state.selectedDate, this.state.selectedTask);
    });
    };

  
  render() {
    return (
      <div className="my-5">
        <div className="d-flex justify-content-around">
          <div className="row">
            <div className="col">
              <div className="dropdown">
                <Link
                  className="btn btn-danger dropdown-toggle"
                 to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Month
                </Link>

                <ul className="dropdown-menu">
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleMonthSelect(1)}>
                    January
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleMonthSelect(2)}>
                    February
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleMonthSelect(3)}>
                    March
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleMonthSelect(4)}>
                    April
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleMonthSelect(5)}>
                    May
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleMonthSelect(6)}>
                    June
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleMonthSelect(7)}>
                    July
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleMonthSelect(8)}>
                    August
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleMonthSelect(9)}>
                    September
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleMonthSelect(10)}>
                    October
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleMonthSelect(11)}>
                    November
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleMonthSelect(12)}>
                    December
                    </Link>
                </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="dropdown">
                <Link
                  className="btn btn-danger dropdown-toggle"
                 to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Date
                </Link>
                <ul className="dropdown-menu">
                    {[...Array(31)].map((_, index) => (
                        <li key={index + 1}>
                        <Link className="dropdown-item custom-pointer" onClick={() => this.handleDateSelect(index + 1)}>
                            {index + 1}
                        </Link>
                        </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="dropdown">
                <Link
                  className="btn btn-danger dropdown-toggle"
                 to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Type
                </Link>
                <ul className="dropdown-menu">
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleTaskSelect('events')}>
                    events
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleTaskSelect('births')}>
                    births
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item custom-pointer" onClick={() => this.handleTaskSelect('deaths')}>
                    deaths
                    </Link>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MonthAndDate;
