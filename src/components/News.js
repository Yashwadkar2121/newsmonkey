import React, { Component } from "react";
import NewsItem from "./NewItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=42f88537dabc4894b27251c31befdc3e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handalPreClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handalNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container my-3 ">
          <h1 className="text-center">
            NewMonkey - Top {this.capitalize(this.props.category)} Headlines
          </h1>
          <div className="text-center">{this.state.loading && <Spinner />}</div>

          <div className="row my-4">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handalPreClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handalNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
