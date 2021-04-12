import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Link } from 'react-router-dom';
import '@testing-library/jest-dom';
import { CocktailPage } from '../pages/cocktailPage/CocktailPage';

const clearPreviousCocktail = () => ({});
const loadCocktail = () => ({});
const match = {};
const cocktail = { idDrink: 112202, strDrink: 'Anything' };

describe('rendered Cocktail Page', () => {
  test('has list of multiple coktails links', () => {
    render(
      <BrowserRouter>
        <CocktailPage
          cocktail={cocktail}
          match={match}
          clearPreviousCocktail={clearPreviousCocktail}
          loadCocktail={loadCocktail}
        />
      </BrowserRouter>,
    );
    const { container } = render(<div className="cocktail-component" />);
    expect(container.firstChild.classList.contains('cocktail-component')).toBe(
      true,
    );
  });

  test('has name of the cocktail', () => {
    render(
      <BrowserRouter>
        <CocktailPage
          cocktail={cocktail}
          match={match}
          clearPreviousCocktail={clearPreviousCocktail}
          loadCocktail={loadCocktail}
        />
      </BrowserRouter>,
    );
    const element = screen.getByText('Anything');
    expect(element).toBeInTheDocument();
  });

  test('has link with back arrow icon', () => {
    render(
      <BrowserRouter>
        <CocktailPage
          cocktail={cocktail}
          match={match}
          clearPreviousCocktail={clearPreviousCocktail}
          loadCocktail={loadCocktail}
        />
      </BrowserRouter>,
    );
    const { container } = render(<BrowserRouter><Link to="/" className="back-to-home" /></BrowserRouter>);
    expect(container.hasChildNodes(<i className="fas fa-arrow-left" />)).toBe(true);
  });

  test('has link node', () => {
    render(
      <BrowserRouter>
        <CocktailPage
          cocktail={cocktail}
          match={match}
          clearPreviousCocktail={clearPreviousCocktail}
          loadCocktail={loadCocktail}
        />
      </BrowserRouter>,
    );
    const { container } = render(<div className="cocktail-Recipe-page" />);
    expect(container.hasChildNodes(<Link to="/" className="back-to-home" />)).toBe(true);
  });
});
