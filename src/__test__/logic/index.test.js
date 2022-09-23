import React from 'react';
import { render } from '@testing-library/react';
import Mainapp from '../../mainapp';
import Header from '../../header';
import Home from '../../home';
import Quotes from '../../quote';

test('snapshot of mainapp', () => {
  const renderedComponat = render(<Mainapp />);
  expect(renderedComponat).toMatchSnapshot();
});

test('snapshot of header', () => {
  const renderedComponat = render(<Header />);
  expect(renderedComponat).toMatchSnapshot();
});

test('snapshot of mainapp', () => {
  const renderedComponat = render(<Home />);
  expect(renderedComponat).toMatchSnapshot();
});

test('snapshot of mainapp', () => {
  const renderedComponat = render(<Quotes />);
  expect(renderedComponat).toMatchSnapshot();
});
