import React from 'react';

import './Search.scss';

function Search({ searchValue, setSearchValue }) {
  return (
    <div className="search">
      <label className="search__label">
        <img className="search__img" src="./img/icons/search.svg" alt="search" />
        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className="search__input"
          type="text"
          placeholder="Пошук піци..."
        />
        {searchValue && (
          <img
            onClick={() => setSearchValue('')}
            className="search__img-close"
            src="./img/icons/close.svg"
            alt="clear"
          />
        )}
      </label>
    </div>
  );
}

export default Search;
