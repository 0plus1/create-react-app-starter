import React from 'react';
import { shallow } from 'enzyme';

import Home from '../views/Home';
import Hello from '../views/Hello';

describe('<Home />', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });
});

describe('<Hello />', () => {
  const name = 'drstrange';
  const location = 'newyork';
  const HelloWithParams = (
    <Hello
      match={{
        params: {
          name,
          location,
        },
        isExact: true,
        path: '',
        url: '',
      }}
    />
  );
  it('renders without crashing', () => {
    shallow(HelloWithParams);
  });
  it('displays params', () => {
    expect(
      shallow(HelloWithParams).containsMatchingElement(<p>{`Hello ${name} from ${location}!`}</p>),
    ).toBeTruthy();
  });
});
