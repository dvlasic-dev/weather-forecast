import React from 'react';
import '../styles/search.scss';

const Search = ({onSubmit, value, onChange}) => {
  return (
    <section className="search">
      <div className="search-items">
        <p>Search by city name: </p>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Isengard" value={value} onChange={onChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Search;
