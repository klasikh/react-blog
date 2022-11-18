import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='404'>
        <h2>404 Error</h2>
        <h3>Page introuvable</h3>
        <p>Cette page est introuvable ou n'existe pas...</p>
        <Link to={'/'}>Aller à la page d'accueil</Link>
    </div>
  )
}

export default NotFound
