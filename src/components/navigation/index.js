import React from 'react'
import { RiArrowLeftCircleLine } from 'react-icons/ri'
import { useNavigate } from 'react-router';

import styles from './navigation.module.scss';

export default function Navigation() {

  const navigate = useNavigate();
  
  return (

    <div className={ styles.navigation }>
    
      <RiArrowLeftCircleLine onClick={ () => navigate( -1 ) } />
 
    </div>
  )

}