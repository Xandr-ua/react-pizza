import React from 'react';

import Main from '../components/main/Main';
import Pagination from '../components/pagination/Pagination';

function Home({ searchValue }) {
  return (
    <>
      <Main searchValue={searchValue} />
      <Pagination />
    </>
  );
}

export default Home;
