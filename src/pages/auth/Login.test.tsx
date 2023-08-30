import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

import { MemoryRouter } from 'react-router-dom';

jest.mock('axios', () => ({
    create: jest.fn(() => ({
      // Mock any axios methods you're using
      get: jest.fn(() => Promise.resolve({ data: {} })),
    })),
  }));

// test function 
// 1st arg:- test identifier eg. 'renders learn react link'
// 2nd arg:- function that contaions expectations to test
// 3rd arg:- timeout which is an optionl arg for specifying how lomg to wait before aborting the test. The default timout is 5 sec
test('place holder name', () => {
  render(
    <MemoryRouter>
        <LoginPage />
    </MemoryRouter>); // component on which test function run
  const linkElement = screen.getByPlaceholderText(/Enter Here/i); // test function
  expect(linkElement).toBeInTheDocument(); // matcher function to carry assertion
});