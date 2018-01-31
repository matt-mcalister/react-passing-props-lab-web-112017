import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';



const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter filters={props.filters} handleChange={props.handleFilterChange} />
      <FilteredFruitList
        filter={props.currentFilter} items={props.fruit}/>
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: "all",
  updateFilterCallback: console.log
}

export default FruitBasket;
