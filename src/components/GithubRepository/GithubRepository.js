import React, { Component, PropTypes } from 'react';

import './GithubRepository.less';

const API_ROOT = 'https://api.github.com/repos';

export default class extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    showName: PropTypes.bool,
    showUsername: PropTypes.bool,
    showDescription: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    showName: true,
    showUsername: true,
    showDescription: true
  }

  state = {};

  componentDidMount() {
    (async () => {
      const address = `${API_ROOT}/${this.props.username}/${this.props.repository}`;
      const response = await fetch(address);
      const json = await response.json();
      this.setState(json);
    })();
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
        <ul className={`${className}__details`}>
          <li className={`${className}__stars`}><a href={`${this.state.html_url}/stargazers`}><strong>{this.state.stargazers_count}</strong> Stars</a></li>
          <li className={`${className}__forks`}><a href={`${this.state.html_url}/network`}><strong>{this.state.forks_count}</strong> Forks</a></li>
          <li className={`${className}__language`}><a href={`${this.state.html_url}/search?l=${this.state.language}`}><strong>{this.state.language}</strong> Language</a></li>
        </ul>
      </div>
    );
  }
}
