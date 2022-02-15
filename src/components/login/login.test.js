import { render, screen, fireEvent } from '@testing-library/react';
import Login from './index.js';

it('Renders Login component properly', async () => {
  render( <Login /> );
  const submitButton = await screen.findByRole( "button", { name: /Логин/i } );
  expect( submitButton ).toBeInTheDocument();
});

it('Can update username', async () => {
  render( <Login /> );
  const username = await screen.findByPlaceholderText( /Имя пользователя/i );
  fireEvent.change( username, { target: { value: 'admin' } } )
  expect( username.value ).toBe( 'admin' );
});

it('Can update password', async () => {
  render( <Login /> );
  const password = await screen.findByPlaceholderText( /Пароль/i );
  fireEvent.change( password, { target: { value: 'admin' } } )
  expect( password.value ).toBe( 'admin' );
});