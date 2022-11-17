import React, { useState, useEffect } from 'react';
import BlogList from '../Blog/BlogList';

const Home = () => {

  // props
  const [ blogs, setBlog ] = useState([
    {
      id: 1,
      title: "Bienvenue sur mon blog",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus commodi, in tempora laudantium debitis nesciunt",
      author: "Tony",
      date: "02/06/2017"
    },
    {
      id: 2,
      title: "La nuit des codeurs",
      body: "ducimus dolore eaque quaerat totam provident necessitatibus corporis eveniet consequatur ut rem cum quo recusandae?",
      author: "Duplex",
      date: "27/04/2021"
    }
  ]);

  const handleDelete = (id) => {
      const newBlogs = blogs.filter( (blog) => blog.id !== id);
      setBlog(newBlogs);
  }

  useEffect( () => {

  }, []);

  return (
    <div className='home'>
      <BlogList blogs={blogs} title={'Liste des blogs'} handleDelete={handleDelete} />
      {/* <BlogList blogs={blogs.filter( (blog) => blog.author == 'Tony')} title={'Liste des blogs de Tony'} /> */}
    </div>
  );
}

export default Home;