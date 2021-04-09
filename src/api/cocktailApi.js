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

export const fetchFilteredCocktails = async (searchTerm) => {
  try {
    const response = await client.get(`/search.php?s=${searchTerm}`);
    return response.data.drinks;
  } catch (error) {
    return error;
  }
};

export const fetchCocktail = async ({ idDrink }) => {
  try {
    const response = await client.get(`/lookup.php?i=${idDrink}`);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
