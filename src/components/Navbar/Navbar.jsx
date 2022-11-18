import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className='navbar'>
      <div>
        <Link to="/" className='logo'>React Blog</Link>
      </div>
      <ul className='liens'>
        <li>
          <Link to="/" className='lien'>Accueil</Link>
        </li>
        <li>
          <Link to="/ajouter-article" className='lien buttonArticle'>Créer article</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
