import React, { useState } from 'react';

import logo from '../../logo.png';

import Error from '../error';

import styles from './login.module.scss';

export default function Login( { setToken, setUser } ) {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const [ loading, setLoading ] = useState( false );
  const [ error, setError ] = useState( null );

  const upadteUsername = ( e ) => {
    setUsername( e.target.value );
  }
  const upadtePassword = ( e ) => {
    setPassword( e.target.value );
  }
  
  const login = ( e ) => {
    e.preventDefault();
    setLoading( true );
    fetch(`${process.env.REACT_APP_API_URL}/wp-json/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {username, password} )
    })
    .then( resp => resp.json() )
    .then( resp => {
      setLoading( false );
      if( resp.statusCode == 200 ) {
        setToken( resp.data.token );
        sessionStorage.setItem('token', resp.data.token);
        setUser(resp.data);
        setError( null );
      }else {
        setError( resp.message );
      }
    } );
  }

  return <div className={styles.login}>
    <form action="" method="post" className={styles["login-form"]} onSubmit={login}>
      <img className={styles["logo"]} src={logo} alt="Mektebli logo" />
      <h1>Login</h1>
      { error && <Error error={error} />}
      <input type="text" onChange={upadteUsername} value={username} placeholder="Username" required/>
      <input type="password" onChange={upadtePassword} value={password} placeholder="Password" required/>
      <input type="submit" value={loading ? "Loading..." : "Login"} />
    </form>
  </div>;
}
