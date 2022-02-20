import { render, screen, fireEvent } from '@testing-library/react';
import { act }                       from 'react-dom/test-utils';
import { BrowserRouter }             from 'react-router-dom';
import React                         from 'react';
import App                           from './App';

const loginUser = async () => {

  const username = screen.getByPlaceholderText( /Имя пользователя/i );

  const password = screen.getByPlaceholderText( /Пароль/i );

  const submitButton = screen.getByRole( "button", { name: /Логин/i } );

  await act( async () => {

    fireEvent.change( username, { target: { value: 'admin' } } )

    fireEvent.change( password, { target: { value: 'admin' } } )

    fireEvent.click( submitButton );

  });
}

beforeEach( async () => {

  await act( async () => {

    render( <MockApp /> );

  });

} );


const MockApp = () => {

  return <React.StrictMode>
    
  <BrowserRouter>

    <App />

  </BrowserRouter>

</React.StrictMode>

}

it('Can login with valid credentials', async () => {
  
  loginUser()

  const heading = await screen.findByText( /Выберите тест для запуска/i );

  const testHeading = await screen.findByText( /Тесты/i );
  
  expect( heading ).toBeInTheDocument();

  expect( testHeading ).toBeInTheDocument();
  
});

it('Can open a quiz', async () => {
  
  loginUser()

  const quiz = await screen.findByText( /Quiz #1/i );

  expect( quiz ).toBeInTheDocument();

  await act( async () => {

    fireEvent.click( quiz );

  });

  const quizTitle = await screen.findByText( /The Quiz title/i );

  expect( quizTitle ).toBeInTheDocument();

  const submitTestButton = screen.getByText( /Проверить/i );

  expect( submitTestButton ).toBeInTheDocument();

  await act( async () => {

    fireEvent.click( submitTestButton );

  });

  const testValidated = await screen.findByText( /Поздравляем!/i );
  
  expect( testValidated ).toBeInTheDocument();
  
});

it('Can open profile page', async () => {
  
  loginUser()

  const profileLink = await screen.findByTitle( /Профиль/i );

  expect( profileLink ).toBeInTheDocument();

  await act( async () => {

    fireEvent.click( profileLink );

  });

  const lastName = await screen.findByTitle( /Фамилия/i );

  expect( lastName ).toBeInTheDocument();
  
});

it('Can open tests page', async () => {
  
  loginUser()

  const testsLink = await screen.findByTitle( /Тесты/i );

  expect( testsLink ).toBeInTheDocument();

  await act( async () => {

    fireEvent.click( testsLink );

  });

  const heading = await screen.findByText( /Выберите тест для запуска/i );
  
  expect( heading ).toBeInTheDocument();
  
});

it('Can open results page', async () => {
  
  loginUser()

  const resultsLink = await screen.findByTitle( /Результаты/i );

  expect( resultsLink ).toBeInTheDocument();

  await act( async () => {

    fireEvent.click( resultsLink );

  });

  const results = await screen.findByText( /Результаты/i );
  
  expect( results ).toBeInTheDocument();
  
});

it('Can go back', async () => {
  
  loginUser()

  const resultsLink = await screen.findByTitle( /Результаты/i );

  expect( resultsLink ).toBeInTheDocument();

  await act( async () => {

    fireEvent.click( resultsLink );

  });

  const results = await screen.findByText( /Результаты/i );
  
  expect( results ).toBeInTheDocument();

  const backButton = await screen.findByTitle( /Назад/i );
  
  expect( backButton ).toBeInTheDocument();

  await act( async () => {

    fireEvent.click( backButton );

  });

  const heading = await screen.findByText( /Выберите тест для запуска/i );
  
  expect( heading ).toBeInTheDocument();
  
});

it('Can log out', async () => {
  
  loginUser()

  const logoutLink = await screen.findByTitle( /Выйти/i );

  expect( logoutLink ).toBeInTheDocument();

  await act( async () => {

    fireEvent.click( logoutLink );

  });

  const username = screen.getByPlaceholderText( /Имя пользователя/i );

  const password = screen.getByPlaceholderText( /Пароль/i );
  
  expect( username ).toBeInTheDocument();

  expect( password ).toBeInTheDocument();
  
});