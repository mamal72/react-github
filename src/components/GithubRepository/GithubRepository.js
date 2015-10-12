import React, { Component, PropTypes } from 'react';

import './GithubRepository.less';

const API_ROOT = 'https://api.github.com/repos';

export default class extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    showName: PropTypes.boolean,
    showUsername: PropTypes.boolean,
    showDescription: PropTypes.boolean,
    className: PropTypes.string
  }

  static defaultProps = {
    showName: true,
    showUsername: true,
    showDescription: true
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    async () => {
      const address = `${API_ROOT}/${this.props.username}/${this.props.repository}`;
      const response = await fetch(address);
      const json = await response.json();
      this.setState(json);
    }();
  }

  render() {
    const ownerUrl = `https://github.com/${this.props.username}`;
    const className = this.props.className ? `github-repository ${this.props.className}` : 'github-repository';
    return (
      <div className={className}>
        {
          this.props.showName && <a href={this.state.html_url}><h2 className="github-repository__name">{this.props.repository}</h2></a>
        }
        {
          this.props.showDescription && <h4 className="github-repository__description">{this.state.description}</h4>
        }
        {
          this.props.showUsername && <h5>by <strong><a href={ownerUrl}>@{this.props.username}</a></strong></h5>
        }
        <ul className="github-repository__details">
          <li className="github-repository__stars"><a href={`${this.state.html_url}/stargazers`}><strong>{this.state.stargazers_count}</strong> Stars</a></li>
          <li className="github-repository__forks"><a href={`${this.state.html_url}/network`}><strong>{this.state.forks_count}</strong> Forks</a></li>
          <li className="github-repository__language"><a href={`${this.state.html_url}/search?l=${this.state.language}`}><strong>{this.state.language}</strong> Language</a></li>
        </ul>
      </div>
    );
  }
}
