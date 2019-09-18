import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <p>
        Hello!
      </p>
      <p>
        <Link to="/hello/drstrange/newyork">
          Personalised welcome
        </Link>
      </p>
    </>
  );
}

export default Home;
