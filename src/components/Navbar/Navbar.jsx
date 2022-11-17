import React from 'react'

const Navbar = () => {
  
  return (
    <div className='navbar'>
      <div>
        <a href="#" className='logo'>React Blog</a>
      </div>
      <ul className='liens'>
        <li>
          <a href="#" className='lien'>Accueil</a>
        </li>
        <li>
          <a href="#" className='lien buttonArticle'>Créer article</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
