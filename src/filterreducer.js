const filter_reducer = (state, action) => {
  if (action.type === 'LOAD_PRODUCTS') {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  if (action.type === 'UPDATE_SORT') {
    return { ...state, sort: action.payload };
  }
  if (action.type === 'SORT_PRODUCTS') {
    const { sort, filtered_products } = state;
    let tempProducts = [];
    if (sort === 'price-lowest') {
      tempProducts = filtered_products.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sort === 'price-highest') {
      tempProducts = filtered_products.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (sort === 'name-a') {
      tempProducts = filtered_products.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }
    if (sort === 'name-z') {
      tempProducts = filtered_products.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }
    return { ...state, filtered_products: tempProducts };
  }
  //Filters
  if (action.type === 'UPDATE_FILTERS') {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === 'FILTER_PRODUCTS') {
    const { all_products } = state;
    const { text, locality, price, rental } = state.filters;
    let tempProducts = [...all_products];
    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.title.toLowerCase().startsWith(text)
      );
    }
    if (locality !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.locality === locality
      );
    }
    // Filter by price
    tempProducts = tempProducts.filter((product) => product.price <= price);
    // Filter by rental
    if (rental) {
      tempProducts = tempProducts.filter((product) => product.rental === true);
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === 'CLEAR_FILTERS') {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        locality: 'all',
        price: state.filters.max_price,
        rental: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
