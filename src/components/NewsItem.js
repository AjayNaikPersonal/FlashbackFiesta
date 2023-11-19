import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description, wikipediaItemUrl,year} = this.props;
    return (
        <div className="col-sm-6 my-2">
            <div className="card h-100 border-dark bg-dark text-white">
                
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={wikipediaItemUrl} target="_blank" rel="noreferrer"  className="btn btn-danger">
                    <strong>Check Wiki</strong>
                </a>
                <div className="position-absolute top-0 end-0 p-2">
                    <span className="badge bg-secondary">{year}</span>
                </div>
                </div>
            </div>
        </div>

    );
  }
}

export default NewsItem
