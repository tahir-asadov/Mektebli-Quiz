import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter }             from 'react-router-dom';

import App from './App';

const MockApp = () => {

  return <BrowserRouter>

    <App />

  </BrowserRouter>

}

it('Login in a valid user', async () => {
  
  render( <MockApp /> );

  const username = screen.getByPlaceholderText( /Имя пользователя/i );
  fireEvent.change( username, { target: { value: 'admin' } } )

  const password = screen.getByPlaceholderText( /Пароль/i );
  fireEvent.change( password, { target: { value: 'admin' } } )

  const submitButton = screen.getByRole( "button", { name: /Логин/i } );

  fireEvent.click(submitButton);

  const heading = await screen.findByText( /Выберите тест для запуска/i );

  expect( heading ).toBeInTheDocument();

  // screen.debug();
  
});