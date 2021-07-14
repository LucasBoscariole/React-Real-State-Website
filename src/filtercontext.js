import React, { useContext, useEffect, useReducer } from 'react';
import { homesDataObject } from './data/HomesData';
import reducer from './filterreducer';

const initialState = {
  filtered_products: [],
  all_products: [],
  sort: 'price-lowest',
  filters: {
    text: '',
    locality: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: homesDataObject });
  }, []);

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
    dispatch({ type: 'SORT_PRODUCTS' });
  }, [state.sort, state.filters]);

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: 'UPDATE_SORT', payload: value });
  };
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'locality') {
      value = e.target.textContent;
    }
    if (name === 'price') {
      value = Number(value);
    }
    if (name === 'rental') {
      value = e.target.checked;
    }
    dispatch({ type: 'UPDATE_FILTERS', payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider };
