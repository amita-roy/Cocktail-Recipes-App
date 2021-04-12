import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Link } from 'react-router-dom';
import '@testing-library/jest-dom';
import fireEvent from '@testing-library/user-event';
import { CocktailList } from '../container/cocktailList/CocktailList';

const cocktails = [{ idDrink: 110023, strDrink: 'Anything' }, { idDrink: 112202, strDring: 'New Drink' }];
const loadCocktails = () => ({});

const loadCocktail = () => ({});

describe('rendered Cocktails List', () => {
  test('has list of multiple coktails links', () => {
    render(
      <BrowserRouter>
        <CocktailList
          cocktails={cocktails}
          loadCocktails={loadCocktails}
          loadCocktail={loadCocktail}
        />
      </BrowserRouter>,
    );
    const { container } = render(
      <BrowserRouter>
        <Link
          to="/cocktails/110023"
          key="110023"
          className="cocktailList-item"
        />
      </BrowserRouter>,
    );
    expect(container.firstChild.classList.contains('cocktailList-item')).toBe(
      true,
    );
  });

  test('has a div with className drinkName-wrapper', () => {
    render(
      <BrowserRouter>
        <CocktailList
          cocktails={cocktails}
          loadCocktails={loadCocktails}
          loadCocktail={loadCocktail}
        />
      </BrowserRouter>,
    );
    const { container } = render(<div className="drinkName-wrapper" />);
    expect(container.firstChild.classList.contains('drinkName-wrapper')).toBe(
      true,
    );
  });

  test('redirects to specific cocktail page', () => {
    render(
      <BrowserRouter>
        <CocktailList
          cocktails={cocktails}
          loadCocktails={loadCocktails}
          loadCocktail={loadCocktail}
        />
      </BrowserRouter>,
    );
    const { container } = render(
      <BrowserRouter>
        <Link
          to="/cocktails/110023"
          className="cocktailList-item"
        />

      </BrowserRouter>,
    );
    fireEvent.click(container,
      screen.getByText('Anything'));
  });
});
