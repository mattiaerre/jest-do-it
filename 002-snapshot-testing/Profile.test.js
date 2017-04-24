import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './Profile';

test('<Profile />', () => {
  const props = {
    username: '@mattiaerre'
  };

  const component = renderer.create(
    <Profile {...props} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
