import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Loading    from '../../components/loading';
import Navigation from '../../components/navigation';

import styles from './results.module.scss';

export default function Results( { token } ) {

  const [ loading, setLoading ] = useState( true );
  const [ results, setResults ] = useState( [] );

  useEffect( function() {
    
    fetch( `${process.env.REACT_APP_API_URL}/wp-json/symplequiz/v1/results`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    } )

    .then( resp => resp.json() )

    .then( resp => {
      console.log('resp', resp);
      setLoading( false );
      if( resp.statusCode && resp.statusCode != 200 ) {

        // setError( false );

        // setLoading( false );

      }else {

        if( resp.results ) {

          setResults( resp.results );

          // setResult( resp.result );

          // setLoading( false );

        }else {

          setResults( [] );

        }

      }

    } )

    .catch( ( error ) => {

      setLoading( false );

      console.error( 'error',, error );

    });
  }, [] );
  
  return (

    <div className={ styles.results }>

      <Navigation />

      { loading && <Loading /> }

      { results.length > 0 ? (

        <>

          <h1>Результаты ({ results ? results.length : '' })</h1>

          <div className={ styles.list }>


            { results.map( result => {

              return <Link className={ styles.link } to={ `/result/${result.id}` }><b>{ result.quiz_title }</b> - <span>{ result.takendate }</span></Link>
            
            } ) }

          </div>

        </>

      ) : (

        ! loading && 'Нет результатов'
        
      ) }

    </div>

  )
}