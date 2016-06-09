import React, { Component, PropTypes } from 'react';
import './GithubProfile.less';

const API_ROOT = 'https://api.github.com/users';

export default class extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  state = {};

  componentDidMount() {
    (async () => {
      const address = `${API_ROOT}/${this.props.username}`;
      const response = await fetch(address);
      const json = await response.json();
      this.setState(json);
    })();
  }

  render() {
    const followersUrl = `${this.state.html_url}/followers`;
    const repositoriesUrl = `${this.state.html_url}/repositories`;
    const gistsUrl = `https://gist.github.com/${this.props.username}`;
    const className = this.props.className ? `github-profile ${this.props.className}` : 'github-profile';

    return (
      <div className={className}>
        <div className={`${className}__avatar`}>
          <a href={this.state.blog || this.state.html_url}><img alt={this.props.username} src={this.state.avatar_url} /></a>
        </div>
        <div className={`${className}__details`}>
          <a href={this.state.html_url}><h3 className={`${className}__username`}>@{this.props.username}</h3></a>
          <h2 className={`${className}__name`}>{this.state.name}</h2>
          <ul className={`${className}__stats`}>
            <li className={`${className}__followers`}>
              <a href={followersUrl}><strong>{this.state.followers}</strong> Followers</a>
            </li>
            <li className={`${className}__repos`}>
              <a href={repositoriesUrl}><strong>{this.state.public_repos}</strong> Repos</a>
            </li>
            <li className={`${className}__gists`}>
              <a href={gistsUrl}><strong>{this.state.public_gists}</strong> Gists</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
