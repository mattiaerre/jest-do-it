import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './Profile';

test('<Profile />', () => {
  const props = {
    name: 'Mattia Richetto',
    username: '@mattiaerre',
    bio: 'Agile developer at OpenTable, marathon runner, sports fan and vegetarian living in San Francisco #FOB'
  };

  const component = renderer.create(
    <Profile {...props} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
