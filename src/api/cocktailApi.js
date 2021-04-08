import axios from 'axios';

const client = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

export const fetchCocktails = async () => {
  try {
    const response = await client.get('/filter.php?c=cocktail');
    return response.data.drinks;
  } catch (error) {
    return error;
  }
};

export const fetchFilteredCocktails = async (filterInput) => {
  try {
    const response = await client.get(`/search.php?s=${filterInput}`);
    return response.data.drinks;
  } catch (error) {
    return error;
  }
};

export const fetchCocktail = async ({ id }) => {
  try {
    const response = await client.get(`/lookup.php?i=${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
