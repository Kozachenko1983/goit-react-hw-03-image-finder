import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import getPosts from '../../services/api';
import Gallery from '../Gallery/Gallery';
import style from './App.module.css';

export default class App extends Component {
  state = {
    query: '',

    page: 1,
    posts: [],
    error: null,
  };

  componentDidMount() {
    const { query, page } = this.state;
    getPosts(query, page).then(({ data }) =>
      this.setState({ posts: data.hits }),
    );
  }

  fetchPhoto = (query, page, posts) => {
    getPosts(query, page)
      .then(({ data }) =>
        this.setState({
          posts: [...posts, ...data.hits],
          query,
          page,
        }),
      )
      .catch(error => this.setState({ error }));
  };

  onScroll = () => {
    window.scrollTo(0, 1000);
  };

  onSubmit = inputValue => {
    this.setState({ query: inputValue });
    this.fetchPhoto(inputValue, 1, []);
  };

  onLoadMore = () => {
    const { query, page, posts } = this.state;
    this.fetchPhoto(query, page + 1, posts);
    this.onScroll();
  };

  render() {
    const { posts, error } = this.state;
    return (
      <div className={style.wrapper}>
        <SearchForm onSubmit={this.onSubmit} />
        {error && <p>Woops, something went wrong: {error.message}</p>}
        {!!posts.length && (
          <Gallery posts={posts} onLoadMore={this.onLoadMore} />
        )}
      </div>
    );
  }
}
