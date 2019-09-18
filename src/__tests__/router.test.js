import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import ForOFour from '../views/FourOFour';
import Home from '../views/Home';
import Routes from '../Routes';

test('invalid path should redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/random']}>
      <Routes />
    </MemoryRouter>,
  );
  expect(wrapper.find(Home)).toHaveLength(0);
  expect(wrapper.find(ForOFour)).toHaveLength(1);
});

test('valid path should not redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <Routes />
    </MemoryRouter>,
  );
  expect(wrapper.find(Home)).toHaveLength(1);
  expect(wrapper.find(ForOFour)).toHaveLength(0);
});
