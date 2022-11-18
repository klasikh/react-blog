import React, { useState, useEffect } from 'react';
import BlogList from '../../components/Blog/BlogList';
import useGetData from '../../services/useGetData';

const Home = () => {

  // const handleDelete = (id) => {
  //     const newBlogs = blogs.filter( (blog) => blog.id !== id);
  //     setBlog(newBlogs);
  // }

  const { data: blogs, isLoading, error } = useGetData('http://localhost:8000/blogs?_sort=id&_order=desc');

  return (
    <div className='home'>
      { error && <div><p style={{ color: '#f00' }}>{error}</p></div> }
      { isLoading && <div><p>En cours de traitement...</p></div> }
      { blogs && <BlogList blogs={blogs} title={'Liste des blogs'} />}
      {/* <BlogList blogs={blogs.filter( (blog) => blog.author == 'Tony')} title={'Liste des blogs de Tony'}  handleDelete={handleDelete} /> */}
    </div>
  );
}

export default Home;