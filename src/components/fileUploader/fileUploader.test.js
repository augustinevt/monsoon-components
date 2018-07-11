import React from 'react';
import renderer from 'react-test-renderer';

import FileUploader from './FileUploader';

test('dafault modal snapshot', () => {
  const snapshot = renderer.create(
    <FileUploader/>
  ).toJSON();

  expect(snapshot).toMatchSnapshot();
});