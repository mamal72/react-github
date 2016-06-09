[![Build Status](https://travis-ci.org/mamal72/react-github.svg?branch=master)](https://travis-ci.org/mamal72/react-github)
[![npm version](https://badge.fury.io/js/react-github.svg)](https://badge.fury.io/js/react-github)
# react-github
**react-github** is a set of react components for Github written by ES6 and ES7. It's a WIP and more components will be added.


# Installation

You can install this package via `npm`:

```bash
npm install react-github --save
```


# Components
## GithubProfile

Renders a simple Github user profile box with some useful info about the user.

<p align='center'>
    <img alt='profile' src='https://github.com/mamal72/react-github/raw/v2/screenshots/GithubProfile.png' />
</p>

```js
import React, { Component } from 'react';
import { GithubProfile } from 'react-github';

class Test extends Component {
  render() {
    return (
      <div>
        <GithubProfile username="mamal72" />
      </div>
    );
  }
}
```

### Properties
* **username**: Github username
* **className**: custom-additional CSS class for root element of rendered component


## GithubRepository

Renders a repository info box with some details of it.

<p align='center'>
    <img alt='repository' src='https://github.com/mamal72/react-github/raw/v2/screenshots/GithubRepository.png' />
</p>

```js
import React, { Component } from 'react';
import { GithubRepository } from 'react-github';

class Test extends Component {
  render() {
    return (
      <div>
        <GithubRepository username="mamal72" repository="react-github" />
        <GithubRepository showDescription={false} username="mamal72" repository="react-github" />
        <GithubRepository showName={false} username="mamal72" repository="react-github" />
        <GithubRepository showUsername={false} username="mamal72" repository="react-github" />
        <GithubRepository className="my-profile" username="mamal72" repository="react-github" />
      </div>
    );
  }
}
```

### Properties
* **username**: Github username
* **repository**: Github repository name
* **showName** (default: *true*): render repository name
* **showUsername** (default: *true*): render username
* **showDescription** (default: *true*): render repository description
* **className**: custom-additional CSS class for root element of rendered component

# Ideas?
Just fill an issue and describe it. I'll check it ASAP. :)

# Contribution

You can fork the repository and send the pull requests.

Remember to lint your code before sending pull requests. Run the following command and fix the errors if you get any.
```bash
npm run lint
```
