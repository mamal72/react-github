# react-github-components
**react-github-components** is a set of react components for Github. It's a WIP and more components will be added.

For now, there are 2 styles. More styles may be added later.

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
* **username**: The username of the user on the Github.

*Note that you should include one of the CSS styles in your HTML to load the style. Check the examples in the **examples** directory*

# Contributing

Remember to lint your code before contribution. Run the following command and fix the errors if you get any.
```bash
npm run lint
```
