import { render, screen, fireEvent } from '@testing-library/react';
import { act }                       from 'react-dom/test-utils';
import { BrowserRouter }             from 'react-router-dom';
import React                         from 'react';

beforeEach( async () => {

  await act( async () => {

    render( <MockApp /> );

  });

} );

import App from './App';

const MockApp = () => {

  return <React.StrictMode>
    
  <BrowserRouter>

    <App />

  </BrowserRouter>

</React.StrictMode>

}

it('User can login with valid credentials', async () => {
  
  const username = screen.getByPlaceholderText( /Имя пользователя/i );

  const password = screen.getByPlaceholderText( /Пароль/i );

  const submitButton = screen.getByRole( "button", { name: /Логин/i } );

  await act( async () => {

    fireEvent.change( username, { target: { value: 'admin' } } )

    fireEvent.change( password, { target: { value: 'admin' } } )

    fireEvent.click( submitButton );

  });

  const heading = await screen.findByText( /Выберите тест для запуска/i );

  const testHeading = await screen.findByText( /Тесты/i );
  
  expect( heading ).toBeInTheDocument();

  expect( testHeading ).toBeInTheDocument();
  
});