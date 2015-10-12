import React, { Component, PropTypes } from 'react';
import './GithubProfile.less';

const API_ROOT = 'https://api.github.com/users';

export default class extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    async () => {
      const address = `${API_ROOT}/${this.props.username}`;
      const response = await fetch(address);
      const json = await response.json();
      this.setState(json);
    }();
  }

  render() {
    const followersUrl = `${this.state.html_url}/followers`;
    const repositoriesUrl = `${this.state.html_url}/repositories`;
    const gistsUrl = `https://gist.github.com/${this.props.username}`;

    return (
      <div className="github-profile">
        <div className="github-profile__avatar">
          <a href={this.state.blog || this.state.html_url}><img alt={this.props.username} src={this.state.avatar_url} /></a>
        </div>
        <div className="github-profile__details">
          <a href={this.state.html_url}><h3 className="github-profile__username">@{this.props.username}</h3></a>
          <h2 className="github-profile__name">{this.state.name}</h2>
          <hr className="github-profile__separator" />
          <ul className="github-profile__stats">
            <li className="github-profile__followers">
              <a href={followersUrl}><strong>{this.state.followers}</strong> Followers</a>
            </li>
            <li className="github-profile__repos">
              <a href={repositoriesUrl}><strong>{this.state.public_repos}</strong> Repos</a>
            </li>
            <li className="github-profile__gists">
              <a href={gistsUrl}><strong>{this.state.public_gists}</strong> Gists</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
