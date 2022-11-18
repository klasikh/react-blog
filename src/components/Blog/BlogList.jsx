import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="bloglist">
            <h2>{title}</h2>
            {
            blogs.map( (blog) => (
                <div className="blog" key={blog.id}>
                <Link to={`/blogs/${blog.id}`} className='blog-titre'>{blog.title}</Link>
                <small className='blog-publication-date'>{blog.body}</small>
                <p className='blog-author'>{blog.author}</p>
                {/* <button onClick={ () => handleDelete(blog.id) }>Supprimer</button> */}
                </div>
            ))
            }
        </div>
    )
}

export default BlogList;
