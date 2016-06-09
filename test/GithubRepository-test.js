/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { GithubRepository } from '../';

describe('<GithubRepository />', () => {
  it('should render a "GithubRepository" component with username and repository', () => {
    const wrapper = shallow(<GithubRepository username="mamal72" repository="react-github" />);
    expect(wrapper.find('.github-repository')).to.have.length(1);
  });
});
