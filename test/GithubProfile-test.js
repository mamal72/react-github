/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { GithubProfile } from '../';

describe('<GithubProfile />', () => {
  it('should render a "GithubProfile" component with username', () => {
    const wrapper = shallow(<GithubProfile username="mamal72" />);
    expect(wrapper.find('.github-profile')).to.have.length(1);
  });
});
