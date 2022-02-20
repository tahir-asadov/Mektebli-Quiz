import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Loading    from '../../components/loading';
import Error      from '../../components/error';
import Navigation from '../../components/navigation';

import styles from './result.module.scss';

export default function Result( { token } ) {
  
  const [ error,   setError ]   = useState( null );
  const [ loading, setLoading ] = useState( null );
  const [ result,  setResult ]  = useState( null );

  const { id } = useParams();

  useEffect( () => {

    setLoading( true );

    setError( null );

    fetch( `${process.env.REACT_APP_API_URL}/wp-json/symplequiz/v1/result/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    } )

    .then( resp => resp.json() )

    .then( resp => {

      if( resp.statusCode && resp.statusCode != 200 ) {

        setError( false );

        setLoading( false );

      }else {

        if( resp.quiz !== false ) {

          setResult( resp.result );

          setLoading( false );

        }else {

          setError( 'Результат не найден' );

          setLoading( false );

        }

      }

    } )

    .catch( ( error ) => {

      setError( error );

      console.error( 'error', error );

    });

  }, [id] );

  return <div className={ styles.result }>

  { error && <Error error={ error } />}

  { loading && <Loading /> }

  <Navigation />

  <div dangerouslySetInnerHTML={ { __html: result } }></div>

  </div>;

}