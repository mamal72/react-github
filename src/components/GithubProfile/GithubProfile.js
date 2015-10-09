import React, { Component, PropTypes } from 'react';

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
            <li className="github-profile__followers"><strong>{this.state.followers}</strong> Followers</li>
            <li className="github-profile__repos"><strong>{this.state.public_repos}</strong> Repos</li>
            <li className="github-profile__gists"><strong>{this.state.public_gists}</strong> Gists</li>
          </ul>
        </div>
      </div>
    );
  }
}
