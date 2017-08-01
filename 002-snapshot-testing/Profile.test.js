import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Profile from './Profile';

const props = {
  name: 'Mattia Richetto',
  username: '@mattiaerre',
  bio: 'Agile developer at OpenTable, marathon runner, sports fan and vegan living in San Francisco',
  doStuff: jest.fn()
};

test('<Profile /> to match snapshot', () => {
  const component = renderer.create(
    <Profile {...props} />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('<Profile /> button click', () => {
  const e = { preventDefault: jest.fn() };

  const wrapper = shallow(<Profile {...props} />);
  const button = wrapper.find('button');
  button.simulate('click', e);

  expect(e.preventDefault).toHaveBeenCalled();
  expect(props.doStuff).toHaveBeenCalled();
});
