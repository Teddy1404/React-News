import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
let {title,discription,imageUrl,newsUrl} = this.props;

    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://s.abcnews.com/images/Business/satya-nadella-01-gty-iwb-221018_1666120536343_hpMain_16x9_992.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {discription}
            </p>
            <a href={newsUrl} className="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
