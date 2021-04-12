import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CocktailsFilterForm } from '../container/cocktailsFilterForm/CocktailsFilterForm';

const loadFilteredCocktails = () => ([]);

describe('rendered CocktailsFilterForm', () => {
  test('has form node', () => {
    render(
      <CocktailsFilterForm loadFilteredCocktails={loadFilteredCocktails} />,
    );
    const { container } = render(<div className="cocktailsFilterForm" />);
    expect(container.hasChildNodes(<form />)).toBe(true);
  });

  test('has input node', () => {
    render(
      <CocktailsFilterForm loadFilteredCocktails={loadFilteredCocktails} />,
    );
    const { container } = render(<form />);
    expect(container.hasChildNodes(<input />)).toBe(true);
  });

  test('has button node', () => {
    render(
      <CocktailsFilterForm loadFilteredCocktails={loadFilteredCocktails} />,
    );
    const { container } = render(<form />);
    expect(container.hasChildNodes(<button type="submit">Submit</button>)).toBe(true);
  });
});
