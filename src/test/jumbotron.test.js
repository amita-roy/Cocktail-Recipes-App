import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Jumbotron from '../components/jumbotron/Jumbotron';

describe('rendered Jumbotron', () => {
  test('has a container with classname jumbotron', () => {
    render(
      <Jumbotron />,
    );
    const { container } = render(<div className="jumbotron" />);
    expect(container.firstChild.classList.contains('jumbotron')).toBe(true);
  });

  test('has element with classname title node', () => {
    render(
      <Jumbotron />,
    );
    const { container } = render(<div className="jumbotron" />);
    expect(container.hasChildNodes(<div className="title" />)).toBe(true);
  });

  test('has element with classname title has a childnode h1', () => {
    render(
      <Jumbotron />,
    );
    const { container } = render(<div className="title" />);
    expect(container.hasChildNodes(<h1>THE MIXING HOUSE</h1>)).toBe(true);
  });
});
