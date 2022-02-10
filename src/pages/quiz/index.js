import React, { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";

import Loading    from '../../components/loading';
import Error      from '../../components/error';
import SingleQuiz from '../../components/quiz';

export default function Quiz( { token } ) {

  const { id } = useParams();

  const [ quiz,    setQuiz ]    = useState( null );
  const [ error,   setError ]   = useState( null );
  const [ loading, setLoading ] = useState( null );

  useEffect( () => {

    setLoading( true );

    setQuiz( null );

    setError( null );

    fetch( `${process.env.REACT_APP_API_URL}/wp-json/symplequiz/v1/quiz/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    } )

    .then( resp => resp.json() )

    .then( resp => {

      if( resp.statusCode && resp.statusCode != 200 ) {

        setError( resp.message );

        setLoading( false );

      }else {

        if( resp.quiz !== false ) {

          setQuiz( resp );

          setLoading( false );

        }else {

          setError( 'Тест не найден' );

          setLoading( false );

        }

      }

    } )
    .catch( ( error ) => {

      setError( error );

      console.log( 'error', error );

    });

  }, [ id ] );

  return <div>
    
    { error && <Error error={ error } />}
    { loading && <Loading /> }
    { quiz && <SingleQuiz token={ token } quiz={ quiz } /> }

  </div>;

}