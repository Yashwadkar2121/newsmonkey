import React, { Component } from "react";

export default class NewItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.moneycontrol.com/static-mcnews/2024/01/Stock-Markets-770x433.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toLocaleDateString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }
}
