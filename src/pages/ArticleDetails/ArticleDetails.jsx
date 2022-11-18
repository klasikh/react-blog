import React from 'react';
import { useParams } from 'react-router-dom';
import useGetData from '../../services/useGetData';

const BlogDetails = () => {

  const { id } = useParams();
  const { data : blog, isLoading, error } = useGetData('http://localhost:8000/blogs/'+id);

  const handleDelete = () => {
      fetch('http://localhost:8000/blogs/'+id, {
        method: 'DELETE'
      }
      ).then( () => {
        console.log('Supprimé avec succès');
      })
  }
  
  return (
    <div className='detail-blog'>
      { error && <div><p style={{ color: '#f00' }}>{error}</p></div> }
      { isLoading && <div><p>En cours de chargement...</p></div> }
      { blog && (
        <div className="blog">
          <h2 className="blog-titre">{blog.title}</h2>
           <small className="blog-publication-date">{`Publié le : ${blog.date}`}</small>
           <p className='blog-body'>{blog.body}</p>
           <p className='blog-author'>{`Publié par : ${blog.author}`}</p>
           <button onClick={ handleDelete }>Supprimer</button>
        </div>
      )}
    </div>
  )
}

export default BlogDetails
