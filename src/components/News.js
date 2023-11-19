import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

class News extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      loading: true,
    };
  }

  async fetchData() {
    const { month, date, task } = this.props;
    let url = `https://byabbe.se/on-this-day/${month}/${date}/${task}.json`;
  
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        events: parsedData[task] || [],
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({
        loading: false,
      });
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    // Check if props have changed
    if (
      prevProps.month !== this.props.month ||
      prevProps.date !== this.props.date ||
      prevProps.task !== this.props.task
    ) {
      this.setState(
        {
          loading: true,
        },
        () => {
          // Fetch data after updating loading state
          this.fetchData();
        }
      );
    }
  }


  render() {
    return (
      <>
        {this.state.loading && <Spinner />}
        <div className="container my-3">
          <div className="row">
            {this.state.events &&
              this.state.events.map((element) => {
                return (
                  <NewsItem
                    key={element.description}
                    title={element.wikipedia[0] ? element.wikipedia[0].title : 'URL not available'}
                    description={element.description}
                    wikipediaItemUrl={
                      element.wikipedia[0] ? element.wikipedia[0].wikipedia : 'URL not available'
                    }
                    year={`year-${element.year}`}
                  />
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
