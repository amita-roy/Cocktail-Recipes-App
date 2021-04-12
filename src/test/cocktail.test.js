import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Link } from 'react-router-dom';
import '@testing-library/jest-dom';
import fireEvent from '@testing-library/user-event';
import Cocktail from '../components/cocktail/Cocktail';

const cocktail = { strDring: 'A1' };

describe('rendered Cocktail', () => {
  test('has ingredients text in the document', () => {
    render(
      <BrowserRouter>
        <Cocktail cocktail={cocktail} />
      </BrowserRouter>,
    );
    const element = screen.getByText('Ingredients');
    expect(element).toBeInTheDocument();
  });
  test('has Instructions text in the document', () => {
    render(
      <BrowserRouter>
        <Cocktail cocktail={cocktail} />
      </BrowserRouter>,
    );
    const element = screen.getByText('Instructions');
    expect(element).toBeInTheDocument();
  });

  test('has a container with className recipe-content', () => {
    render(
      <BrowserRouter>
        <Cocktail cocktail={cocktail} />
      </BrowserRouter>,
    );
    const { container } = render(<div className="recipe-content" />);
    expect(container.firstChild.classList.contains('recipe-content')).toBe(
      true,
    );
  });

  test('redirects to cocktailListPage', () => {
    render(
      <BrowserRouter>
        <Cocktail cocktail={cocktail} />
      </BrowserRouter>,
    );
    const { container } = render(
      <BrowserRouter>
        <Link to="/" className="back-to-home">
          ←
        </Link>
      </BrowserRouter>,
    );
    fireEvent.click(container,
      screen.getAllByText('←'));
  });
});
