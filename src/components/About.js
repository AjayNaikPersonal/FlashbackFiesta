import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class About extends Component {
  render() {
    return (
      <div className='container'>
        <div className="card">
          <h5 className="card-header">FlashbackFiesta - Time Unveiled</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              FlashbackFiesta - Time Unveiled is a React application developed by Ajay Naik. This engaging application allows users to explore historical events, births, and deaths that occurred on a specific day of the month. Users can choose a month, date, and event type, and the app retrieves information from the Wikipedia API to provide a curated list of notable occurrences.</p>
              <p>Key Features:</p>
              <ul>
                <li>Select a specific month, date, and event type (events, births, deaths).</li>
                <li>Utilizes the Wikipedia API to fetch relevant historical data.</li>
                <li>Provides a comprehensive view of significant events that happened on the selected day.</li>
              </ul>

              <section>
                <h4>Connect with Ajay Naik</h4>
                <p>LinkedIn Profile: <a href="https://www.linkedin.com/in/ajay-naik-se" target='_blank'  rel="noreferrer">Ajay Naik on LinkedIn</a></p>
              </section>

              <section>
                <h4>Explore the Past</h4>
                <p>Wikipedia API: <a href="https://byabbe.se/on-this-day/#/default/get__month___day__deaths_json"  target='_blank'  rel="noreferrer" >Wikipedia Free API</a></p>
              </section>

              <footer>
                <p>FlashbackFiesta - Time Unveiled offers a fascinating journey through time, allowing users to uncover and reflect upon the rich tapestry of historical events. Enjoy the exploration of the past!</p>
              </footer>
            <Link to="/" className="btn btn-primary">FlashbackFiesta</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default About
