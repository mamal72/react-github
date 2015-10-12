[![Build Status](https://travis-ci.org/mamal72/react-github-components.svg?branch=master)](https://travis-ci.org/mamal72/react-github-components)
[![npm version](https://badge.fury.io/js/react-github-components.svg)](https://badge.fury.io/js/react-github-components)
# react-github-components
**react-github-components** is a set of react components for Github written by ES6 and ES7. It's a WIP and more components will be added.


# Screenshots

## GithubProfile

<p align='center'>
    <img src='https://github.com/mamal72/react-github-components/raw/master/screenshot2.png' />
</p>


# Installation

You can install this package via `npm`:

```bash
npm install react-github-components --save
```


# Components
## GithubProfile
Renders a simple Github user profile box with short useful info about the user.

```jsx
import React, { Component } from 'react';
import { GithubProfile } from 'react-github-components';

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
* **username**: The username of the Github profile to load info about it

*Note that you should include one of the CSS styles in your HTML to load the style. Check the examples in the `examples` directory to find out what and how.*

# Contributing

Remember to lint your code before contribution. Run the following command and fix the errors if you get any.
```bash
npm run lint
```
